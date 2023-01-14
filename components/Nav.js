import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [selected, setSelected] = useState("/");

  useEffect(() => {
    // set the selected nav option
    setSelected(window.location.href.split("/")[3]);
  }, []);

  return (
    <nav className="max-w-2xl mx-auto px-5 md:px-0">
      <ul className="space-x-5 flex">
        {[
          { name: "home", url: "/" },
          { name: "writing", url: "/writing" },
        ].map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.url} passHref>
                <h4 className="text-xs tracking-wider py-2 text-neutral-300 rounded-sm hover:text-purple-600 ease-linear transition-colors hover:cursor-pointer hover:underline">
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
