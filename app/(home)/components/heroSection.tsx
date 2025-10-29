import React, { useState } from "react";
import styles from "@/app/styles/home/components/hero.module.css";
import { AuroraText } from "@/components/magicui/aurora-text";
import { CopyIcon } from "@/app/utils/icons";
import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars";

const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "m.works.gd@gmail.com";

  // Email Copy Handle Function
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <StarsBackground
      className={`${styles.starBackground} flex aspect-16/9 items-center justify-center`}
      transition={{ stiffness: 15, damping: 50 }}
      speed={120}
      factor={0.02}
    >
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
              Hello, I&apos;m Melwyn Titus
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
            <div className={styles.copyButtonWrapper}>
              <button
                className={`${styles.copyButton}`}
                onClick={handleCopyEmail}
                title={isCopied ? "Copied!" : "Copy email to clipboard"}
              >
                <CopyIcon className={styles.copyIcon} />
              </button>
              <span className={styles.copyButtonText}>
                {isCopied ? "Copied!" : email}
              </span>
            </div>
          </div>
        </div>
        {/* Background Aurora Orb Effect */}
        <div className={styles.auroraBackground}>
          <div className={styles.auroraContainer}>
            <div className={styles.auroraGlow}></div>
            <div className={styles.auroraBase}></div>
            <div className={styles.auroraOrb}></div>
          </div>
        </div>
      </section>
    </StarsBackground>
  );
};

export default HeroSection;
