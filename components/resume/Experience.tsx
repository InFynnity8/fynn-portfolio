"use client";

import React from "react";
import content from "@/lib/content";
import ResumeList from "./ResumeList";

const Experience: React.FC = () => {
  const experienceItems = content.experience.map((item) => ({
    startDate: item.startDate,
    endDate: item.endDate,
    title: item.role,
    subtitle: item.company,
  }));

  return (
    <ResumeList
      title="Experience"
      description={content.experience[0]?.summary}
      items={experienceItems}
    />
  );
};

export default Experience;
