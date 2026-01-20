"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { TestimonialStack } from "@/components/ui/testimonial-cards";
import { SectionHeader } from "@/components/ui";
import {
  getTestimonials,
  TestimonialItem,
} from "@/lib/services/sanity/getTestimonials";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialsData = await getTestimonials();
      setTestimonials(testimonialsData);
    };
    fetchTestimonials();
  }, []);

  // Don't render if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className={cn(
      "min-h-dvh px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
      "flex flex-col justify-center items-center overflow-hidden",
      "scroll-mt-20", // Navbar clearance
      "max-sm:min-h-auto max-sm:py-[60px]",
      "max-lg:min-h-auto max-lg:py-[80px]"
    )}>
      <div className={cn(
        "w-full max-w-[1400px] flex flex-row justify-between items-start",
        "gap-fluid-lg animate-fade-in-up motion-reduce:animate-none",
        "max-lg:flex-col max-lg:items-center"
      )}>
        <SectionHeader 
          title="Testimonials" 
          subtitle="What people say about working with me"
          align="center"
        />
        
        <div className={cn(
          "flex flex-col gap-fluid-md items-start w-1/2 pl-fluid-lg",
          "max-lg:w-full max-lg:pl-0 max-lg:items-center",
          "max-sm:pl-0"
        )}>
          <TestimonialStack testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

