import React from "react";
import styles from "@/app/styles/home/components/fob.module.css";

const FobSection = () => {
  return (
    <section className={`${styles.fobSection} ${styles.commonStyleSection}`}>
      <div className={styles.fobSectionWrapper}>
        <h2 className={styles.fobSectionTitle}>Focusing on the Best</h2>
        <div className={styles.fobSectionContent}>
          <div className={styles.fobFirstContentCard}>
            <div className={styles.fobFirstContentCardImage}></div>
            <div className={styles.textWrapper}>
              <h3 className={styles.fobFirstContentCardTitle}>Tech Stack</h3>
              <p className={styles.fobFirstContentCardDescription}>
                I have worked with multiple technologies and frameworks to build
                scalable and efficient applications.
              </p>
            </div>
          </div>
          <div className={styles.fobSecondContentCardWrapper}>
            <div className={styles.fobSecondContentCard}></div>
            <div className={styles.fobThirdContentCard}></div>
          </div>
          <div className={styles.fobFirstContentCard}>
            <div className={styles.fobFirstContentCardImage}></div>
            <div className={styles.textWrapper}>
              <h3 className={styles.fobFirstContentCardTitle}>Tech Stack</h3>
              <p className={styles.fobFirstContentCardDescription}>
                I have worked with multiple technologies and frameworks to build
                scalable and efficient applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FobSection;
