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

// Re-export all types for convenience
export type {
  SanitySiteSettings,
  SanitySkill,
  SanityTestimonial,
};