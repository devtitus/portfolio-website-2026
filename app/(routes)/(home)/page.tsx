import React from "react";
import {
  FrameHeroSection,
  FobSection,
  ProjectSection,
  SkillsSection,
  TestimonialSection,
  ContactSection
} from "@/components/features";
import { getSkills } from "@/lib/services/sanity/getSkills";
import { getTestimonials } from "@/lib/services/sanity/getTestimonials";
import { getSiteSettings } from "@/lib/services/sanity/getSiteSettings";
import { getFeaturedProjects } from "@/lib/services/sanity/getFeaturedProjects";

/**
 * Home Page - Server Component
 * 
 * Fetches all required data at build/request time before rendering.
 * This eliminates client-side waterfalls and improves LCP.
 */
export default async function HomePage() {
  // Parallel data fetching for performance
  const [skills, testimonials, siteSettings, featuredProjects] = await Promise.all([
    getSkills(),
    getTestimonials(),
    getSiteSettings(),
    getFeaturedProjects(),
  ]);

  return (
    <>
      <FrameHeroSection />
      <div className="page-content">
        <FobSection />
        <ProjectSection projects={featuredProjects} />
        <SkillsSection skills={skills} />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection siteSettings={siteSettings} />
      </div>
    </>
  );
}
