import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [selected, setSelected] = useState("/");

  useEffect(() => {
    // set the selected nav option
    setSelected(window.location.href.split("/")[3]);
  }, []);

  return (
    <nav className="max-w-2xl mx-auto px-5 md:px-0 my-8">
      <ul className="space-x-5 flex">
        {[
          { name: "home", url: "/" },
           { name: "projects", url: "/projects" },
          { name: "writing", url: "/writing" },
          { name: "learning journey", url: "/learning" },
          { name: "learning artifacts", url: "/artifacts" },
        ].map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.url} passHref>
                <h4 className="text-xs tracking-wider text-neutral-700 rounded-sm hover:text-white bg-white p-1 hover:bg-neutral-600 ease-linear transition-colors hover:cursor-pointer hover:underline">
                  {link.name}
                </h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
