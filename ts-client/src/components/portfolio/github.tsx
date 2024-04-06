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

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data.sort((a: Repo, b: Repo) =>
          a.name.localeCompare(b.name)
        );
        setRepos(sortedRepos);
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, [username]);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={`https://github.com/${username}/${repo.name}`}
          target="_blank"
        >
          <div className="p-4 border-2 border-zinc-400 hover:border-green-500 duration-300">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            {repo.description && <p className="mt-2">{repo.description}</p>}
          </div>
        </a>
      ))}
    </div>
  );
}
