import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";
import type { TestimonialItem, SanityTestimonial } from "@/lib/types/sanity";

// Sample testimonial data for testing
const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sample-1",
    uid: null,
    testimonial: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality code exceeded our expectations.",
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "sample-2",
    uid: null,
    testimonial: "Exceptional work! The project was delivered on time and the communication throughout was outstanding. Highly recommend for any web development needs.",
    name: "Michael Chen",
    company: "Digital Solutions Ltd.",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "sample-3",
    uid: null,
    testimonial: "A true professional who brings creativity and technical expertise to every project. The final product was exactly what we envisioned and more.",
    name: "Emily Rodriguez",
    company: "Creative Studios",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "sample-4",
    uid: null,
    testimonial: "Outstanding developer with great problem-solving skills. Transformed our outdated website into a modern, responsive masterpiece.",
    name: "David Thompson",
    company: "Global Ventures",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "sample-5",
    uid: null,
    testimonial: "Incredible attention to UX/UI design. The website not only looks beautiful but also performs flawlessly across all devices.",
    name: "Jessica Martinez",
    company: "Design Co.",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "sample-6",
    uid: null,
    testimonial: "Professional, reliable, and highly skilled. Delivered a complex e-commerce platform that has significantly boosted our online sales.",
    name: "Robert Anderson",
    company: "E-Shop Solutions",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "sample-7",
    uid: null,
    testimonial: "Best developer we've worked with! Great communication, clean code, and always willing to go the extra mile to ensure client satisfaction.",
    name: "Amanda White",
    company: "Startup Hub",
    image: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "sample-8",
    uid: null,
    testimonial: "Transformed our vision into reality with exceptional skill and creativity. The final product exceeded all our expectations.",
    name: "James Wilson",
    company: "Innovation Labs",
    image: "https://i.pravatar.cc/150?img=14",
  },
];

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

    const mappedTestimonials = testimonials.map((testimonial) => ({
      id: testimonial._id,
      uid: null,
      testimonial: testimonial.testimonial,
      name: testimonial.name,
      company: testimonial.company,
      image: urlForImage(testimonial.avatar)?.url() || "",
    }));

    // Return sample data if no testimonials in Sanity
    return mappedTestimonials.length > 0 ? mappedTestimonials : SAMPLE_TESTIMONIALS;
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    // Return sample data on error
    return SAMPLE_TESTIMONIALS;
  }
};

// Re-export types for convenience
export type { TestimonialItem };
export type { SanityTestimonial };
