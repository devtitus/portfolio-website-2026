"use client";

import type { ExperienceItem, EducationItem } from "@/lib/types/sanity";
import { cn } from "@/lib/utils";

interface AboutSelectedPathProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
}

// SVG Component for the Connector Branch
const ThreadBranch = ({ color }: { color: string }) => (
  <svg
    width="40"
    height="120"
    viewBox="0 0 40 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -left-[39px] top-6 pointer-events-none"
  >
    {/* The Branch Path */}
    {/* Starts from spine (x=-1, so it connects), curves to the right, ends at the card */}
    <path
      d="M 1 0 V 20 Q 1 40 20 40 H 40"
      stroke={`url(#gradient-${color})`}
      strokeWidth="2"
      fill="none"
      className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
    />

    {/* Definitions for Gradients */}
    <defs>
      <linearGradient id="gradient-orange" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FB923C" stopOpacity="0.2" />{/* orange-400 */}
        <stop offset="100%" stopColor="#FB923C" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="gradient-blue" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />{/* blue-400 */}
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
      </linearGradient>
    </defs>

    {/* The Terminal Dot at the card entry */}
    <circle cx="40" cy="40" r="3" fill={color === 'orange' ? '#FB923C' : '#60A5FA'} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
  </svg>
);

export const AboutSelectedPath: React.FC<AboutSelectedPathProps> = ({
  experiences,
  education,
}) => {
  return (
    <section
      className={cn(
        "max-w-[1400px] mx-auto",
        "px-[clamp(16px,4vw,60px)] 2xl:px-0",
        "py-[clamp(60px,10vh,100px)]"
      )}
    >
      {/* Header */}
      <div className="mb-[clamp(40px,5vw,60px)]">
        <h2 className="text-[clamp(26px,2vw,36px)] font-primary mb-3 text-[var(--foreground)] leading-[1.1]">
          Selected Path
        </h2>
        <p className="text-[var(--muted-foreground)] text-[clamp(16px,1vw,18px)]">
          System activity & milestones
        </p>
      </div>

      {/* Main Grid: Two independent columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(24px,4vw,40px)]">

        {/* Column 1: Experience */}
        <div className="relative pl-10 ml-8 lg:ml-0">
          {/* Main Spine (The Thread) */}
          <div className="absolute left-[2px] top-0 bottom-12 w-[2px] bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0"></div>

          {/* Spine Header */}
          <div className="absolute -left-[19px] top-0 w-11 h-11 bg-[var(--background)] border border-orange-500/30 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(251,146,60,0.2)]">
            <span className="text-xl">💼</span>
          </div>

          <div className="mt-20 space-y-12">
            {experiences.length > 0 ? (
              experiences.map((exp) => (
                <div key={exp.id} className="group relative">
                  {/* The Connector Wire */}
                  <div className="absolute -left-[42px] top-[-20px]">
                    {/* Horizontal line from spine */}
                    <div className="absolute top-[20px] -left-0.5 w-5 h-[2px] bg-orange-500/30 group-hover:bg-orange-400 transition-colors"></div>
                    {/* Curve */}
                    <svg width="40" height="40" viewBox="0 0 40 40" className="absolute left-[18px] top-[20px]">
                      <path d="M 0 0 H 20 C 30 0 40 10 40 20 V 22" fill="none" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="2" className="group-hover:stroke-opacity-100 transition-all duration-300" />
                    </svg>
                    {/* Dot on spine */}
                    <div className="absolute top-[15px] -left-[1px] w-3 h-3 bg-[var(--background)] border-2 border-orange-500/50 rounded-full group-hover:border-orange-400 group-hover:bg-orange-400 transition-colors z-20"></div>
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "bg-white/[0.03] backdrop-blur-[10px] border border-white/5",
                      "p-[clamp(16px,3vw,24px)]",
                      "rounded-[20px] rounded-tl-sm", // Keep tl-sm for wire aesthetic if desired, or standardize to 20px
                      "hover:border-orange-500/30 transition-all duration-300",
                      "group-hover:bg-[rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-[clamp(18px,1.2vw,22px)] font-primary text-[var(--foreground)] group-hover:text-orange-100 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-[var(--muted-foreground)] text-sm font-mono mt-1">
                          {exp.company}
                        </p>
                      </div>
                      {exp.isCurrent ? (
                        <span className="self-start text-orange-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase py-1 px-3 bg-orange-400/10 border border-orange-400/20 rounded-full">
                          Current
                        </span>
                      ) : (
                        <span className="self-start text-[var(--muted-foreground)] text-[10px] sm:text-xs font-mono py-1 px-3 bg-white/5 border border-white/5 rounded-full">
                          {exp.endDate
                            ? new Date(exp.endDate).getFullYear()
                            : "Past"}
                        </span>
                      )}
                    </div>
                    <div className="text-[var(--muted-foreground)] text-[clamp(14px,1vw,16px)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {exp.description}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-[var(--muted-foreground)] opacity-50 border border-dashed border-[var(--border)] rounded-2xl">
                No experience data.
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Education */}
        <div className="relative pl-10 ml-8 lg:ml-0 md:mt-0 mt-12">
          {/* Main Spine (The Thread) */}
          <div className="absolute left-[2px] top-0 bottom-12 w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0"></div>

          {/* Spine Header */}
          <div className="absolute -left-[19px] top-0 w-11 h-11 bg-[var(--background)] border border-blue-500/30 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <span className="text-xl">🎓</span>
          </div>

          <div className="mt-20 space-y-12">
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="group relative">
                  {/* The Connector Wire - Blue */}
                  <div className="absolute -left-[42px] top-[-20px]">
                    {/* Horizontal line from spine */}
                    <div className="absolute top-[20px] -left-0.5 w-5 h-[2px] bg-blue-500/30 group-hover:bg-blue-400 transition-colors"></div>
                    {/* Curve */}
                    <svg width="40" height="40" viewBox="0 0 40 40" className="absolute left-[18px] top-[20px]">
                      <path d="M 0 0 H 20 C 30 0 40 10 40 20 V 22" fill="none" stroke="#60A5FA" strokeOpacity="0.3" strokeWidth="2" className="group-hover:stroke-opacity-100 transition-all duration-300" />
                    </svg>
                    {/* Dot on spine */}
                    <div className="absolute top-[15px] -left-[1px] w-3 h-3 bg-[var(--background)] border-2 border-blue-500/50 rounded-full group-hover:border-blue-400 group-hover:bg-blue-400 transition-colors z-20"></div>
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "bg-white/[0.03] backdrop-blur-[10px] border border-white/5",
                      "p-[clamp(16px,3vw,24px)]",
                      "rounded-[20px] rounded-tl-sm",
                      "hover:border-blue-500/30 transition-all duration-300",
                      "group-hover:bg-[rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-[clamp(18px,1.2vw,22px)] font-primary text-[var(--foreground)] group-hover:text-blue-100 transition-colors">
                          {edu.university}
                        </h4>
                        <p className="text-[var(--muted-foreground)] text-sm font-mono mt-1">
                          {edu.degree}
                        </p>
                      </div>
                      <span className="self-start text-[var(--muted-foreground)] text-[10px] sm:text-xs font-mono py-1 px-3 bg-white/5 border border-white/5 rounded-full">
                        {edu.endDate
                          ? new Date(edu.endDate).getFullYear()
                          : "Present"}
                      </span>
                    </div>
                    {edu.details && (
                      <ul className="space-y-2 text-[clamp(14px,1vw,16px)] text-[var(--muted-foreground)] opacity-80 group-hover:opacity-100 transition-opacity">
                        {edu.details.split("\n").map((line, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-3 text-blue-400/70 mt-1">▹</span>
                            <span className="flex-1 leading-relaxed">{line}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-[var(--muted-foreground)] opacity-50 border border-dashed border-[var(--border)] rounded-2xl">
                No education data.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};