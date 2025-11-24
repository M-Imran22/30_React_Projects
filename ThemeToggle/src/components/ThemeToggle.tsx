import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("dark-light", theme);
    localStorage.setItem("theme", theme);
    console.log(theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-4xl font-bold mb-4 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Presistent Theme : {theme}
        </h1>
        <button
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;
