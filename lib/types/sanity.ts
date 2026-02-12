// Sanity CMS Type Definitions

import type { Image } from "sanity";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

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
  tagline?: string;
  slug: string;
  mainImage: string;
  description: string;
  projectLink?: string;
  codeLink?: string;
  designLink?: string;
  tags?: string[];
  technologies?: SkillItem[];
  formattedContent?: string; // Markdown content
  serializedContent?: MDXRemoteSerializeResult | null;
  isFeatured?: boolean;
  isPublished?: boolean;
  screenshots?: string[]; // Array of screenshot image URLs
}

export interface SanityProject {
  _id: string;
  title: string;
  tagline?: string;
  slug: { current: string };
  mainImage: Image;
  description: string;
  projectLink?: string;
  codeLink?: string;
  designLink?: string;
  tags?: string[];
  technologies?: SanitySkill[];
  formattedContent?: string;
  serializedContent?: MDXRemoteSerializeResult | null;
  isFeatured?: boolean;
  isPublished?: boolean;
  screenshots?: Image[]; // Array of screenshot images
}

// Re-export all types for convenience
export type { SanitySiteSettings, SanitySkill, SanityTestimonial };
