"use client";

import React, { useState } from "react";
import Image from "next/image";
import type {
  ExperienceItem,
  EducationItem,
} from "@/lib/types/sanity";

interface AboutSelectedPathProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export const AboutSelectedPath: React.FC<AboutSelectedPathProps> = ({
  experiences,
  education,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine the maximum length to know when to stop
  // We stop when we run out of BOTH experience and education items
  const maxLength = Math.max(experiences.length, education.length);

  const handleNext = () => {
    if (currentIndex < maxLength - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentExperience = experiences[currentIndex];
  const currentEducation = education[currentIndex];

  return (
    <section className="px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)] max-w-[1400px] mx-auto 2xl:px-0">
      {/* Header */}
      <div className="mb-[clamp(32px,5vw,48px)] flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="w-full md:w-auto">
          <h2 className="text-[clamp(26px,2vw,36px)] font-primary mb-3 text-[var(--foreground)] leading-[1.1]">
            Selected Path
          </h2>
          <p className="text-[var(--muted-foreground)] text-[clamp(16px,1vw,18px)]">
            A curated timeline of milestones
          </p>
        </div>

        {/* Navigation - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] transition-colors text-[var(--foreground)] ${currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[var(--accent)]"
              }`}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxLength - 1}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] transition-colors text-[var(--foreground)] ${currentIndex >= maxLength - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[var(--accent)]"
              }`}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Grid - Mobile: 1col, Tablet: 2col, Desktop: 2col */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(24px,2vw,32px)] auto-rows-fr">
        {/* Card 1: Experience */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-[clamp(16px,3vw,24px)] rounded-3xl flex flex-col justify-between h-full min-h-[320px]">
          {currentExperience ? (
            <>
              <div className="flex flex-col gap-[clamp(12px,2vw,18px)]">
                <div className="flex justify-between items-start">
                  {currentExperience.isCurrent ? (
                    <span className="text-orange-400 text-[clamp(10px,1vw,12px)] font-medium tracking-wider uppercase py-1 px-2 bg-orange-400/10 rounded-full">
                      Current
                    </span>
                  ) : (
                    <span className="text-[var(--muted-foreground)] text-[clamp(10px,1vw,12px)] font-medium tracking-wider uppercase py-1 px-2 bg-white/5 rounded-full">
                      {currentExperience.endDate
                        ? new Date(currentExperience.endDate).getFullYear()
                        : "Past"}
                    </span>
                  )}
                  <div className="w-10 h-10 bg-orange-100/10 rounded-full flex items-center justify-center text-orange-400 text-lg">
                    💼
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-[clamp(20px,2vw,24px)] font-primary leading-tight text-[var(--foreground)]">
                    {currentExperience.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] font-normal italic text-[clamp(14px,1vw,16px)]">
                    {currentExperience.company}
                  </p>
                </div>

                <div className="text-[var(--muted-foreground)] text-[clamp(14px,1vw,16px)] leading-relaxed line-clamp-4">
                  {currentExperience.description}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {/* Note: Tags are not currently in the schema, using placeholders if needed or removing */}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-[var(--muted-foreground)] opacity-50">
              <p>No further experience data.</p>
            </div>
          )}
        </div>

        {/* Card 2: Education */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-[clamp(16px,3vw,24px)] rounded-3xl flex flex-col justify-between h-full min-h-[280px]">
          {currentEducation ? (
            <>
              <div>
                <div className="mb-[clamp(18px,3vw,24px)]">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-2xl">
                    🎓
                  </div>
                </div>

                <h3 className="text-[clamp(20px,2vw,24px)] font-primary mb-2 text-[var(--foreground)]">
                  {currentEducation.university}
                </h3>
                <p className="text-[var(--muted-foreground)] text-[clamp(12px,1vw,14px)] font-secondary italic font-medium tracking-wide uppercase">
                  {currentEducation.degree}
                </p>

                <ul className="mt-6 space-y-3 text-[clamp(14px,1vw,16px)] text-[var(--muted-foreground)]">
                  {currentEducation.details?.split("\n").map((line, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-3 text-orange-400 mt-1">•</span>
                      <span className="flex-1">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-end border-t border-[rgba(255,255,255,0.1)] pt-6 mt-6">
                <span className="text-[clamp(24px,4vw,36px)] font-light text-[var(--muted-foreground)] opacity-50 leading-none">
                  {currentEducation.endDate
                    ? new Date(currentEducation.endDate).getFullYear()
                    : "Present"}
                </span>
                <span className="text-[clamp(10px,.75vw,12px)] tracking-[0.2em] uppercase text-[var(--muted-foreground)] opacity-70 mb-1.5">
                  Graduated
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-[var(--muted-foreground)] opacity-50">
              <p>No further education data.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};