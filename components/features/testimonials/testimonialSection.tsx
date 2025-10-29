"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/features/home/test.module.css";
import { TestimonialStack } from "@/components/ui/testimonial-cards";
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
        <div className={styles.testimonialSectionTitleWrapper}>
          <h2 className={styles.testimonialSectionTitle}>Testimonials</h2>
          <p className={styles.testimonialSectionDescription}>
            💡 Drag the front card to the left to shuffle through testimonials
          </p>
        </div>
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
