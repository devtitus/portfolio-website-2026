import React from "react";
import Image from "next/image";
import styles from "@/styles/features/about/aboutHero.module.css";

const AboutHeroSection: React.FC = () => {
  return (
    <section
      className={`${styles.aboutHeroSection} ${styles.commonStyleSection}`}
    >
      <div className={styles.heroContainer}>
        {/* Profile Image - Left Side */}
        <div className={styles.profileImageContainer}>
          <Image
            src="/home/hi.png"
            alt="Profile"
            width={550}
            height={550}
            className={styles.profileImage}
          />
        </div>

        {/* Text Content - Right Side */}
        <div className={styles.heroContent}>
          <div className={styles.heroTextContainer}>
            <h1
              className={styles.heroTitle}
              style={{ fontSize: "clamp(3rem, 5vw, 6rem)", lineHeight: 1.1 }}
            >
              Creative <br />
              <span
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(90deg, #0057E0 0%, #2b7fff 55%, #0057E0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Architect
              </span>
            </h1>
          </div>

          <div
            className={styles.bioCard}
            style={{
              marginTop: "2rem",
              backdropFilter: "none",
              background: "transparent",
              paddingLeft: 0,
              border: "none",
            }}
          >
            <p
              className={styles.bioText}
              style={{ fontSize: "1.25rem", color: "var(--text-secondary)" }}
            >
              I craft digital experiences that feel tangible. Bridging the gap
              between robust engineering and intuitive design, I build
              applications that breathe. Currently obsessed with
              micro-interactions and accessible UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHeroSection };
