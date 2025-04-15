"use client";
import React, { useState, useEffect } from "react";

type TextArray = {
  name: string;
  key: string;
}[];

const EnvSeperator = () => {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState<TextArray>([]);

  useEffect(() => {
    const lines = text.split("\n").filter((line) => line.includes("="));

    const parsed: TextArray = lines.map((line) => {
      const indexOfEqual = line.indexOf("=");
      const name = line.slice(0, indexOfEqual).trim();
      let value = line.slice(indexOfEqual + 1).trim();

      
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      return {
        name,
        key: value,
      };
    });

    setTextArray(parsed);
  }, [text]);

  const handleInputChange = (
    index: number,
    field: "name" | "key",
    value: string
  ) => {
    setTextArray((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  return (
    <div className="p-4 h-screen max-w-2xl mx-auto">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your .env variables here..."
        rows={10}
        className="border w-full p-2 mb-4 rounded"
      />

      {textArray.map((item, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            value={item.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="border p-1 w-1/2 rounded"
            placeholder="ENV key"
          />
          <input
            value={item.key}
            onChange={(e) => handleInputChange(index, "key", e.target.value)}
            className="border p-1 w-1/2 rounded"
            placeholder="ENV value"
          />
        </div>
      ))}
    </div>
  );
};

export default EnvSeperator;
