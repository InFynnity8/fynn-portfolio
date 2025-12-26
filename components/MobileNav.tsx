"use client";

import React, { FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav: FC = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-secondary border-accent/20">
        {/* logo */}
        <div className="mt-20 mb-20 text-2xl text-center">
          <Link href="/">
            <h1 className="font-semibold text-3xl">
              Fynn<span className="text-accent">.</span>{" "}
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-5">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : "text-white"
              } capitalize text-[18px] hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
