"use client";
import React from "react";
import {
  HeroSection,
  FrameHeroSection,
  FobSection,
  ProjectSection,
  SkillsSection,
  TestimonialSection,
  ContactSection
} from "@/components/features";

const HomePage = () => {
  return (
    <>
      <FrameHeroSection />
      <div className="page-content">
        <FobSection />
        <ProjectSection />
        <SkillsSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
