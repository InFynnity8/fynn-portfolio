"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import content from "@/lib/content";
import ProjectDetails from "@/components/work/ProjectDetails";
import ProjectSlider from "@/components/work/ProjectSlider";

const projects = content.projects.map((p, i) => ({
  num: String(i + 1).padStart(2, "0"),
  category: p.tech?.[0]?.toLowerCase() ?? "project",
  title: p.title,
  description: p.description,
  stack: (p.tech ?? []).map((t) => ({ name: t })),
  image: (p as any).image ?? null,
  live: p.link ?? null,
  github: (p as any).github ?? null,
}));

const Work: React.FC = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row xl:gap-[15px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <ProjectDetails project={project} />
          </div>
          <div className="w-full xl:w-[50%]">
            <ProjectSlider
              projects={projects}
              activeProject={project}
              onSlideChange={handleSlideChange}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
