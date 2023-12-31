"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFutbol } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
config.autoAddCss = false;

function Menu({ href }) {
  const pathname = usePathname();
  const isActive = pathname;

  return (
    <aside className="md:w-1/4 bg-green-900 py-10 text-center">
      <h2 className="text-4xl font-black text-center text-white flex justify-center items-center">
        <FontAwesomeIcon
          icon={faFutbol}
          className=" animate-bounce  text-green-300 text-2xl block hover:text-green-100 mr-6"
        />
        Futbolito
      </h2>
      <nav className="mt-10 flex flex-col justify-between items-left Linkl-6">
        <hr className="mt-2 mb-2 border-t border-green-300" />

        <Link
          href="/"
          className={`${
            isActive === "/" ? "text-green-300" : "text-white"
          }  text-2xl block hover:text-green-100`}
        >
          About!
        </Link>
        <hr className="mt-2 mb-2 border-t border-green-300" />
        <Link
          href="/positionstable"
          className={`${
            isActive === "/positionstable" ? "text-green-300" : "text-white"
          } text-2xl block hover:text-green-100`}
        >
          Positions table
        </Link>
        <hr className="mt-2 mb-2 border-t border-green-300" />
        <Link
          href="/addteams"
          className={`${
            isActive === "/matchestable" ? "text-green-300" : "text-white"
          } text-2xl block hover:text-green-100`}
        >
          Add a team!
        </Link>
        <hr className="mt-2 mb-2 border-t border-green-300" />
        <Link
          href="/manageteams"
          className={`${
            isActive === "/manageteams" ? "text-green-300" : "text-white"
          } text-2xl block  hover:text-green-100`}
        >
          Manage teams
        </Link>
        <hr className="mt-2 mb-2 border-t border-green-300" />
      </nav>
    </aside>
  );
}

export default Menu;
