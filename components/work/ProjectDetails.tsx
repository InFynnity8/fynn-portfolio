"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProject {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  live: string | null;
  github: string | null;
}

interface IProjectDetailsProps {
  project: IProject;
}

const ProjectDetails: React.FC<IProjectDetailsProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-[20px] h-[50%]">
      <div className="text-7xl font-extrabold leading-none text-transparent text-outline">
        {project.num}
      </div>
      <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.category} project
      </h2>
      <p className="text-white/60">{project.description}</p>
      <ul className="flex gap-4">
        {project.stack.map((item, index) => (
          <li key={index} className="text-[16px] text-accent">
            {item.name}
            {index !== project.stack.length - 1 && ","}
          </li>
        ))}
      </ul>
      <div className="border border-white/20"></div>
      <div className="flex items-center gap-4">
        {project.live ? (
          <a target="_blank" rel="noopener noreferrer" href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-secondary flex justify-center items-center">
                  <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        ) : null}

        {project.github ? (
          <a target="_blank" rel="noopener noreferrer" href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-secondary flex justify-center items-center">
                  <BsGithub className="text-white text-2xl group-hover:text-accent" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDetails;
