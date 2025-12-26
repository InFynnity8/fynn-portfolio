"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import Skills from "@/components/resume/Skills";
import About from "@/components/resume/About";

const ResumePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[40px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

                      <div className="min-h-[70vh] w-full">
                      <TabsContent value="experience" className="w-full min-h-[70vh]">
                        <Experience />
                      </TabsContent>
          
                      <TabsContent value="education" className="w-full min-h-[70vh]">
                        <Education />
                      </TabsContent>
          
                      <TabsContent value="skills" className="w-full max-w-[1200px] mx-auto min-h-[70vh]">
                        <Skills />
                      </TabsContent>
          
                      <TabsContent value="about" className="w-full min-h-[70vh] text-center xl:text-left">
                        <About />
                      </TabsContent>
                    </div>        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
