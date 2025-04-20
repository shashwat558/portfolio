"use client"
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playFair = Playfair_Display({
  weight: "400",
  subsets: ["latin"]
});

const updates = {
  "2025": [
    { month: "Apr", text: "Got my first internship as a Web developer" },
    { month: "Mar", text: "Started contributing heavily to open source" },
    { month: "Feb", text: "Learning langchain to build a RAG chatbot for my project 🤖" },
    { month: "Jan", text: "Completed my first good project 'Buildtogether' 🔨" }
  ],
  "2024": [
    { month: "Dec", text: "Got detained from midterm exams 🤣" },
  ],
};

export default function LifeUpdates() {
  return (
    <div className="max-w-[950px] mx-auto px-6 py-12">
      <h2 className={`text-5xl font-semibold mb-10 text-gray-900 dark:text-white ${playFair.className}`}>
        Life Updates
      </h2>

      <div className="space-y-12">
        {Object.entries(updates)
          .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
          .map(([year, items]) => (
            <div key={year}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                {year}
              </h3>
              <ul className="space-y-4 pl-6 border-l-4 border-gray-300 dark:border-gray-600">
                {items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="relative text-gray-700 dark:text-gray-300 pl-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="absolute left-0 top-1.5 w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full" />
                    <span className="font-semibold">{item.month}:</span> {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
