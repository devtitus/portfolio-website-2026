import React from "react";
import styles from "@/styles/features/about/journeyCard.module.css";

interface DetailItem {
  label: string;
  value: string;
}

interface JourneyCardProps {
  title: string;
  details: DetailItem[];
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, details }) => {
  return (
    <div className={styles.journeyCard}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <div className={styles.cardDetails}>
        {details.map((detail, index) => (
          <div key={index} className={styles.detailItem}>
            <span className={styles.detailLabel}>
              {detail.label}:
            </span>
            <span className={styles.detailValue}>
              {detail.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { JourneyCard };
