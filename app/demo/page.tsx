"use client";

import React from "react";
import CodingEditor from "@/app/components/CodingEditor";

const DemoPage = () => {
  const prompt = (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Instructions</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
        <li>Write or edit Python code in the editor below or to the right.</li>
        <li>Click <span className="text-indigo-600 dark:text-indigo-400 font-medium">"Run Code"</span> to execute it.</li>
        <li>Enter input in the console when prompted.</li>
        <li>View the output directly in the console.</li>
      </ul>
    </div>
  );

  const language = "python";
  const starterCode = `# Simple Python Demo
name = input("Enter your name: ")
print(f"Hello, {name}! Enjoy coding.")`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 px-4">
        {/* Left Column: Prompt */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {prompt}
        </div>
        {/* Right Column: Coding Editor */}
        <CodingEditor
          language={language}
          starterCode={starterCode}
          editorOptions={{
            fontSize: 16,
            theme: "vs-dark", // Explicitly set the theme here
          }}
        />
      </div>
    </div>
  );
};

export default DemoPage;