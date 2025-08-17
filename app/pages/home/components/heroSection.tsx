import React from "react";
import styles from "@/app/styles/home/components/hero.module.css";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} ${styles.commonStyleSection}`}>
      <div className={styles.heroSectionWrapper}>
        {/* Hero Heading */}
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>
            I help founders turn ideas
          </span>
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
        {/* Hero Description */}
        <div className={styles.heroDescriptionWrapper}>
          <span className={styles.heroDescriptionText}>
            Hello, I'm Melwyn Titus
          </span>
          <div className={styles.heroDescriptionSeparator}>
            <div className={styles.separatorShutter}></div>
            <Image
              src="/home/hi.png"
              alt="Welcome Icon"
              width={32}
              height={32}
              className={`${styles.hiIcon} animate-wave`}
            />
          </div>
          <span className={styles.heroDescriptionText}>
            a Full stack Developer
          </span>
        </div>
        {/* Hero Buttons */}
        <div className={styles.heroButtonsWrapper}>
          <button
            className={`${styles.heroButton} ${styles.commonButtonStyle}`}
          >
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
