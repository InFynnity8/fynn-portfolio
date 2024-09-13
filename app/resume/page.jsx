"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, arcu vel ornare pulvinar, velit justo ullamcorper neque, vel scelerisque est lectus eu massa. Donec vel dui vel neque malesuada posuere.",
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
      fieldName: "Skype",
      fieldValue: "fynn.in",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, arcu vel ornare pulvinar, velit justo ullamcorper neque, vel scelerisque est lectus eu massa. Donec vel dui vel neque malesuada posuere.",
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
      company: "Sofware Development Firm",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, arcu vel ornare pulvinar, velit justo ullamcorper neque, vel scelerisque est lectus eu massa. Donec vel dui vel neque malesuada posuere.",
  items: [
    {
      institution: "Kwame Nkrumah University of Science and Technology",
      degree: "Bsc. Comuter Science",
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
      institution: "Mpraeso Senior High School",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, arcu vel ornare pulvinar, velit justo ullamcorper neque, vel scelerisque est lectus eu massa. Donec vel dui vel neque malesuada posuere.",
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
  return <div>resume</div>;
};

export default Resume;
