"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import content from "@/lib/content";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import Social from "@/components/Social";

const Hero: React.FC = () => {
  return (
    <div className="text-center">
      <ReactTypingEffect
        text={[content.title]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={8000}
        typingDelay={1000}
        className="text-xl"
      />
      <h1 className="h1 mb-3">
        Hello I'm
        <span className="text-accent"> {content.name.split(" ")[0]}</span>
      </h1>
      <p className="max-w-[800px] mb-5 text-white/80">{content.bio}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="/resume.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
          </a>
          <Link href="/contact">
            <Button
              size="lg"
              className="uppercase flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold"
            >
              <span>Hire me</span>
            </Button>
          </Link>
        </div>
        <div className="mb-8 xl:mb-0">
          <Social
            containerStyles="flex gap-4"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
