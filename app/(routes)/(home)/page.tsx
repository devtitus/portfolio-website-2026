"use client";
import React from "react";
import {
  HeroSection,
  FobSection,
  ProjectSection,
  SkillsSection,
  TestimonialSection,
  ContactSection
} from "@/components/features";

const HomePage = () => {
  return (
    <div className="page-content">
      <HeroSection />
      <FobSection />
      <ProjectSection />
      <SkillsSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
