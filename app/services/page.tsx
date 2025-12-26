"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import content from "@/lib/content";
import ServiceCard from "@/components/services/ServiceCard";

const services = content.services.map((s, i) => ({
  num: String(i + 1).padStart(2, "0"),
  icon: s.icon,
  title: s.title,
  description: s.description,
  href: "/contact",
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Services: React.FC = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:pt-7">
      <div className="container mx-auto pb-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service, index) => {
            return (
              <motion.div key={index} variants={item}>
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
