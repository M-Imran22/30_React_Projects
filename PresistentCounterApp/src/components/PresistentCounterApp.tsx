import { useEffect, useState } from "react";

function PresistentCounterApp() {
  const [count, setCount] = useState(0);
  const storedCount = localStorage.getItem("key");
  const countValue = storedCount !== null ? JSON.parse(storedCount) : 0;

  useEffect(() => {
    console.log("Page reloaded.");
    console.log(countValue);
    setCount(countValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(count));
  }, [count]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Persistent Counter</h1>
        <div className="text-5xl font-bold text-blue-600">{count}</div>
        <div className="space-x-4">
          <button
            className="px-4 py-2 rounded-xl border-2 border-green-500 text-green-600 hover:bg-green-100 transition"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 rounded-xl border-2 border-blue-500 text-blue-600 hover:bg-blue-100 transition"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 rounded-xl border-2 border-red-500 text-red-600 hover:bg-red-100 transition"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default PresistentCounterApp;
