import React from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ScriptCopyBtn } from "@/components/ui/magicui/script-copy-btn";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { MapPinIcon, MailIcon, TechnologiesIcon } from "@/lib/utils/icons";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  },
);

const FobSection = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#113aab",
    showAtmosphere: true,
    atmosphereColor: "#cfe6ff",
    atmosphereAltitude: 0.1,
    emissive: "#0a2b7e",
    emissiveIntensity: 0.25,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#9bdcfb",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <section className={cn(
      "min-h-dvh px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
      "flex flex-col justify-center items-center overflow-hidden",
      "scroll-mt-20", // Navbar clearance
      "max-sm:min-h-auto max-sm:py-[60px]",
      "max-lg:min-h-auto max-lg:py-[80px]"
    )}>
      <div className={cn(
        "w-full flex flex-col justify-center gap-fluid-lg",
        "animate-fade-in-up motion-reduce:animate-none"
      )}>
        <h2 className={cn(
          "text-white text-center font-primary text-fluid-3xl font-medium",
          "leading-tight tracking-tight"
        )}>
          Focusing on the Best
        </h2>
        
        {/* Bento Grid */}
        <div className={cn(
          "grid gap-fluid-md",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          "lg:grid-rows-2 lg:h-[clamp(360px,40vh,500px)]",
          "xl:h-[clamp(450px,45vh,550px)]"
        )}>
          {/* Column 1 - Globe Card */}
          <div className={cn(
            "lg:row-span-2 rounded-2xl p-fluid-md",
            "bg-glass-bg border border-glass-border backdrop-blur-xl",
            "shadow-glass hover:shadow-glass-hover hover:border-brand-blue/30",
            "transition-all duration-300 hover:-translate-y-0.5",
            "flex flex-col gap-fluid-md overflow-hidden relative",
            "max-sm:min-h-[400px] sm:max-lg:col-span-2",
            "group"
          )}>
            <div className="flex-1 relative shadow-blue-glow">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
            <div className={cn(
              "flex flex-col gap-2",
              "lg:absolute lg:bottom-6 lg:left-6 lg:right-6",
              "lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
              "transition-all duration-300",
              "max-lg:static max-lg:opacity-100 max-lg:translate-y-0"
            )}>
              <h3 className="text-white/95 font-primary text-fluid-xl font-semibold leading-tight inline-flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-brand-blue drop-shadow-[0_0_8px_rgba(0,87,224,0.4)]" />
                Remote
              </h3>
              <p className="text-white/75 font-secondary text-fluid-base font-normal leading-relaxed">
                I have worked with multiple technologies and frameworks to build
                scalable and efficient applications.
              </p>
            </div>
          </div>
          
          {/* Column 2 Wrapper */}
          <div className={cn(
            "lg:row-span-2 flex flex-col gap-fluid-md",
            "max-sm:contents sm:max-lg:col-span-2 sm:max-lg:grid sm:max-lg:grid-cols-2"
          )}>
            {/* Bento 2 - Email */}
            <div className={cn(
              "lg:h-[40%] rounded-2xl p-fluid-md",
              "bg-glass-bg border border-glass-border backdrop-blur-xl",
              "shadow-glass hover:shadow-glass-hover hover:border-brand-blue/30",
              "transition-all duration-300 hover:-translate-y-0.5",
              "flex flex-col gap-3",
              "sm:max-lg:h-full"
            )}>
              <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage="shell"
                commandMap={customCommandMap}
                className="mt-0"
              />
              <div className="flex flex-col gap-2 max-lg:mt-4 lg:hidden">
                <h3 className="text-white/95 font-primary text-fluid-xl font-semibold leading-tight inline-flex items-center gap-2">
                  <MailIcon className="w-7 h-7 text-brand-blue drop-shadow-[0_0_8px_rgba(0,87,224,0.4)]" />
                  Email
                </h3>
                <p className="text-white/75 font-secondary text-fluid-base font-normal leading-relaxed">
                  I have worked with multiple technologies and frameworks to
                  build scalable and efficient applications.
                </p>
              </div>
            </div>
            
            {/* Bento 3 - Text Reveal */}
            <div className={cn(
              "lg:h-[60%] rounded-2xl p-fluid-md",
              "bg-glass-bg border border-glass-border backdrop-blur-xl",
              "shadow-glass hover:shadow-glass-hover hover:border-brand-blue/30",
              "transition-all duration-300 hover:-translate-y-0.5",
              "flex items-center",
              "sm:max-lg:h-full"
            )}>
              <TextRevealCard
                text="You know the business"
                revealText="I know the chemistry"
              >
                <TextRevealCardTitle>
                  Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  This is a text reveal card. Hover over the card to reveal the
                  hidden text.
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>
          </div>
          
          {/* Column 3 - Technologies */}
          <div className={cn(
            "lg:row-span-2 rounded-2xl p-fluid-md",
            "bg-glass-bg border border-glass-border backdrop-blur-xl",
            "shadow-glass hover:shadow-glass-hover hover:border-brand-blue/30",
            "transition-all duration-300 hover:-translate-y-0.5",
            "flex flex-col gap-fluid-md overflow-hidden relative",
            "max-sm:min-h-[350px] sm:max-lg:col-span-2",
            "group"
          )}>
            <div className="flex flex-col gap-fluid-sm flex-1">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
              />
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
              />
            </div>
            <div className={cn(
              "flex flex-col gap-2 z-10",
              "lg:absolute lg:bottom-6 lg:left-6 lg:right-6",
              "lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
              "transition-all duration-300",
              "max-lg:static max-lg:opacity-100 max-lg:translate-y-0"
            )}>
              <h3 className="text-white/95 font-primary text-fluid-xl font-semibold leading-tight inline-flex items-center gap-2">
                <TechnologiesIcon className="w-6 h-6 text-brand-blue drop-shadow-[0_0_8px_rgba(0,87,224,0.4)]" />
                Technologies
              </h3>
              <p className="text-white/75 font-secondary text-fluid-base font-normal leading-relaxed">
                I have worked with multiple technologies and frameworks to build
                scalable and efficient applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FobSection;

const customCommandMap = {
  email: "m.works.gd@gmail.com",
};

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Charles Dickens",
  },
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "William Shakespeare",
  },
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Edgar Allan Poe",
  },
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Jane Austen",
  },
  {
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Herman Melville",
  },
];
