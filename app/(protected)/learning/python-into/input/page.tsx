"use client";

import CodingEditor from "@/app/components/CodingEditor";

export default function PythonInput() {
  const prompt = (
    <div>
      <h1 className="text-2xl font-bold mb-4">Python: Getting User Input</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Python’s <code>input()</code> function lets you ask the user for information. The input is stored as a string, which you can use in your program.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li><code>name = input("Enter your name: ")</code> prompts the user and stores their response.</li>
        <li>Combine it with <code>print()</code> to respond to the user.</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Try running the code below and entering your name in the console!
      </p>
    </div>
  );

  const starterCode = `# Ask for the user's name\nname = input("Enter your name: ")\n# Greet the user\nprint("Hello, " + name + "! Enjoy coding.")`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <CodingEditor
        prompt={prompt}
        language="python"
        starterCode={starterCode}
      />
    </div>
  );
}