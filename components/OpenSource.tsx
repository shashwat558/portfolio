
import { FaGithub } from "react-icons/fa";

type Contribution = {
  repo: string;
  url: string;
  description: string;
  tags?: string[];
  date: string;
};

const contributions: Contribution[] = [
  {
    repo: "vercel/next.js",
    url: "https://github.com/vercel/next.js/pull/12345",
    description: "Fixed a bug with image optimization in edge environments",
    tags: ["Next.js", "Edge", "Optimization"],
    date: "Mar 2025",
  },
  {
    repo: "tailwindlabs/tailwindcss",
    url: "https://github.com/tailwindlabs/tailwindcss/pull/6789",
    description: "Improved dark mode handling in JIT mode",
    tags: ["TailwindCSS", "JIT", "Dark Mode"],
    date: "Jan 2025",
  },
  {
    repo: "shadcn/ui",
    url: "https://github.com/shadcn/ui/pull/222",
    description: "Contributed a new component variation for Dialog",
    tags: ["React", "Components", "Design System"],
    date: "Dec 2024",
  },
];

export default function OpenSourceContributions() {
  return (
    <div className="max-w-[950px] mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Open Source Contributions
      </h2>
      <ul className="space-y-6">
        {contributions.map((contribution, index) => (
          <li
            key={index}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
          >
            <a
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 flex items-center gap-2"
            >
              <FaGithub className="text-black" /> {contribution.repo}
            </a>
            <p className="text-gray-600 mt-1">{contribution.description}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-sm">
              {contribution.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">{contribution.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
