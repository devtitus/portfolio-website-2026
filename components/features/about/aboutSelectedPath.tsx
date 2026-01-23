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
    <section className="px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)] max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-[clamp(32px,5vw,48px)] flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="w-full md:w-auto">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-serif mb-3 text-[var(--foreground)] leading-[1.1]">
            Selected Path
          </h2>
          <p className="text-[var(--muted-foreground)] text-[clamp(1rem,1.5vw,1.125rem)]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vw,24px)] auto-rows-fr">
        {/* Card 1: Experience */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-[clamp(24px,3vw,32px)] rounded-3xl flex flex-col justify-between h-full min-h-[320px]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-orange-400 text-xs font-bold tracking-wider uppercase py-1 px-2 bg-orange-400/10 rounded-full">
                Current
              </span>
              <div className="w-10 h-10 bg-orange-100/10 rounded-full flex items-center justify-center text-orange-400 text-lg">
                💼
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-serif leading-tight text-[var(--foreground)]">
                {latestExperience?.title || "Frontend Lead"}
              </h3>
              <p className="text-[var(--muted-foreground)] font-medium text-[clamp(0.875rem,1.5vw,1rem)]">
                {latestExperience?.company || "Tech Startup Inc."}
              </p>
            </div>

            <div className="text-[var(--muted-foreground)] text-sm leading-relaxed line-clamp-4">
              {latestExperience?.description ||
                "Spearheading the migration to Next.js 14. Redesigned the core design system used by 20+ developers. Improved LCP by 45%."}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["React", "Design Systems"].map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-xs text-[var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Education */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-[clamp(24px,3vw,32px)] rounded-3xl flex flex-col justify-between h-full min-h-[320px]">
          <div>
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-2xl">🎓</div>
            </div>

            <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-serif mb-2 text-[var(--foreground)]">
              {latestEducation?.university || "University of Tech"}
            </h3>
            <p className="text-[var(--muted-foreground)] text-sm font-medium tracking-wide uppercase">
              {latestEducation?.degree || "B.S. Computer Science"}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
              {latestEducation?.details?.split("\n").map((line, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-orange-400 mt-1">•</span>
                  <span className="flex-1">{line}</span>
                </li>
              )) || (
                <>
                  <li className="flex items-start">
                    <span className="mr-3 text-orange-400 mt-1">•</span> Magna Cum Laude
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-orange-400 mt-1">•</span> HCI Research Assistant
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="flex justify-between items-end border-t border-[rgba(255,255,255,0.1)] pt-6 mt-6">
            <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--muted-foreground)] opacity-50 leading-none">
              {latestEducation?.endDate
                ? new Date(latestEducation.endDate).getFullYear()
                : "2022"}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted-foreground)] opacity-70 mb-1.5">
              Graduated
            </span>
          </div>
        </div>

        {/* Card 3: Toolkit - Spans full width on Tablet (md) to avoid orphan cell */}
        <div className="bg-gradient-to-br from-[#0057E0] via-[#2b7fff] to-[#0057E0] p-[clamp(24px,3vw,32px)] rounded-3xl flex flex-col h-full min-h-[320px] text-white overflow-hidden relative md:col-span-2 lg:col-span-1">
          {/* Decorative circles */}
          <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-serif mb-8 relative z-10 text-white">
            The Toolkit
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 relative z-10 content-start flex-1">
            {featuredSkills.length > 0 ? (
              featuredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col items-center justify-center aspect-[4/3] hover:bg-white/30 transition-all cursor-default group"
                >
                  {skill.iconUrl && (
                    <div className="w-8 h-8 mb-2 relative group-hover:scale-110 transition-transform">
                      <Image
                        src={skill.iconUrl}
                        alt={skill.label}
                        fill
                        className="object-contain invert"
                      />
                    </div>
                  )}
                  <span className="font-medium text-xs sm:text-sm text-center text-white/90">
                    {skill.label}
                  </span>
                </div>
              ))
            ) : (
              // Fallback visual
              <>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">TS</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">Figma</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">SQL</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">Next</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};