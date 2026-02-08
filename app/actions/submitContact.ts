"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      };
    }

    await client.create({
      _type: "contact",
      name,
      email,
      subject,
      message,
      read: false,
      submittedAt: new Date().toISOString(),
    });

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
