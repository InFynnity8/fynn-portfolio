"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import content from "@/lib/content";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation'; // New import
import Social from "@/components/Social";

// const DynamicReactTypingEffect = dynamic(() => import("react-typing-effect"), {
//   ssr: false,
// }); // Remove dynamic import for old library

const Hero: React.FC = () => {
  return (
    <div className="text-center">
      <Suspense fallback={<span className="text-xl">{content.title}</span>}>
        <TypeAnimation
          sequence={[
            content.title,
            1000, // wait 1s before repeating
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={90} // Adjust deletion speed
          repeat={Infinity}
          className="text-xl"
        />
      </Suspense>
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
