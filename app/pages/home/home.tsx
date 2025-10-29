import React from "react";
import HeroSection from "@/app/(home)/components/heroSection";
import FobSection from "@/app/(home)/components/fobSection";
import ProjectSection from "@/app/(home)/components/projectSection";
import SkillsSection from "@/app/(home)/components/skillsSection";
import TestimonialSection from "@/app/(home)/components/testimonialSection";
import ContactSection from "@/app/(home)/components/contactSection";

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
