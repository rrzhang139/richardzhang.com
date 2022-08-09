import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const pathString = window.location.href.split("/")[3];
    setPath(pathString);
  }, []);

  return (
    <nav className="block max-w-xl pt-5 mx-auto">
      <ul
        className="flex justify-start p-4 space-x-3 sm:justify-end"
        style={{
          fontFamily: "Source Serif Pro, serif",
        }}
      >
        <Link href="/">
          <h4
            className={`text-sm hover:cursor-pointer ${
              path === "" && "border-b border-black"
            }`}
            onClick={() => setPath("")}
          >
            home
          </h4>
        </Link>
        <Link href="/projects">
          <h4
            className={`text-sm hover:cursor-pointer ${
              path === "projects" && "border-b border-black"
            }`}
            onClick={() => setPath("projects")}
          >
            projects
          </h4>
        </Link>
        <Link href="/writing">
          <h4
            className={`text-sm hover:cursor-pointer ${
              path === "writing" && "border-b border-black"
            }`}
            onClick={() => setPath("writing")}
          >
            writing
          </h4>
        </Link>
        <Link href="/bookmarks">
          <h4
            className={`text-sm hover:cursor-pointer ${
              path === "bookmarks" && "border-b border-black"
            }`}
            onClick={() => setPath("bookmarks")}
          >
            bookmarks
          </h4>
        </Link>
        {/* <Link href="/photography">
          <h4
            className={`text-sm hover:cursor-pointer ${
              path === "photography" && "border-b border-black"
            }`}
            onClick={() => setPath("photography")}
          >
            photography
          </h4>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Nav;
