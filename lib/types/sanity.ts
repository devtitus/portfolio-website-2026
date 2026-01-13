// Sanity CMS Type Definitions

import type { Image } from "sanity";

// Site Settings Types
export interface SiteSettings {
  id: string;
  contactBackgroundImageUrl: string;
}

interface SanitySiteSettings {
  _id: string;
  contactBackgroundImage: Image;
}

// Skill Types
export interface SkillItem {
  id: string;
  uid: string | null;
  label: string;
  iconUrl: string;
}

interface SanitySkill {
  _id: string;
  label: string;
  icon: Image;
}

// Testimonial Types
export interface TestimonialItem {
  id: string;
  uid: string | null;
  testimonial: string;
  name: string;
  company: string;
  image: string;
}

interface SanityTestimonial {
  _id: string;
  testimonial: string;
  name: string;
  company: string;
  avatar: Image;
}

// Experience Types
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
}

export interface SanityExperience {
  _id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
}

// Education Types
export interface EducationItem {
  id: string;
  degree: string;
  university: string;
  startDate?: string;
  endDate?: string;
  details?: string;
}

export interface SanityEducation {
  _id: string;
  degree: string;
  university: string;
  startDate?: string;
  endDate?: string;
  details?: string;
}

// Project Types
export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  mainImage: string;
  description: string;
  projectLink?: string;
  codeLink?: string;
  tags?: string[];
  technologies?: SkillItem[];
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: Image;
  description: string;
  projectLink?: string;
  codeLink?: string;
  tags?: string[];
  technologies?: SanitySkill[];
}

// Re-export all types for convenience
export type { SanitySiteSettings, SanitySkill, SanityTestimonial };
