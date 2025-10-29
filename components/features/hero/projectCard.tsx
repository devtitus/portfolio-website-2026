import React from "react";
import styles from "@/styles/components/projectCards.module.css";
import { LinkIcon } from "@/app/utils/icons";

const projectCards = () => {
  return (
    <div className={styles.projectCards}>
      <div className={styles.projectCardWrapper}>
        <p className={styles.projectCardInfo}>Project Info</p>
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="project-card-image"
          className={styles.projectCardImage}
        />
        <div className={styles.projectCardHoverInfoWrapper}>
          <span className={styles.projectCardHoverInfo}>Project Info</span>
          <button className={styles.projectLinkButton}>
            <LinkIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default projectCards;
