"use client";

import CodingEditor from "@/app/components/CodingEditor";

export default function PythonCalculations() {
  const prompt = (
    <div>
      <h1 className="text-2xl font-bold mb-4">Python: Basic Calculations</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Python can perform math operations like addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), and division (<code>/</code>).
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Store numbers in variables and use operators to calculate results.</li>
        <li>Use <code>print()</code> to show the result.</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Edit the numbers below or try different operations!
      </p>
    </div>
  );

  const starterCode = `# Define two numbers\na = 10\nb = 5\n# Perform calculations\nsum = a + b\ndifference = a - b\nproduct = a * b\nquotient = a / b\n# Display results\nprint("Sum:", sum)\nprint("Difference:", difference)\nprint("Product:", product)\nprint("Quotient:", quotient)`;

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