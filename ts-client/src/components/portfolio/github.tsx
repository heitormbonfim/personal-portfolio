import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data.sort((a: Repo, b: Repo) =>
          a.name.localeCompare(b.name),
        );
        setRepos(sortedRepos);
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, [username]);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {repos.map((repo) => (
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.05 }}
              key={repo.id}
              href={`https://github.com/${username}/${repo.name}`}
              target="_blank"
            >
              <div className="border-b-2 border-zinc-600 py-2 duration-300 hover:border-green-500 hover:text-green-500">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                {repo.description && (
                  <p className="mt-1 text-xs">{repo.description}</p>
                )}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
