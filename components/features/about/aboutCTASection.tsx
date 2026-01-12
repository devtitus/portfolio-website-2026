"use client";

import React from "react";
import styles from "@/styles/features/about/aboutCTA.module.css";

interface AboutCTASectionProps {
  // Props can be added later for dynamic content
}

const AboutCTASection: React.FC<AboutCTASectionProps> = () => {
  const handleGetInTouch = () => {
    // Navigate to contact page or open contact modal
    window.location.href = '/contact';
  };

  return (
    <section className={`${styles.aboutCTASection} ${styles.commonStyleSection}`}>
      <div className={styles.ctaContainer}>
        {/* CTA Content */}
        <div className={styles.ctaContent}>
          {/* CTA Heading */}
          <h2 className={styles.ctaHeading}>
            FROM CONCEPT TO CREATION
            <br />
            LET'S MAKE IT HAPPEN!
          </h2>

          {/* CTA Button */}
          <button
            className={styles.ctaButton}
            onClick={handleGetInTouch}
          >
            Get in touch
          </button>

          {/* CTA Description */}
          <div className={styles.ctaDescription}>
            <p className={styles.ctaText}>
              I'm available for full-time roles & freelance projects.
            </p>
            <p className={styles.ctaSubtext}>
              I thrive on crafting dynamic web applications, and delivering seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutCTASection };
