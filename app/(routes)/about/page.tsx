import React from "react";
import { AboutHeroSection } from "@/components/features/about/aboutHeroSection";
import { AboutSelectedPath } from "@/components/features/about/aboutSelectedPath";
import ContactSection from "@/components/features/home/contactSection";

import { getExperience } from "@/lib/services/sanity/getExperience";
import { getEducation } from "@/lib/services/sanity/getEducation";
import { getSkills } from "@/lib/services/sanity/getSkills";

const AboutPage = async () => {
  const experiences = await getExperience();
  const education = await getEducation();
  const skills = await getSkills();

  return (
    <div className="min-h-dvh text-[var(--default-text-color)]">
      <AboutHeroSection />
      <AboutSelectedPath
        experiences={experiences}
        education={education}
        skills={skills}
      />
      <ContactSection
        headingHtml={
          <div className="flex flex-col items-center text-center gap-[clamp(8px,1vw,12px)]">
            <span className="text-[clamp(26px,3.2vw,48px)] font-primary leading-none block">
              Let's build the
            </span>
            <span
              className="text-[clamp(26px,3.2vw,48px)] font-serif leading-normal block italic"
              style={{
                background:
                  "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              extraordinary.
            </span>
          </div>
        }
        ctaText="Start a Project"
        subHeading=" "
        paragraph="I craft digital experiences that feel tangible. Bridging the gap between robust engineering and intuitive design."
      />
    </div>
  );
};

export default AboutPage;
