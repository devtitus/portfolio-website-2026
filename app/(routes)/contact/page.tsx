import React from "react";
import { ContactHero } from "@/components/features/contact/contactHero";
import { ContactFormSection } from "@/components/features/contact/contactFormSection";

export const metadata = {
  title: "Contact | Melwyn Titus",
  description: "Get in touch for collaborations and opportunities.",
};

const ContactPage = () => {
  return (
    <div className="min-h-dvh text-[var(--default-text-color)]">
      <ContactHero />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;
