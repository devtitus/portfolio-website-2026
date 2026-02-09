import { client } from "@/sanity/lib/client";
import type { ExperienceItem, SanityExperience } from "@/lib/types/sanity";

export const getExperience = async (): Promise<ExperienceItem[]> => {
  const query = `*[_type == "experience"] | order(startDate desc) {
    _id,
    title,
    company,
    location,
    startDate,
    endDate,
    isCurrent,
    description
  }`;

  try {
    const experiences: SanityExperience[] = await client.fetch(query, {}, { next: { revalidate: 3600 } });

    return experiences.map((exp) => ({
      id: exp._id,
      title: exp.title,
      company: exp.company,
      location: exp.location,
      startDate: exp.startDate,
      endDate: exp.endDate,
      isCurrent: exp.isCurrent,
      description: exp.description,
    }));
  } catch (error) {
    console.error("Error fetching experience from Sanity:", error);
    return [];
  }
};
