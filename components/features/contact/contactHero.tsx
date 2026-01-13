import React from "react";
import styles from "@/styles/features/contact/contactHero.module.css";

const ContactHero: React.FC = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.heroContent}>
        <p className={styles.breadcrumb}>Case Studies</p>
        <h1 className={styles.heroTitle}>Contact</h1>
      </div>
    </section>
  );
};

export { ContactHero };
