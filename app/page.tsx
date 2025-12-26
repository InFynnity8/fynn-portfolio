"use client";

import React from "react";
import Stats from "@/components/Stats";
import Hero from "@/components/home/Hero";

const HomePage: React.FC = () => {
  return (
    <section className="min-h-full">
      <div className="container mx-auto min-h-full">
        <div className="flex flex-col items-center pt-10 justify-center xl:pt-10 xl:pb-16">
          <Hero />
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default HomePage;
