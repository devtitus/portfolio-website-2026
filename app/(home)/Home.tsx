import React from "react";
import HeroSection from "@/components/features/hero/heroSection";
import FobSection from "@/components/features/hero/fobSection";
import ProjectSection from "@/components/features/projects/projectSection";
import SkillsSection from "@/components/features/skills/skillsSection";
import TestimonialSection from "@/components/features/testimonials/testimonialSection";
import ContactSection from "@/components/features/hero/contactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FobSection />
      <ProjectSection />
      <SkillsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default Home;