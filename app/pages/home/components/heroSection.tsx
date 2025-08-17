import React from "react";
import styles from "@/app/styles/home/components/hero.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} ${styles.commonStyleSection}`}>
      <h1 className={styles.heroTitle}>
        I help founders turn ideas into seamless Digital Experiences
      </h1>
    </section>
  );
};

export default HeroSection;
