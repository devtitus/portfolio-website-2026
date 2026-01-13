import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { ProjectItem, SanityProject } from "@/lib/types/sanity";

export const getProjects = async (): Promise<ProjectItem[]> => {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    projectLink,
    codeLink,
    tags,
    technologies[]->{
      _id,
      label,
      icon
    }
  }`;

  try {
    const projects: SanityProject[] = await client.fetch(query);

    return projects.map((project) => ({
      id: project._id,
      title: project.title,
      slug: project.slug?.current || "",
      mainImage: urlForImage(project.mainImage)?.url() || "",
      description: project.description,
      projectLink: project.projectLink,
      codeLink: project.codeLink,
      tags: project.tags,
      technologies:
        project.technologies?.map((tech) => ({
          id: tech._id,
          label: tech.label,
          iconUrl: urlForImage(tech.icon)?.url() || "",
          uid: null,
        })) || [],
    }));
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
    return [];
  }
};
