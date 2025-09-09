import React from "react";
import styles from "@/app/styles/components/testimonialCard.module.css";

interface testimonialProps {
  testimonial: string;
  name: string;
  company: string;
  image: string;
}

const TestimonialCards = ({
  testimonial,
  name,
  company,
  image,
}: testimonialProps) => {
  return (
    <div className={styles.testimonialCards}>
      <p className={styles.testimonialText}>{testimonial}</p>
      <div className={styles.testimonialInfoWrapper}>
        <img
          src={image}
          alt="Person Image"
          className={styles.testimonialImage}
        />
        <div className={styles.testimonialInfo}>
          <p className={styles.testimonialName}>{name}</p>
          <p className={styles.testimonialBrandName}>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
