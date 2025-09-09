"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/styles/home/components/test.module.css";
import TestimonialCards from "@/app/components/home/testimonialCard";
import {
  getTestimonials,
  TestimonialItem,
} from "@/app/queries/getTestimonials";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialsData = await getTestimonials();
      setTestimonials(testimonialsData);
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (marqueeRef.current && testimonials.length > 0) {
      // Calculate dynamic animation duration based on number of testimonials
      const baseDuration = 60; // Base duration for 5 testimonials
      const dynamicDuration = (baseDuration * testimonials.length) / 5;

      // Apply dynamic animation duration
      marqueeRef.current.style.setProperty(
        "--marquee-duration",
        `${dynamicDuration}s`
      );
    }
  }, [testimonials.length]);

  // Don't render if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className={`${styles.testimonialSection} ${styles.commonStyleSection}`}
    >
      <div className={styles.testimonialSectionWrapper}>
        <h2 className={styles.testimonialSectionTitle}>Testimonials</h2>
        <div className={styles.testimonialMarqueeContainer}>
          <div
            ref={marqueeRef}
            className={styles.testimonialMarquee}
            style={
              {
                "--testimonial-count": testimonials.length,
              } as React.CSSProperties
            }
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCards
                key={testimonial.id}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCards
                key={`duplicate-${testimonial.id}`}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
