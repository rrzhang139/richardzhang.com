import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [selected, setSelected] = useState("/");

  useEffect(() => {
    // set the selected nav option
    setSelected(window.location.href.split("/")[3]);
  }, []);

  const links = [
    { name: "Can", url: "/" },
    { name: "Writing", url: "/writing" },
    { name: "Bookmarks", url: "/bookmarks" },
    // { name: "Photography", url: "/photography" },
  ];

  return (
    <nav className="max-w-xl mx-auto block p-4">
      <ul className="space-x-1 md:space-x-5 flex justify-center ">
        {links.map((link) => {
          return (
            <li>
              <Link href={link.url}>
                <h4 className="text-xs tracking-wider px-4 py-2 text-neutral-300 rounded-sm hover:text-white transition-colors ease-linear hover:cursor-pointer hover:bg-stone-800">
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
