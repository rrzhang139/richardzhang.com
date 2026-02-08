import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

const Nav = () => {
  const [selected, setSelected] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSelected(window.location.href.split("/")[3]);
    }
  }, []);

  const links = [
    { name: "home", url: "/" },
    { name: "projects", url: "/projects" },
    { name: "writing", url: "/writing" },
    { name: "learning journey", url: "/learning" },
    { name: "teaching", url: "/teaching" },
    { name: "learning artifacts", url: "/artifacts" },
  ];

  return (
    <nav className="theme-sync max-w-2xl mx-auto px-5 md:px-0 my-8 bg-eggshell dark:bg-midnight sticky top-0 z-10">
      <div className="theme-sync flex justify-between items-center">
        {/* Desktop nav */}
        <ul className="theme-sync space-x-5 hidden md:flex">
          {links.map((link, index) => (
            <li key={index} className="theme-sync">
              <Link href={link.url} passHref>
                <h4 className="theme-sync theme-sync-text nav-item text-xs tracking-wider dark:text-neutral-300 text-neutral-700 rounded-sm hover:text-white dark:hover:text-white bg-eggshell dark:bg-midnight p-1 hover:bg-neutral-600 dark:hover:bg-neutral-600 ease-linear hover:cursor-pointer hover:underline whitespace-nowrap">
                  {link.name}
                </h4>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden theme-sync theme-sync-text p-2 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-neutral-600 rounded-sm ease-linear"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <button
          onClick={toggleTheme}
          className="theme-sync theme-sync-text theme-toggle p-3 rounded-full text-sm tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-white dark:hover:text-white bg-eggshell dark:bg-midnight hover:bg-neutral-600 dark:hover:bg-neutral-600 ease-linear flex-shrink-0"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ fontSize: '1.25rem' }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="theme-sync md:hidden mt-2 pb-2 space-y-1">
          {links.map((link, index) => (
            <li key={index} className="theme-sync">
              <Link href={link.url} passHref>
                <h4
                  onClick={() => setMenuOpen(false)}
                  className="theme-sync theme-sync-text nav-item text-xs tracking-wider dark:text-neutral-300 text-neutral-700 rounded-sm hover:text-white dark:hover:text-white bg-eggshell dark:bg-midnight p-2 hover:bg-neutral-600 dark:hover:bg-neutral-600 ease-linear hover:cursor-pointer hover:underline"
                >
                  {link.name}
                </h4>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
