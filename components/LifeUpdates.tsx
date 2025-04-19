import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  weight: "400",
  subsets: ["latin"]
})


// components/LifeUpdates.tsx
export default function LifeUpdates() {
  const updates = {
    "2025": [
      { month: "Apr", text: "Got my first internship as a Web developer" },
      { month: "Mar", text: "Started contributing heavily to open source" },
      { month: "February", text: "Learning langchain to build a RAG chatbot for my project 🤖" },
      {
        month: "Jan", text: "Completed my first good project 'Buildtogether' 🔨"
      }
    ],
    "2024": [
      { month: "Dec", text: "Got detained from midterm exams 🤣" },
    ],
  };


  return (
    <div className="max-w-[950] mx-auto px-6 py-10">
      <h2 className={`text-5xl font-semibold mb-8 ${playFair.className}`}>Life Updates</h2>
      <div className="space-y-10">
        {Object.entries(updates)
          .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) 
          .map(([year, items]) => (
            <div key={year}>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">{year}</h3>
              <ul className="space-y-2 pl-4 border-l-2 border-gray-300">
                {items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 pl-4 relative">
                    <span className="absolute left-0 top-1.5 w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="font-medium text-gray-800 dark:text-gray-300">{item.month}:</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
