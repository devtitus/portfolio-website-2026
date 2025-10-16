"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/home/components/test.module.css";
import { TestimonialStack } from "@/components/ui/testimonial-cards";

// TODO: Replace with Sanity query
export interface TestimonialItem {
  id: string;
  uid: string | null;
  testimonial: string;
  name: string;
  company: string;
  image: string;
}

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    // TODO: Implement Sanity query to fetch testimonials
    // const fetchTestimonials = async () => {
    //   const testimonialsData = await getSanityTestimonials();
    //   setTestimonials(testimonialsData);
    // };
    // fetchTestimonials();
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
