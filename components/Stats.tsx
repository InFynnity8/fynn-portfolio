"use client";

import React, { FC } from "react";
import CountUp from "react-countup";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 10, text: "Projects completed" },
  { num: 12, text: "Technologies mastered" },
  { num: 607, text: "Total commits" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Stats: FC = () => {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="pt-0 pb-12 xl:pt-0 xl:pb-5">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex-1 flex justify-center items-center gap-4 xl:justify-start"
            >
              {reduced ? (
                <div className="text-3xl xl:text-[45px] font-extrabold text-accent">
                  {stat.num.toLocaleString()}
                </div>
              ) : (
                <CountUp
                  start={0}
                  end={stat.num}
                  duration={2.75}
                  className="text-3xl xl:text-[45px] font-extrabold text-accent"
                  separator=","
                />
              )}
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
