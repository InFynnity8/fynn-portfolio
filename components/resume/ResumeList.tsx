"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useInView } from "framer-motion";

interface IResumeItem {
  startDate?: string;
  endDate?: string;
  title: string;
  subtitle: string;
}

interface IResumeListProps {
  title: string;
  description: string;
  items: IResumeItem[];
}

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

const ResumeList: React.FC<IResumeListProps> = ({
  title,
  description,
  items,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="flex flex-col gap-[15px] text-center xl:text-left"
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {description}
      </p>
      <ScrollArea className="h-[340px]">
        <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-[20px]">
          {items.map((itemData, index) => (
            <motion.li
              key={index}
              variants={item}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">
                {itemData.startDate}
                {itemData.endDate ? ` — ${itemData.endDate}` : ""}
              </span>
              <h3 className="text-[17px] text-center lg:text-left leading-6">
                {itemData.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{itemData.subtitle}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </ScrollArea>
    </motion.div>
  );
};

export default ResumeList;