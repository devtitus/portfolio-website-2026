import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { ProjectItem, SanityProject } from "@/lib/types/sanity";

export const getFeaturedProjects = async (): Promise<ProjectItem[]> => {
  const query = `*[_type == "project" && isFeatured == true && isPublished == true] | order(_createdAt desc) [0...4] {
    _id,
    title,
    tagline,
    slug,
    mainImage,
    description,
    projectLink,
    codeLink,
    designLink,
    tags,
    technologies[]->{
      _id,
      label,
      icon
    },
    formattedContent,
    isFeatured,
    isPublished
  }`;

  try {
    const projects: SanityProject[] = await client.fetch(query);

    return projects.map((project) => ({
      id: project._id,
      title: project.title,
      tagline: project.tagline,
      slug: project.slug?.current || "",
      mainImage: urlForImage(project.mainImage)?.url() || "",
      description: project.description,
      projectLink: project.projectLink,
      codeLink: project.codeLink,
      designLink: project.designLink,
      tags: project.tags,
      technologies:
        project.technologies?.map((tech) => ({
          id: tech._id,
          label: tech.label,
          iconUrl: urlForImage(tech.icon)?.url() || "",
          uid: null,
        })) || [],
      formattedContent: project.formattedContent,
      isFeatured: project.isFeatured,
      isPublished: project.isPublished,
    }));
  } catch (error) {
    console.error("Error fetching featured projects from Sanity:", error);
    return [];
  }
};
