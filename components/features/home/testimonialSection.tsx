"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/features/home/test.module.css";
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
    <section
      className={`${styles.testimonialSection} ${styles.commonStyleSection}`}
    >
      <div className={styles.testimonialSectionWrapper}>
        <SectionHeader 
          title="Testimonials" 
          subtitle="What people say about working with me"
          align="center"
        />
        <p className={styles.testimonialSectionDescription}>
          💡 Drag the front card to the left to shuffle through testimonials
        </p>
        <div
          className={`${styles.testimonialSectionStackWrapper} flex flex-col items-center justify-center`}
        >
          <TestimonialStack testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
