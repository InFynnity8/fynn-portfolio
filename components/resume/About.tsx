"use client";

import React from "react";
import content from "@/lib/content";

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-[15px] text-center xl:text-left">
      <h3 className="text-3xl font-bold">About</h3>
      <p className="max-w-[800px] text-white/80 mx-auto xl:mx-0">
        {content.bio}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-[15px] max-w-[920px] mx-auto xl:mx-0">
        <li className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">Name</span>
          <span className="text-lg">{content.name}</span>
        </li>
        <li className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">Title</span>
          <span className="text-lg">{content.title}</span>
        </li>
        <li className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">Email</span>
          <a href={`mailto:${content.contact.email}`} className="text-lg flex items-center gap-2">
           {content.contact.email}
          </a>
        </li>
        <li className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">Phone</span>
          <a href={`tel:${content.contact.phone}`} className="text-lg flex items-center gap-2">
            {content.contact.phone}
          </a>
        </li>
        <li className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">LinkedIn</span>
          <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg flex items-center gap-2">
           Profile
          </a>
        </li>
        <li className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">GitHub</span>
          <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="text-lg flex items-center gap-2">
         Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
