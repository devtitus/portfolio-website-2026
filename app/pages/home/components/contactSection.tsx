import React, { useState, useEffect } from "react";
import styles from "@/app/styles/home/components/contact.module.css";
import {
  getSiteSettings,
  type SiteSettings,
} from "@/app/queries/sanity/getSiteSettings";

const ContactSection = () => {
  const [ctaSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      const settings = await getSiteSettings();
      setSiteSettings(settings);
    };

    fetchSiteSettings();
  }, []);

  return (
    <section
      className={`${styles.commonStyleSection} ${styles.contactSection}`}
      style={{
        backgroundImage: ctaSettings?.contactBackgroundImageUrl
          ? `url(${ctaSettings.contactBackgroundImageUrl})`
          : undefined,
      }}
    >
      <div className={styles.contactSectionWrapper}>
        <img
          src="/home/spinImage.png"
          alt="Contact"
          className={styles.contactImage}
        />
        <h2 className={styles.contactHeading}>
          From Concepts To <span className={styles.contactSpan}>CREATION</span>{" "}
          Let&apos;s Make It <span className={styles.contactSpan}>HAPPEN!</span>
        </h2>
        <button className={styles.contactButton}>Get in touch</button>
        <div className={styles.contentWrapper}>
          <span className={styles.contentSubHeading}>
            I&apos;m available for full-time roles & freelance projects.
          </span>
          <p className={styles.contentParagraph}>
            I thrive on crafting dynamic web applications, anddelivering
            seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
