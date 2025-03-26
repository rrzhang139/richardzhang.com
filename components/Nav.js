import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

const Nav = () => {
  const [selected, setSelected] = useState("/");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // set the selected nav option
    if (typeof window !== 'undefined') {
      setSelected(window.location.href.split("/")[3]);
    }
  }, []);

  return (
    <nav className="theme-sync max-w-2xl mx-auto px-5 md:px-0 my-8 bg-eggshell dark:bg-midnight sticky top-0 z-10">
      <div className="theme-sync flex justify-between items-center">
        <ul className="theme-sync space-x-5 flex overflow-x-auto">
          {[
            { name: "home", url: "/" },
            { name: "projects", url: "/projects" },
            { name: "writing", url: "/writing" },
            { name: "learning journey", url: "/learning" },
            { name: "learning artifacts", url: "/artifacts" },
          ].map((link, index) => {
            return (
              <li key={index} className="theme-sync">
                <Link href={link.url} passHref>
                  <h4 className="theme-sync theme-sync-text nav-item text-xs tracking-wider dark:text-neutral-300 text-neutral-700 rounded-sm hover:text-white dark:hover:text-white bg-eggshell dark:bg-midnight p-1 hover:bg-neutral-600 dark:hover:bg-neutral-600 ease-linear hover:cursor-pointer hover:underline whitespace-nowrap">
                    {link.name}
                  </h4>
                </Link>
              </li>
            );
          })}
        </ul>
        <button 
          onClick={toggleTheme}
          className="theme-sync theme-sync-text theme-toggle p-3 rounded-full text-sm tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-white dark:hover:text-white bg-eggshell dark:bg-midnight hover:bg-neutral-600 dark:hover:bg-neutral-600 ease-linear flex-shrink-0"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ fontSize: '1.25rem' }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
