"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
}

interface GitHubReposProps {
  username: string;
}

export default function GitHubRepos({ username }: GitHubReposProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })
      .then((data) => {
        const sortedRepos = data.sort((a: Repo, b: Repo) =>
          a.name.localeCompare(b.name)
        );
        setRepos(sortedRepos);
        setError(null);
      })
      .catch(() => {
        setError("Failed to load repositories");
      });
  }, [username]);

  return (
    <div>
      {error && <p className="text-center text-red-400">{error}</p>}
      <div className="flex flex-col gap-3">
        {repos.map((repo, idx) => (
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: 1.0 + Math.min(idx * 0.03, 0.5),
            }}
            key={repo.id}
            href={`https://github.com/${username}/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-b-2 border-zinc-600 py-2 duration-300 hover:border-green-500 hover:text-green-500">
              <h3 className="text-lg font-semibold">{repo.name}</h3>
              {repo.description && (
                <p className="mt-1 text-xs">{repo.description}</p>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
