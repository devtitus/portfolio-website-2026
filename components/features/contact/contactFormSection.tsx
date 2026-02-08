"use client";

import React from "react";
import { Input, Textarea, Button } from "@/components/ui";
import { submitContactForm } from "@/app/actions/submitContact";
import { cn } from "@/lib/utils";

const ContactFormSection: React.FC = () => {
  // State for form submission
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<{ text: string; type: 'success' | 'error' } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setMessage(null);

    // Add a default subject for this form if not present
    if (!formData.get('subject')) {
      formData.append('subject', 'New Contact Form Submission');
    }

    try {
      const result = await submitContactForm(null, formData);
      if (result.success) {
        setMessage({ text: 'Message sent successfully!', type: 'success' });
        // Optional: Reset form here if needed, but HTML form reset happens on refresh usually.
        // For a better UX we might want to clear inputs, but with server actions and uncontrolled inputs it's tricky without a ref or key reset.
        // For now, success message is enough.
      } else {
        setMessage({ text: result.message || "Something went wrong.", type: 'error' });
      }
    } catch (error) {
      setMessage({ text: "An unexpected error occurred.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  }

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
        <form className="flex flex-col gap-12 w-full" action={handleSubmit}>
          {message && (
            <div className={cn(
              "p-3 rounded-lg text-sm font-medium",
              message.type === 'success' ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            )}>
              {message.text}
            </div>
          )}
          <div className="flex flex-col gap-4 relative">
            <label className="font-secondary text-[clamp(16px,1vw,20px)] font-light text-foreground">
              Name
            </label>
            <Input type="text" placeholder="" required name="name" disabled={isSubmitting} />
          </div>

          <div className="flex flex-col gap-4 relative">
            <label className="font-secondary text-[clamp(16px,1vw,20px)] font-light text-foreground">
              Email Address
            </label>
            <Input type="email" placeholder="" required name="email" disabled={isSubmitting} />
          </div>

          <div className="flex flex-col gap-4 relative">
            <label className="font-secondary text-[clamp(16px,1vw,20px)] font-light text-foreground">
              Your Message
            </label>
            <Textarea placeholder="" required name="message" disabled={isSubmitting} />
          </div>

          <Button
            type="submit"
            className="self-end mt-2 bg-foreground text-background px-6 py-6 rounded font-secondary text-[clamp(14px,1vw,16px)] font-medium transition-all duration-200 shadow-[4px_4px_0px_0px_#0057E0] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0057E0] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0057E0]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export { ContactFormSection };
