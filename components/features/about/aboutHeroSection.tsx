import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AboutHeroSection: React.FC = () => {
  return (
    <section
      className={cn(
        // Layout & Spacing
        "relative min-h-dvh flex items-center overflow-hidden",
        "px-[clamp(16px,4vw,60px)] py-[clamp(60px,5vh,60px)]",
        // Background Gradient matching the design
        // "bg-[linear-gradient(180deg,var(--page-bg)_10%,rgba(0,0,0,0.1)_42%,var(--page-bg)_82%)]"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-[clamp(32px,10vw,120px)] z-10">
        {/* Text Content - Left Side */}
        <div className="flex-1 flex flex-col w-full text-center lg:text-left lg:order-1 order-1">
          <div className="flex flex-row gap-[clamp(4px,1vw,12px)] w-full">
            <h1 className="font-primary font-medium leading-[1.1] text-[clamp(28px,3.25vw,56px)] flex flex-row gap-[clamp(4px,1vw,12px)]">
              Creative <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #0057E0 0%, #2b7fff 55%, #0057E0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Architect
              </span>
            </h1>
          </div>

          <div
            className={cn(
              "mt-4 lg:mt-5 p-0 rounded-xl",
              "border-none bg-transparent",
            )}
          >
            <p className="text-[clamp(16px,1vw,20px)] text-[var(--text-secondary)] text-left leading-relaxed font-light">
              Turning complex problems into elegant, user-centric products.
              With expertise in modern web technologies, I specialize in creating
              scalable, performant applications that make a difference.
            </p>
          </div>
        </div>
        {/* Profile Image - Right Side */}
        <div
          className={cn(
            "relative flex-shrink-0",
            // Fluid sizing: full width on mobile (minus padding), fixed max on desktop
            "w-[clamp(80px,80vw,300px)] xl:w-[clamp(350px,80vw,450px)] max-sm:w-[clamp(80px,70vw,300px)] aspect-square",
            "rounded-xl bg-white/5 border border-white/10 backdrop-blur-md",
            "flex items-center justify-center",
            "shadow-[2px_2px_12px_2px_rgba(0,87,224,1)]",
            "lg:order-2 order-2", // Ensure visual order if needed
          )}
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <Image
              src="/home/hi.png"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 550px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHeroSection };
