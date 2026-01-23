"use client";
import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { SectionHeader } from "@/components/ui";
import type { TestimonialItem } from "@/lib/services/sanity/getTestimonials";

interface TestimonialSectionProps {
  testimonials: TestimonialItem[];
}

/**
 * TestimonialSection - Client Component (receives data as props from server)
 * 
 * Performance improvements:
 * - Data is fetched server-side and passed as props (no useEffect)
 * - Component is memoized to prevent unnecessary re-renders
 */
const TestimonialSection = memo(function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  // Don't render if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className={cn(
      "min-h-dvh px-[clamp(24px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
      "flex flex-col justify-center items-center overflow-hidden",
      "scroll-mt-20", // Navbar clearance
      "max-sm:min-h-auto max-sm:py-[60px]",
      "max-lg:min-h-auto max-lg:py-[80px]"
    )}>
      <div className={cn(
        "w-full max-w-[1400px] flex flex-col items-center",
        "gap-12 animate-fade-in-up motion-reduce:animate-none"
      )}>
        <SectionHeader
          title="Testimonials"
          subtitle="What people say about working with me"
          align="center"
        />

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
});

export default TestimonialSection;
