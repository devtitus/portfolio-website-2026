import { client } from "@/sanity/lib/client";
import type { EducationItem, SanityEducation } from "@/lib/types/sanity";

export const getEducation = async (): Promise<EducationItem[]> => {
  const query = `*[_type == "education"] | order(startDate desc) {
    _id,
    degree,
    university,
    startDate,
    endDate,
    details
  }`;

  try {
    const education: SanityEducation[] = await client.fetch(query);

    return education.map((edu) => ({
      id: edu._id,
      degree: edu.degree,
      university: edu.university,
      startDate: edu.startDate,
      endDate: edu.endDate,
      details: edu.details,
    }));
  } catch (error) {
    console.error("Error fetching education from Sanity:", error);
    return [];
  }
};
