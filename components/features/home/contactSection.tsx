"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/features/home/contact.module.css";
import { PrimaryButton } from "@/components/ui";
import {
  getSiteSettings,
  type SiteSettings,
} from "@/lib/services/sanity/getSiteSettings";

interface ContactSectionProps {
  headingHtml?: React.ReactNode;
  ctaText?: string;
  subHeading?: string;
  paragraph?: string;
}

const ContactSection = ({
  headingHtml,
  ctaText,
  subHeading,
  paragraph,
}: ContactSectionProps = {}) => {
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
            {headingHtml || (
              <>
                <span className={styles.contactHeading}>
                  From Concept To{" "}
                  <span className={styles.contactSpan}>CREATION</span>
                </span>
                <span className={styles.contactHeading}>
                  Let's Make It{" "}
                  <span className={styles.contactSpan}>HAPPEN!</span>
                </span>
              </>
            )}
          </div>
          
          <PrimaryButton 
            variant="solid" 
            size="lg"
            className="mt-6"
          >
            {ctaText || "Get In Touch"}
          </PrimaryButton>
          
          <p className={styles.contentSubHeading}>
            {subHeading || "Ready to bring your ideas to life?"}
          </p>
          <p className={styles.contentParagraph}>
            {paragraph ||
              "I'm always excited to collaborate on innovative projects and help turn your vision into reality."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
