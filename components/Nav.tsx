"use client";

import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  path: string;
};

const links: NavLink[] = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8" aria-label="Primary">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            aria-current={isActive ? "page" : undefined}
            className={`capitalize font-medium transition-all ${
              isActive
                ? "text-accent"
                : "text-white hover:text-accent"
            } focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-sm px-1`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
