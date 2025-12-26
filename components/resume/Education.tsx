"use client";

import React from "react";
import content from "@/lib/content";
import ResumeList from "./ResumeList";

const Education: React.FC = () => {
  const educationItems = content.education.map((item) => ({
    startDate: item.startDate,
    endDate: item.endDate,
    title: item.degree,
    subtitle: item.institution,
  }));

  return (
    <ResumeList
      title="Education"
      description="Formal education and coursework."
      items={educationItems}
    />
  );
};

export default Education;
