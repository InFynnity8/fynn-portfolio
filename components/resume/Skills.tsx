"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaServer,
  FaRegComments,
  FaDatabase,
  FaGithub,
  FaBug,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiElectron,
  SiNestjs,
  SiRust,
  SiTauri,
} from "react-icons/si";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const iconMap: Record<string, JSX.Element> = {
  html: <FaHtml5 />,
  css: <FaCss3 />,
  javascript: <FaJs />,
  react: <FaReact />,
  node: <FaNodeJs />,
  tailwind: <SiTailwindcss />,
  next: <SiNextdotjs />,
  typescript: <SiTypescript />,
  angular: <FaAngular />,
  "react native": <FaReact />,
  restful: <FaServer />,
  websockets: <FaRegComments />,
  mongodb: <SiMongodb />,
  firebase: <SiFirebase />,
  electron: <SiElectron />,
  sql: <FaDatabase />,
  git: <FaGithub />,
  testing: <FaBug />,
  nestjs: <SiNestjs />,
  rust: <SiRust />,
  tauri: <SiTauri />,
};

import content from "@/lib/content";

const getIconKey = (skill: string) => {
  const lowerSkill = skill.toLowerCase();
  if (lowerSkill.includes("node.js")) return "node";
  if (lowerSkill.includes("react / next.js") || lowerSkill.includes("react native")) return "react";
  if (lowerSkill.includes("tailwind css")) return "tailwind";
  if (lowerSkill.includes("restful apis")) return "restful";
  if (lowerSkill.includes("websockets")) return "websockets";
  if (lowerSkill.includes("git & github")) return "git";
  if (lowerSkill.includes("testing & debugging")) return "testing";
  return lowerSkill;
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-8 w-full">
    <h4 className="text-xl font-semibold mb-4 text-center xl:text-left">{title}</h4>
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-wrap justify-center xl:justify-start gap-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex-shrink-0">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] bg-secondary rounded-xl flex justify-center items-center group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    {iconMap[getIconKey(skill)] ?? (
                      <span className="text-base text-center">{skill}</span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[15px] text-center xl:text-left">
        <h3 className="text-3xl font-bold">Skills</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          Key technologies, tools and languages I use daily.
        </p>
      </div>
      <ScrollArea className="h-[340px]">
        <div>
          {content.skillCategories.map((category) => (
            <SkillCategory key={category.name} title={category.name} skills={category.skills} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Skills;
