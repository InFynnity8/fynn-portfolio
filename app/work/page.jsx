"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Created a modern, responsive fashion website using Next.js, featuring dynamic product listings, user-friendly navigation, and fast loading times.",
    stack: [ 
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Tailwind.css" }],
    image: "/assets/projects/otm.png",
    live: "https://sunny-pixie-46d633.netlify.app/",
    github: "https://github.com/InFynnity8/otmwebsite",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:
      "Developed a comprehensive web application to streamline patient records, appointment scheduling, and billing. Integrated intuitive UI features to enhance user experience, ensuring efficient healthcare data management and accessibility.",
    stack: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind.css" }],
    image: "/assets/projects/health.png",
    live: "https://rad-kelpie-378f0b.netlify.app/",
    github: "https://github.com/InFynnity8/Healtcare-Mangement-System",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "The site features smooth animations and dynamic content, creating an interactive experience for users to explore projects and skills.",
    stack: [
      { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }
    ],
    image: "/assets/projects/interhub.png",
    live: "https://fabulous-conkies-4ea278.netlify.app/",
    github: "https://github.com/InFynnity8/internHub",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current swiper index
    const currentIndex = swiper.activeIndex;
    // update project state
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
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-7xl font-extrabold leading-none text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-[16px] text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[420px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="flex h-[360px] relative group justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns projectNum={project.num}/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
