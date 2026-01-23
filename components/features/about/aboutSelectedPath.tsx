import React from "react";
import Image from "next/image";
import type {
  ExperienceItem,
  EducationItem,
  SkillItem,
} from "@/lib/types/sanity";

interface AboutSelectedPathProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
}

export const AboutSelectedPath: React.FC<AboutSelectedPathProps> = ({
  experiences,
  education,
  skills,
}) => {
  const latestExperience = experiences[0];
  const latestEducation = education[0];
  const featuredSkills = skills.slice(0, 4);

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
            className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--accent)] transition-colors text-[var(--foreground)]"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--accent)] transition-colors text-[var(--foreground)]"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Grid - Mobile: 1col, Tablet: 2col, Desktop: 3col */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(24px,2vw,32px)] auto-rows-fr">
        {/* Card 1: Experience */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-[clamp(16px,3vw,24px)] rounded-3xl flex flex-col justify-between h-full min-h-[320px]">
          <div className="flex flex-col gap-[clamp(12px,2vw,18px)]">
            <div className="flex justify-between items-start">
              <span className="text-orange-400 text-[clamp(10px,1vw,12px)] font-medium tracking-wider uppercase py-1 px-2 bg-orange-400/10 rounded-full">
                Current
              </span>
              <div className="w-10 h-10 bg-orange-100/10 rounded-full flex items-center justify-center text-orange-400 text-lg">
                💼
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[clamp(20px,2vw,24px)] font-primary leading-tight text-[var(--foreground)]">
                {latestExperience?.title || "Frontend Lead"}
              </h3>
              <p className="text-[var(--muted-foreground)] font-normal italic text-[clamp(14px,1vw,16px)]">
                {latestExperience?.company || "Tech Startup Inc."}
              </p>
            </div>

            <div className="text-[var(--muted-foreground)] text-[clamp(14px,1vw,16px)] leading-relaxed line-clamp-4">
              {latestExperience?.description ||
                "Spearheading the migration to Next.js 14. Redesigned the core design system used by 20+ developers. Improved LCP by 45%."}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["React", "Design Systems"].map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-[clamp(14px,.5vw,16px)] text-[var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Education */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-[clamp(16px,3vw,24px)] rounded-3xl flex flex-col justify-between h-full min-h-[280px]">
          <div>
            <div className="mb-[clamp(18px,3vw,24px)]">
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-2xl">🎓</div>
            </div>

            <h3 className="text-[clamp(20px,2vw,24px)] font-primary mb-2 text-[var(--foreground)]">
              {latestEducation?.university || "University of Tech"}
            </h3>
            <p className="text-[var(--muted-foreground)] text-[clamp(12px,1vw,14px)] font-secondary italic font-medium tracking-wide uppercase">
              {latestEducation?.degree || "B.S. Computer Science"}
            </p>

            <ul className="mt-6 space-y-3 text-[clamp(14px,1vw,16px)] text-[var(--muted-foreground)]">
              {latestEducation?.details?.split("\n").map((line, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-3 text-orange-400 mt-1">•</span>
                  <span className="flex-1">{line}</span>
                </li>
              )) || (
                  <>
                    <li className="flex items-center">
                      <span className="mr-3 text-orange-400 mt-1 font-secondary">•</span> Magna Cum Laude
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-orange-400 mt-1 font-secondary">•</span> HCI Research Assistant
                    </li>
                  </>
                )}
            </ul>
          </div>

          <div className="flex justify-between items-end border-t border-[rgba(255,255,255,0.1)] pt-6 mt-6">
            <span className="text-[clamp(24px,4vw,36px)] font-light text-[var(--muted-foreground)] opacity-50 leading-none">
              {latestEducation?.endDate
                ? new Date(latestEducation.endDate).getFullYear()
                : "2022"}
            </span>
            <span className="text-[clamp(10px,.75vw,12px)] tracking-[0.2em] uppercase text-[var(--muted-foreground)] opacity-70 mb-1.5">
              Graduated
            </span>
          </div>
        </div>

        {/* Card 3: Toolkit - Spans full width on Tablet (md) to avoid orphan cell */}
        <div className="bg-gradient-to-br from-[rgba(0,87,224,0.15)] via-[#0057E0] to-[rgba(0,87,224,0.15)] p-[clamp(16px,3vw,24px)] rounded-3xl flex flex-col h-full min-h-[320px] text-white overflow-hidden relative md:col-span-2 lg:col-span-1">
          {/* Decorative circles */}
          <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className="text-[clamp(20px,2vw,24px)] font-primary mb-5 relative z-10 text-white">
            The Toolkit
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-[clamp(10px,1vw,16px)] relative z-10 content-start flex-1">
            {featuredSkills.length > 0 ? (
              featuredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col items-center justify-center aspect-[4/3] hover:bg-white/30 transition-all cursor-default group"
                >
                  {skill.iconUrl && (
                    <div className="w-[clamp(32px,12vw,36px)] h-[clamp(32px,12vw,36px)] mb-2 relative group-hover:scale-110 transition-transform">
                      <Image
                        src={skill.iconUrl}
                        alt={skill.label}
                        fill
                        className="object-contain invert"
                      />
                    </div>
                  )}
                  <span className="font-medium text-[clamp(14px,1vw,16px)] text-center text-white/90">
                    {skill.label}
                  </span>
                </div>
              ))
            ) : (
              // Fallback visual
              <>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-[clamp(14px,1vw,16px)] text-center text-white/90">TS</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-[clamp(14px,1vw,16px)] text-center text-white/90">Figma</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-[clamp(14px,1vw,16px)] text-center text-white/90">SQL</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-[clamp(14px,1vw,16px)] text-center text-white/90">Next</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};