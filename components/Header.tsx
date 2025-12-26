"use client";

import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const Header: FC = () => {
  const reduce = usePrefersReducedMotion();

  const logoVariants = {
    initial: { y: -6, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
  } as const;

  return (
    <motion.header
      initial={reduce ? undefined : { opacity: 0 }}
      animate={reduce ? undefined : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-3 xl:py-4 text-white bg-secondary/80 backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" aria-label="Homepage">
          <motion.h1
            className="font-semibold text-[24px] flex items-center gap-1"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            Fynn<span className="text-accent">.</span>
          </motion.h1>
        </Link>

        {/*desktop navbar*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </motion.header>
  );
};

export default Header;
