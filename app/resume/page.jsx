"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Aspiring software developer with a focus on innovative solutions in AI, healthcare, and business. Skilled in modern web technologies and passionate about advancing technology-driven solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Fynn-Sackey Emmanuel",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+233) 599 515 047",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Github",
      fieldValue: "InFynnity8",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ghanaian",
    },
    {
      fieldName: "Email",
      fieldValue: "sackeyemmanuelfynn@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Akan",
    },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "Intermediate software developer with hands-on experience with innovative projects in healthcare, business, and agriculture.",
  items: [
    {
      company: "ConnectLoud Africa",
      position: "Frontend Developer intern",
      duration: "2024 - Present",
    },
    {
      company: "SoundWave Inc.",
      position: "Frontend Mobile App Developer ",
      duration: "Fall 2024",
    },
    {
      company: "InternHub",
      position: "Frontend Developer intern",
      duration: "2023 - 2024",
    },
    {
      company: "Delivery Services",
      position: "Freelance Full Stack Developer",
      duration: "Summer 2023",
    },
    {
      company: "Sofware Dev Firm",
      position: "Junior Developer",
      duration: "2021-2022",
    },
    {
      company: "Digital Agency",
      position: "Web Developer",
      duration: "Summer 2022",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My education",
  description:
    "Background in applied technology with practical skills in AI-driven solutions, software development, and business innovation.",
  items: [
    {
      institution: "KNUST",
      degree: "Bsc. Computer Science",
      duration: "2023 - Present",
    },
    {
      institution: "Udemy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Javascript Programming",
      duration: "Summer 2022",
    },

    {
      institution: "Mpraeso SHS",
      degree: "General Science",
      duration: "2019-2022",
    },
    {
      institution: "w3schools",
      degree: "Web Development",
      duration: "2019",
    },
    {
      institution: "Online Course",
      degree: "Programming",
      duration: "2018-2019",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Proficient in HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, TypeScript, React Native, Electron.js,and Node.js, with a focus on building responsive and dynamic web applications.",
  skillsList: [
    {
      skillName: "html 5",
      icon: <FaHtml5 />,
    },
    {
      skillName: "css 3",
      icon: <FaCss3 />,
    },
    {
      skillName: "javascript",
      icon: <FaJs />,
    },
    {
      skillName: "react.js",
      icon: <FaReact />,
    },
    {
      skillName: "tailwind css",
      icon: <SiTailwindcss />,
    },
    {
      skillName: "node.js",
      icon: <FaNodeJs />,
    },
    {
      skillName: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      skillName: "typescript",
      icon: <SiTypescript />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[340px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[154px] text-[14px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-[17px] max-w-[260px] min-h-[60px] text-center lg:text-left leading-6">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[340px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[154px] text-[14px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-[17px] max-w-[260px] min-h-[60px] text-center lg:text-left leading-6">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>{" "}
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[15px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[20px] gap-4">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.skillName}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-[15px] max-w-[620px] mx-auto xl:mx-0]">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
