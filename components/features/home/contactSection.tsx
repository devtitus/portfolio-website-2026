"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui";
import {
  getSiteSettings,
  type SiteSettings,
} from "@/lib/services/sanity/getSiteSettings";

interface ContactSectionProps {
  headingHtml?: React.ReactNode;
  ctaText?: string;
  subHeading?: string;
  paragraph?: string;
}

const ContactSection = ({
  headingHtml,
  ctaText,
  subHeading,
  paragraph,
}: ContactSectionProps = {}) => {
  const [ctaSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getSiteSettings();
      setSiteSettings(settings);
    };

    fetchSettings();
  }, []);

  return (
    <section
      className={cn(
        "min-h-dvh px-[clamp(16px,4vw,60px)] relative",
        "flex flex-col justify-center items-center overflow-hidden",
        "bg-cover bg-center bg-no-repeat",
        "scroll-mt-20", // Navbar clearance
        // Glassmorphic overlay
        "before:content-[''] before:absolute before:inset-0",
        "before:bg-gradient-to-b before:from-black/85 before:via-black/70 before:to-black/85",
        "before:backdrop-blur-md before:z-[1]",
        // Ambient blue glow
        "after:content-[''] after:absolute after:top-1/2 after:left-1/2",
        "after:-translate-x-1/2 after:-translate-y-1/2",
        "after:w-[min(600px,90vw)] after:h-[min(600px,90vw)]",
        "after:bg-[radial-gradient(circle,rgba(0,87,224,0.15)_0%,rgba(0,87,224,0.05)_40%,transparent_70%)]",
        "after:animate-ambient-pulse after:pointer-events-none after:z-[1]",
        "motion-reduce:after:animate-none"
      )}
      style={{
        backgroundImage: ctaSettings?.contactBackgroundImageUrl
          ? `url(${ctaSettings.contactBackgroundImageUrl})`
          : undefined,
      }}
    >
      <div className={cn(
        "w-full max-w-[1400px] flex flex-col items-center justify-center",
        "gap-fluid-lg animate-fade-in-up motion-reduce:animate-none",
        "py-[clamp(60px,10vh,100px)] relative z-[2]",
        "max-sm:py-[60px] max-sm:gap-fluid-md",
        "max-lg:py-[80px]"
      )}>
        <div className={cn(
          "flex flex-col gap-[clamp(26px,2vw,32px)] items-center"
        )}>
          <div className="flex flex-col items-center gap-fluid-xs">
            {headingHtml || (
              <>
                <span className={cn(
                  "max-w-[min(900px,90vw)] text-white text-center",
                  "font-primary font-medium leading-tight tracking-tight",
                  "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
                  "text-[clamp(26px,3.2vw,48px)]"
                )}>
                  From Concept To{" "}
                  <span className={cn(
                    "bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue",
                    "bg-clip-text text-transparent font-bold"
                  )}>CREATION</span>
                </span>
                <span className={cn(
                  "max-w-[min(900px,90vw)] text-white text-center",
                  "font-primary font-medium leading-tight tracking-tight",
                  "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
                  "text-[clamp(26px,3.2vw,48px)]"
                )}>
                  Let's Make It{" "}
                  <span className={cn(
                    "bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue",
                    "bg-clip-text text-transparent font-bold"
                  )}>HAPPEN!</span>
                </span>
              </>
            )}
          </div>

          <PrimaryButton
            variant="solid"
            size="md"
            className="mt-3"
          >
            {ctaText || "Get In Touch"}
          </PrimaryButton>

          <p className={cn(
            "text-white/90 text-center font-secondary",
            "text-[clamp(18px,1.5vw,22px)] font-medium leading-relaxed tracking-tight",
          )}>
            {subHeading || "Ready to bring your ideas to life?"}
          </p>

          <p className={cn(
            "text-white/75 text-center font-secondary",
            "text-[clamp(16px,1.7vw,18px)] font-normal leading-relaxed tracking-wide",
            "max-w-[min(600px,90vw)] tracking-wide"
          )}>
            {paragraph ||
              "I'm always excited to collaborate on innovative projects and help turn your vision into reality."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

