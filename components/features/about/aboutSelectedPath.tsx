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
    <section className="py-20 px-4 md:px-12 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-2 text-[var(--foreground)]">
            Selected Path
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            A curated timeline of milestones
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--accent)] transition-colors text-[var(--foreground)]">
            ←
          </button>
          <button className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--accent)] transition-colors text-[var(--foreground)]">
            →
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Experience */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-8 rounded-3xl flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
                Current
              </span>
              <div className="w-8 h-8 bg-orange-100/10 rounded-full flex items-center justify-center text-orange-400">
                💼
              </div>
            </div>

            <h3 className="text-3xl font-serif mb-2 leading-tight text-[var(--foreground)]">
              {latestExperience?.title || "Frontend Lead"}
            </h3>
            <p className="text-[var(--muted-foreground)] font-medium">
              {latestExperience?.company || "Tech Startup Inc."}
            </p>

            <div className="mt-6 text-[var(--muted-foreground)] text-sm leading-relaxed line-clamp-4">
              {latestExperience?.description ||
                "Spearheading the migration to Next.js 14. Redesigned the core design system used by 20+ developers. Improved LCP by 45%."}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Design Systems"].map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-3 py-1 rounded-full text-xs text-[var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Education */}
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] p-8 rounded-3xl flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="mb-6">
              <div className="text-3xl">🎓</div>
            </div>

            <h3 className="text-2xl font-serif mb-2 text-[var(--foreground)]">
              {latestEducation?.university || "University of Tech"}
            </h3>
            <p className="text-[var(--muted-foreground)] text-sm font-medium tracking-wide">
              {latestEducation?.degree || "B.S. Computer Science"}
            </p>

            <ul className="mt-8 space-y-3 text-sm text-[var(--muted-foreground)]">
              {latestEducation?.details?.split("\n").map((line, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-orange-400">•</span>
                  {line}
                </li>
              )) || (
                <>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">•</span> Magna Cum
                    Laude
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">•</span> HCI Research
                    Assistant
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">•</span> ACM Chapter
                    Lead
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="flex justify-between items-end border-t border-[rgba(255,255,255,0.1)] pt-6 mt-4">
            <span className="text-5xl font-light text-[var(--muted-foreground)] opacity-50">
              {latestEducation?.endDate
                ? new Date(latestEducation.endDate).getFullYear()
                : "2022"}
            </span>
            <span className="text-xs tracking-widest uppercase text-[var(--muted-foreground)] opacity-70 mb-2">
              Graduated
            </span>
          </div>
        </div>

        {/* Card 3: Toolkit */}
        <div className="bg-gradient-to-br from-[#FF9A8B] via-[#FF6A88] to-[#FF99AC] p-8 rounded-3xl flex flex-col min-h-[400px] text-white overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl"></div>

          <h3 className="text-3xl font-serif mb-8 relative z-10 text-white">
            The Toolkit
          </h3>

          <div className="grid grid-cols-2 gap-4 relative z-10 content-start flex-1">
            {featuredSkills.length > 0 ? (
              featuredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col items-center justify-center aspect-[4/3] hover:bg-white/30 transition-all cursor-default"
                >
                  {skill.iconUrl && (
                    <div className="w-6 h-6 mb-2 relative">
                      <Image
                        src={skill.iconUrl}
                        alt={skill.label}
                        fill
                        className="object-contain invert"
                      />
                    </div>
                  )}
                  <span className="font-medium text-sm text-center text-white">
                    {skill.label}
                  </span>
                </div>
              ))
            ) : (
              // Fallback visual
              <>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">
                    TypeScript
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">Figma</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">
                    PostgreSQL
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col justify-center items-center h-24">
                  <span className="font-medium text-sm text-white">
                    Next.js
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
