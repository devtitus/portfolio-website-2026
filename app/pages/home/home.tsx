import React from "react";
import HeroSection from "@/app/pages/home/components/heroSection";
import FobSection from "@/app/pages/home/components/fobSection";
import ProjectSection from "@/app/pages/home/components/projectSection";
import SkillsSection from "@/app/pages/home/components/skillsSection";
import TestimonialSection from "@/app/pages/home/components/testimonialSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FobSection />
      <ProjectSection />
      <SkillsSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
