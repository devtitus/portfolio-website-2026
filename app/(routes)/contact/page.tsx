import React from "react";
import styles from "@/styles/features/about/about.module.css";
import { ContactHero } from "@/components/features/contact/contactHero";
import { ContactFormSection } from "@/components/features/contact/contactFormSection";

export const metadata = {
  title: "Contact | Melwyn Titus",
  description: "Get in touch for collaborations and opportunities.",
};

const ContactPage = () => {
  return (
    <main className={styles.aboutPage}>
      <ContactHero />
      <ContactFormSection />
    </main>
  );
};

export default ContactPage;
