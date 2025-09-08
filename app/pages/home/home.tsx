import React from "react";
import HeroSection from "@/app/pages/home/components/heroSection";
import FobSection from "@/app/pages/home/components/fobSection";
import ProjectSection from "@/app/pages/home/components/projectSection";
import SkillsSection from "@/app/pages/home/components/skillsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FobSection />
      <ProjectSection />
      <SkillsSection />
    </>
  );
};

export default Home;
