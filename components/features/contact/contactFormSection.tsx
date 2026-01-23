"use client";

import React from "react";
import { Input, Textarea, Button } from "@/components/ui";

const ContactFormSection: React.FC = () => {
  // Simple submit handler - can be expanded later
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="relative px-[clamp(16px,4vw,60px)] pt-[60px] pb-[100px] max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between xl:px-0 gap-[60px] z-10">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="max-w-[600px]">
          <h2 className="font-secondary text-[clamp(26px,3.25vw,36px)] font-medium text-foreground mb-2">
            Map
          </h2>
          <p className="font-secondary text-[clamp(16px,1.5vw,18px)] font-normal leading-relaxed text-white/60">
            Description Map
          </p>
        </div>

        {/* Visual Placeholder Box from design */}
        <div className="w-full max-w-[600px] h-[clamp(280px,20vw,500px)] border border-white/20 rounded-2xl relative overflow-hidden">
          {/* Optional: Add image or 3D element here later */}
        </div>
      </div>

      {/* Right Side Form Card */}
      <div className="flex-1 max-w-[600px] w-full min-h-[500px] bg-white/[0.06] backdrop-blur-[10px] rounded-2xl p-[clamp(20px,1vw,24px)] flex flex-col justify-center border border-white/5">
        <form className="flex flex-col gap-12 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 relative">
            <label className="font-secondary text-[clamp(16px,1vw,20px)] font-light text-foreground">
              Name
            </label>
            <Input type="text" placeholder="" required />
          </div>

          <div className="flex flex-col gap-4 relative">
            <label className="font-secondary text-[clamp(16px,1vw,20px)] font-light text-foreground">
              Email Address
            </label>
            <Input type="email" placeholder="" required />
          </div>

          <div className="flex flex-col gap-4 relative">
            <label className="font-secondary text-[clamp(16px,1vw,20px)] font-light text-foreground">
              Your Message
            </label>
            <Textarea placeholder="" required />
          </div>

          <Button
            type="submit"
            className="self-end mt-2 bg-foreground text-background px-6 py-6 rounded font-secondary text-[clamp(14px,1vw,16px)] font-medium transition-all duration-200 shadow-[4px_4px_0px_0px_#0057E0] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0057E0] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0057E0]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export { ContactFormSection };
