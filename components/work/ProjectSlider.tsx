"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

interface IProject {
  num: string;
  title: string;
  image: string | null;
}

interface IProjectSliderProps {
  projects: IProject[];
  activeProject: IProject;
  onSlideChange: (swiper: { activeIndex: number }) => void;
}

const ProjectSlider: React.FC<IProjectSliderProps> = ({
  projects,
  activeProject,
  onSlideChange,
}) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      className="xl:h-[420px] mb-12"
      onSlideChange={onSlideChange}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="w-full">
          <div className="flex h-[360px] relative group justify-center items-center bg-secondary">
            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
            <div className="relative w-full h-full ">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  No image
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
      <WorkSliderBtns projectNum={activeProject.num} />
    </Swiper>
  );
};

export default ProjectSlider;