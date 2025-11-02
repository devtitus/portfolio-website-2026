import React, { useState, useEffect } from "react";
import styles from "@/styles/features/home/contact.module.css";
import {
  getSiteSettings,
  type SiteSettings,
} from "@/lib/services/sanity/getSiteSettings";

const ContactSection = () => {
  const [ctaSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getSiteSettings();
      setSiteSettings(settings);
    };

    fetchSettings();
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
        <div className={styles.contentWrapper}>
          <div className={styles.titleTextWrapper}>
            <img src="" alt="" className={styles.contactLogo} />
            <span className={styles.contactHeading}>
              From Concept To <span className={styles.contactSpan}>CREATION</span>
            </span>
            <span className={styles.contactHeading}>
              Let's Make It <span className={styles.contactSpan}>HAPPEN!</span>
            </span>
          </div>
          <button className={styles.contactButton}>
            Get In Touch
          </button>
          <p className={styles.contentSubHeading}>
            Ready to bring your ideas to life?
          </p>
          <p className={styles.contentParagraph}>
            I'm always excited to collaborate on innovative projects and help turn your vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;