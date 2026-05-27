'use client';

import { useEffect, useState } from 'react';
import { getTheme, toggleTheme as toggleThemeUtil } from '../lib/theme';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(getTheme() === 'dark');
    setMounted(true);
  }, []);

  const handleToggle = () => {
    toggleThemeUtil();
    setIsDark(getTheme() === 'dark');
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="p-2.5 rounded-xl bg-gray-200 dark:bg-[#1e1e1e] border border-gray-300 dark:border-zinc-800 hover:opacity-80 transition cursor-pointer text-xs font-semibold"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
