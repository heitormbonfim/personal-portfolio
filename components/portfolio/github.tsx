"use client";

import { GlobalContext } from "@/app/contexts/global-provider";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  FaBook,
  FaCodeBranch,
  FaGitAlt,
  FaGithub,
  FaInfoCircle,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

interface Repo {
  id: number;
  name: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
}

interface Contributor {
  contributions: number;
}

interface GitHubReposProps {
  username: string;
}

interface CachedData {
  user: GitHubUser;
  repos: Repo[];
  commitCounts: Record<string, number>;
  timestamp: number;
}

const CACHE_TTL = 5 * 60 * 1000;

function getCached(username: string): CachedData | null {
  try {
    const raw = sessionStorage.getItem(`github:${username}`);
    if (!raw) return null;
    const cached: CachedData = JSON.parse(raw);
    if (Date.now() - cached.timestamp > CACHE_TTL) return null;
    return cached;
  } catch {
    return null;
  }
}

function setCache(username: string, data: Omit<CachedData, "timestamp">) {
  try {
    sessionStorage.setItem(
      `github:${username}`,
      JSON.stringify({ ...data, timestamp: Date.now() })
    );
  } catch {
    // sessionStorage full or unavailable
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function GitHubRepos({ username }: GitHubReposProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [commitCounts, setCommitCounts] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  const { isMobile } = useContext(GlobalContext);
  const t = useTranslations("portfolio");

  useEffect(() => {
    const cached = getCached(username);
    if (cached) {
      Promise.resolve().then(() => {
        setUser(cached.user);
        setRepos(cached.repos);
        setCommitCounts(cached.commitCounts);
      });
      return;
    }

    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => {
        if (!r.ok) throw new Error("Failed to fetch user");
        return r.json();
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`
      ).then((r) => {
        if (!r.ok) throw new Error("Failed to fetch repositories");
        return r.json();
      }),
    ])
      .then(([userData, repoData]: [GitHubUser, Repo[]]) => {
        const nonForked = repoData.filter((repo) => !repo.fork);
        setUser(userData);
        setRepos(nonForked);
        setError(null);

        const topByStars = [...nonForked]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);

        Promise.all(
          topByStars.map((repo) =>
            fetch(
              `https://api.github.com/repos/${username}/${repo.name}/contributors?per_page=100`
            )
              .then((r) => (r.ok ? r.json() : []))
              .then((contributors: Contributor[]) => ({
                name: repo.name,
                commits: contributors.reduce(
                  (sum, c) => sum + c.contributions,
                  0
                ),
              }))
              .catch(() => ({ name: repo.name, commits: 0 }))
          )
        ).then((results) => {
          const counts: Record<string, number> = {};
          for (const r of results) {
            if (r.commits > 0) counts[r.name] = r.commits;
          }
          setCommitCounts(counts);
          setCache(username, { user: userData, repos: nonForked, commitCounts: counts });
        });
      })
      .catch(() => {
        setError("Failed to load GitHub data");
      });
  }, [username]);

  const totalStars = useMemo(
    () => repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    [repos]
  );

  const totalForks = useMemo(
    () => repos.reduce((sum, r) => sum + r.forks_count, 0),
    [repos]
  );

  const languages = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
    }
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return Object.entries(counts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / total) * 100),
      }))
      .sort((a, b) => b.count - a.count);
  }, [repos]);

  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <div className="flex w-full flex-col gap-8">
      {repos.length > 0 && (
        <p className="flex items-center gap-2 text-sm text-zinc-400">
          <FaInfoCircle className="shrink-0" />
          {t("dataDisclaimer")}
        </p>
      )}

      {user && <StatsOverview repos={repos} totalStars={totalStars} totalForks={totalForks} followers={user.followers} isMobile={isMobile} />}

      {languages.length > 0 && <LanguageBar languages={languages} isMobile={isMobile} />}

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, idx) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: isMobile ? 0.05 : Math.min(idx * 0.06, 0.5),
            }}
            className="group flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-green-500"
          >
            <div>
              <div className="mb-2 flex items-center gap-2">
                <FaGithub className="shrink-0 text-zinc-400" />
                <h3 className="truncate text-lg font-semibold text-zinc-50 group-hover:text-green-500">
                  {repo.name}
                </h3>
              </div>
              {repo.description && (
                <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
                  {repo.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block size-3 rounded-full"
                    style={{
                      backgroundColor:
                        LANGUAGE_COLORS[repo.language] ?? "#ccc",
                    }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {repo.stargazers_count}
                </span>
              )}
              {commitCounts[repo.name] && (
                <span className="flex items-center gap-1">
                  <FaGitAlt className="text-orange-400" />
                  {commitCounts[repo.name]}
                </span>
              )}
              <span className="ml-auto">{formatDate(repo.updated_at)}</span>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  );
}

function StatsOverview({
  repos,
  totalStars,
  totalForks,
  followers,
  isMobile,
}: {
  repos: Repo[];
  totalStars: number;
  totalForks: number;
  followers: number;
  isMobile: boolean;
}) {
  const stats = [
    { label: "Repositories", value: repos.length, icon: FaBook },
    { label: "Total Stars", value: totalStars, icon: FaStar },
    { label: "Total Forks", value: totalForks, icon: FaCodeBranch },
    { label: "Followers", value: followers, icon: FaUsers },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: isMobile ? 0.05 : idx * 0.1,
          }}
          className="flex flex-col items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 p-4"
        >
          <stat.icon className="text-xl text-green-500" />
          <span className="text-2xl font-bold text-zinc-50">{stat.value}</span>
          <span className="text-xs text-zinc-400">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function LanguageBar({
  languages,
  isMobile,
}: {
  languages: { name: string; count: number; percentage: number }[];
  isMobile: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: isMobile ? 0.1 : 0.5 }}
      className="w-full"
    >
      <div className="mb-3 flex h-3 w-full overflow-hidden rounded-full">
        {languages.map((lang) => (
          <div
            key={lang.name}
            title={`${lang.name}: ${lang.percentage}%`}
            style={{
              width: `${lang.percentage}%`,
              backgroundColor: LANGUAGE_COLORS[lang.name] ?? "#ccc",
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {languages.map((lang) => (
          <span key={lang.name} className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span
              className="inline-block size-2.5 rounded-full"
              style={{
                backgroundColor: LANGUAGE_COLORS[lang.name] ?? "#ccc",
              }}
            />
            {lang.name}{" "}
            <span className="text-zinc-500">{lang.percentage}%</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
