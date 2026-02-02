import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative px-[clamp(16px,4vw,60px)] pt-[20px] pb-[40px] max-w-[1400px] mx-auto xl:px-0 z-10">
      {/* Decorative background */}
      <div className="absolute -top-[20%] left-0 w-full h-[150%] pointer-events-none -z-10" />

      <div className="flex flex-col items-start gap-[clamp(4px,.25vw,8px)] mt-[64px] lg:mt-[70px]">
        <h1 className="font-primary text-[clamp(28px,3.25vw,44px)] font-medium text-foreground leading-normal m-0">
          Let's Connect
        </h1>
        <p className="font-secondary text-[clamp(16px,1vw,20px)] font-normal leading-relaxed text-white/60 m-0">
          Let's start a conversation
        </p>
      </div>
    </section>
  );
};

export { ContactHero };
