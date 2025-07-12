'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeCom({ children }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-white text-gray-700 min-h-screen">
        {children}
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${resolvedTheme === 'dark' ? 'dark bg-[rgb(16,23,42)] text-gray-200' : 'bg-white text-gray-700'}`}>
      {children}
    </div>
  );
}

export default ThemeCom;