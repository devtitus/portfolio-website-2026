"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/components/testimonial-cards.module.css"

export interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: string;
  author: string;
  company: string;
  image: string;
}

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  author,
  company,
  image,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0",
      }}
      animate={{
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
            ? "0deg"
            : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
        scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9,
        opacity: position === "front" ? 1 : position === "middle" ? 0.8 : 0.6,
      }}
      drag={isFront}
      dragElastic={0.2}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e) => {
        // Support both MouseEvent and TouchEvent
        if ("clientX" in e) {
          dragRef.current = e.clientX;
        } else if ("touches" in e && e.touches.length > 0) {
          dragRef.current = e.touches[0].clientX;
        }
      }}
      onDragEnd={(e) => {
        let clientX = 0;
        if ("clientX" in e) {
          clientX = e.clientX;
        } else if ("changedTouches" in e && e.changedTouches.length > 0) {
          clientX = e.changedTouches[0].clientX;
        }
        if (dragRef.current - clientX > 100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      }}
      className={` ${styles.testimonial_cards} absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={image}
        alt={`Avatar of ${author}`}
        width={128}
        height={128}
        className={`${styles.avatar} pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-white/20 bg-slate-200 object-cover`}
      />
      <span className={`${styles.test_message} text-center text-lg italic text-white/90`}>
        &ldquo;{testimonial}&rdquo;
      </span>
      <div className={`${styles.text_wrapper} text-center`}>
        <span className={`${styles.author} block text-sm font-medium text-white`}>{author}</span>
        <span className={`${styles.position} block text-xs text-white/70`}>{company}</span>
      </div>
    </motion.div>
  );
}

export interface TestimonialStackProps {
  testimonials: Array<{
    id: string;
    testimonial: string;
    name: string;
    company: string;
    image: string;
  }>;
}

export function TestimonialStack({ testimonials }: TestimonialStackProps) {
  const [order, setOrder] = React.useState([0, 1, 2]);
  const [isShuffling, setIsShuffling] = React.useState(false);

  const handleShuffle = React.useCallback(() => {
    if (isShuffling) return;

    setIsShuffling(true);
    setOrder((prevOrder) => [prevOrder[1], prevOrder[2], prevOrder[0]]);

    // Reset shuffling state after animation completes
    setTimeout(() => setIsShuffling(false), 350);
  }, [isShuffling]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Ensure we have at least 3 testimonials by cycling through them
  const extendedTestimonials = [...testimonials];
  while (extendedTestimonials.length < 3) {
    extendedTestimonials.push(...testimonials);
  }

  return (
    <div className="relative h-[450px] w-[350px]">
      {order.map((testimonialIndex, stackIndex) => {
        const testimonial =
          extendedTestimonials[testimonialIndex % testimonials.length];
        const position =
          stackIndex === 0 ? "front" : stackIndex === 1 ? "middle" : "back";

        return (
          <TestimonialCard
            key={`${testimonial.id}-${testimonialIndex}`}
            handleShuffle={handleShuffle}
            testimonial={testimonial.testimonial}
            position={position}
            id={testimonial.id}
            author={testimonial.name}
            company={testimonial.company}
            image={testimonial.image}
          />
        );
      })}
    </div>
  );
}
