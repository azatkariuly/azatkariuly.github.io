"use client";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useState } from "react";

function Header() {
  const TABS = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Publications", link: "/publications" },
    { name: "Contact", link: "/contact" },
  ];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="font-medium text-black dark:text-white">azatkariuly</div>
      {mounted && (
        <div className="flex items-center gap-4">
          {TABS.map((tab, index) => (
            <Link
              href={tab.link}
              key={index}
              type="button"
              className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {tab.name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      )}
    </header>
  );
}

export default Header;
