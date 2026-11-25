"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/50 text-lg backdrop-blur-md transition hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
