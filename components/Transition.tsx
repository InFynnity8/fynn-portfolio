"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
};

const Transition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="effect-1">
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={pathname}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
