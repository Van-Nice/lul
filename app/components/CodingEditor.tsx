"use client";

import React, {useState, useRef, JSX} from "react";
import dynamic from "next/dynamic";
import { Play } from "lucide-react";

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-800 animate-pulse rounded-md"></div>,
});

interface CodingEditorProps {
  prompt?: JSX.Element;
  language: string;
  starterCode: string;
  editorOptions?: any; // Can be typed more strictly with Monaco's IStandaloneEditorConstructionOptions if needed
}

const CodingEditor: React.FC<CodingEditorProps> = ({
                                                     prompt,
                                                     language,
                                                     starterCode,
                                                     editorOptions,
                                                   }) => {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [waitingForInput, setWaitingForInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Default Monaco Editor options
  const defaultEditorOptions = {
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    wordWrap: "on" as const,
    tabSize: 4,
    automaticLayout: true,
    theme: "vs-dark",
  };

  const monacoOptions = { ...defaultEditorOptions, ...editorOptions };

  // Simulate running the code
  const runCode = () => {
    setIsRunning(true);
    setOutput("");
    setWaitingForInput(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Handle user input submission
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput((prev) => `${prev}${inputValue}\n`);
    setWaitingForInput(false);
    setIsRunning(false);
    setInputValue("");
    // Simulate output based on code pattern (matches demo behavior)
    const nameMatch = code.match(/name\s*=\s*input\([^)]+\)/);
    if (nameMatch) {
      setOutput((prev) => `${prev}Hello, ${inputValue}! Enjoy coding.\n`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Optional Prompt Section */}
      {prompt && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {prompt}
        </div>
      )}

      {/* Code Editor */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Code Editor</h2>
          <button
            onClick={runCode}
            disabled={isRunning || waitingForInput}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm transition-colors ${
              isRunning || waitingForInput
                ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }`}
          >
            <Play className="h-4 w-4 mr-2" />
            Run Code
          </button>
        </div>
        <div className="h-[400px]">
          <MonacoEditor
            height="100%"
            language={language}
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={monacoOptions}
          />
        </div>
      </div>

      {/* Console */}
      <div className="bg-gray-900 dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
        <div className="px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 text-sm text-gray-100">
          Console
        </div>
        <div className="h-[200px] p-4 overflow-auto text-gray-100 font-mono">
          <pre className="whitespace-pre-wrap">{output}</pre>
          {waitingForInput && (
            <form onSubmit={handleInputSubmit} className="mt-2 flex">
              <span className="text-green-400"></span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 ml-2 bg-transparent border-none outline-none text-white"
                placeholder="Enter your input..."
                autoFocus
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingEditor;