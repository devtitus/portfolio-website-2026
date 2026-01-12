import React from "react";
import styles from "@/styles/features/about/journeyTimeline.module.css";
import { JourneyTimelineItem } from "./journeyTimelineItem";

interface JourneyTimelineSectionProps {
  // Props can be added later for dynamic content
}

const JourneyTimelineSection: React.FC<JourneyTimelineSectionProps> = () => {
  const timelineItems = [
    {
      number: 1,
      title: "Educational Journey",
      cards: [
        {
          title: "Post-Graduation",
          details: [
            { label: "Institution", value: "University of Technology" },
            { label: "Degree", value: "Bachelor of Computer Science" },
            { label: "Duration", value: "2018 - 2022" },
            { label: "Specialization", value: "Computer Science" },
          ],
        },
        {
          title: "Graduation",
          details: [
            { label: "Institution", value: "University of Technology" },
            { label: "Degree", value: "Bachelor of Computer Science" },
            { label: "Duration", value: "2018 - 2022" },
            { label: "Specialization", value: "Computer Science" },
          ],
        },
        {
          title: "Schooling",
          details: [
            { label: "Institution", value: "University of Technology" },
            { label: "Degree", value: "Bachelor of Computer Science" },
            { label: "Duration", value: "2018 - 2022" },
            { label: "Specialization", value: "Computer Science" },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Professional Experience",
      cards: [
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Skills Development",
      cards: [
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Life Events & Inspirations",
      cards: [
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
        {
          title: "Frontend Developer",
          details: [
            { label: "Company", value: "Tech Startup Inc." },
            { label: "Role", value: "Frontend Developer" },
            { label: "Duration", value: "Jan 2023 - Present" },
            {
              label: "Responsibilities",
              value:
                "Developed responsive web applications using React & TypeScript",
            },
          ],
        },
      ],
    },
  ];

  return (
    <section
      className={`${styles.journeyTimelineSection} ${styles.commonStyleSection}`}
    >
      <div className={styles.timelineContainer}>
        <h2 className={styles.journeyHeading}>My Journey</h2>

        <div className={styles.timelineItems}>
          {timelineItems.map((item, index) => (
            <JourneyTimelineItem
              key={index}
              number={item.number}
              title={item.title}
              cards={item.cards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { JourneyTimelineSection };
