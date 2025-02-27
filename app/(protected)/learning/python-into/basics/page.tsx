"use client";

import CodingEditor from "@/app/components/CodingEditor";

export default function PythonBasics() {
  const prompt = (
    <div>
      <h1 className="text-2xl font-bold mb-4">Python Basics: Variables and Printing</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        In Python, you can store information in <strong>variables</strong> and display it using the{" "}
        <code>print()</code> function. Try declaring a variable and printing it below!
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Use <code>=</code> to assign a value to a variable (e.g., <code>x = 10</code>).</li>
        <li>Use <code>print(x)</code> to display the value of <code>x</code>.</li>
      </ul>
    </div>
  );

  const starterCode = `# Declare a variable\nx = 5\n# Print the variable\nprint(x)`;

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