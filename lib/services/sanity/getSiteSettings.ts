import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";
import type { SiteSettings, SanitySiteSettings } from "@/lib/types/sanity";

export const getSiteSettings = async (): Promise<SiteSettings | null> => {
  const query = `*[_type == "ctaSettings"][0] {
    _id,
    contactBackgroundImage
  }`;

  try {
    const settings: SanitySiteSettings | null = await client.fetch(query);

    if (!settings) {
      return null;
    }

    return {
      id: settings._id,
      contactBackgroundImageUrl: urlForImage(settings.contactBackgroundImage)?.url() || "",
    };
  } catch (error) {
    console.error("Error fetching site settings from Sanity:", error);
    return null;
  }
};

// Re-export types for convenience
export type { SiteSettings };
export type { SanitySiteSettings };