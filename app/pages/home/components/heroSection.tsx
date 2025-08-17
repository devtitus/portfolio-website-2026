import React from "react";
import styles from "@/app/styles/home/components/hero.module.css";
import { AuroraText } from "@/components/magicui/aurora-text";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} ${styles.commonStyleSection}`}>
      {/* Hero Heading */}
      <h1 className={styles.heroTitle}>
        <span className={styles.heroTitleLine}>I help founders turn ideas</span>
        <span className={styles.heroTitleLine}>
          into seamless{" "}
          <AuroraText
            colors={["#F6B2E1", "#F3F4F6", "#F6B2E1", "#F6B2E1"]}
            speed={1.5}
            className={styles.auraText}
          >
            Digital Experiences
          </AuroraText>
        </span>
      </h1>
    </section>
  );
};

export default HeroSection;
