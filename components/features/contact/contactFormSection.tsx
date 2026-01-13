"use client";

import React from "react";
import { Input, Textarea, Button } from "@/components/ui";
import styles from "@/styles/features/contact/contactForm.module.css";

const ContactFormSection: React.FC = () => {
  // Simple submit handler - can be expanded later
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className={styles.formSection}>
      {/* Left Side Content */}
      <div className={styles.leftContent}>
        <div className={styles.textGroup}>
          <h2 className={styles.tagline}>Contact us tagline</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Faucibus ultricies dui
            lobortis id nibh. At in molestie et platea in.
          </p>
        </div>

        {/* Visual Placeholder Box from design */}
        <div className={styles.visualPlaceholder}>
          {/* Optional: Add image or 3D element here later */}
        </div>
      </div>

      {/* Right Side Form Card */}
      <div className={styles.formCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Name</label>
            <Input type="text" placeholder="" required />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Email Address</label>
            <Input type="email" placeholder="" required />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Your Message</label>
            <Textarea placeholder="" required />
          </div>

          <Button type="submit" className={styles.submitButton}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export { ContactFormSection };
