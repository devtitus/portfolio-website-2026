import React from "react";
import styles from "@/styles/features/about/journeyTimeline.module.css";
import { JourneyCard } from "./journeyCard";

interface DetailItem {
  label: string;
  value: string;
}

interface CardData {
  title: string;
  details: DetailItem[];
}

interface JourneyTimelineItemProps {
  number: number;
  title: string;
  cards: CardData[];
}

const JourneyTimelineItem: React.FC<JourneyTimelineItemProps> = ({
  number,
  title,
  cards,
}) => {
  return (
    <div className={styles.timelineItem}>
      {/* Timeline Circle with Number */}
      <div className={styles.timelineCircle}>
        <span className={styles.timelineNumber}>{number}</span>
      </div>

      {/* Timeline Content */}
      <div className={styles.timelineContent}>
        {/* Title Section */}
        <div className={styles.timelineTitleSection}>
          <div className={styles.timelineIcon}>
            <div className={styles.iconBar}></div>
          </div>
          <h3 className={styles.timelineTitle}>{title}</h3>
        </div>

        {/* Separator Line */}
        <div className={styles.timelineSeparator}></div>

        {/* Cards Grid */}
        <div className={styles.timelineCards}>
          {cards.map((card, index) => (
            <JourneyCard
              key={index}
              title={card.title}
              details={card.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { JourneyTimelineItem };
