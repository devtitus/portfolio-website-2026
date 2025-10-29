import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";
import type { TestimonialItem, SanityTestimonial } from "@/lib/types/sanity";

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  const query = `*[_type == "testimonial"] | order(order asc) {
    _id,
    testimonial,
    name,
    company,
    avatar
  }`;

  try {
    const testimonials: SanityTestimonial[] = await client.fetch(query);

    return testimonials.map((testimonial) => ({
      id: testimonial._id,
      uid: null,
      testimonial: testimonial.testimonial,
      name: testimonial.name,
      company: testimonial.company,
      image: urlForImage(testimonial.avatar)?.url() || "",
    }));
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return [];
  }
};

// Re-export types for convenience
export type { TestimonialItem };
export type { SanityTestimonial };