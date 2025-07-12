'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeCom({ children }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-gray-700">
        {children}
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${resolvedTheme === 'dark' ? 'dark:bg-[rgb(16,23,42)] dark:text-gray-200' : 'bg-white text-gray-700'}`}>
      {children}
    </div>
  );
}