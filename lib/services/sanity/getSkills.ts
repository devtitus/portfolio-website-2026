import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";
import type { SkillItem, SanitySkill } from "@/lib/types/sanity";

export const getSkills = async (): Promise<SkillItem[]> => {
  const query = `*[_type == "skill"] | order(order asc) {
    _id,
    label,
    icon
  }`;

  try {
    const skills: SanitySkill[] = await client.fetch(query);

    return skills.map((skill) => ({
      id: skill._id,
      uid: null,
      label: skill.label,
      iconUrl: urlForImage(skill.icon)?.url() || "",
    }));
  } catch (error) {
    console.error("Error fetching skills from Sanity:", error);
    return [];
  }
};

// Re-export types for convenience
export type { SkillItem };
export type { SanitySkill };