import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/lib/types/sanity";
import styles from "@/styles/features/projects/projectsGrid.module.css";
import { ExternalLink, Github } from "lucide-react"; // Assuming lucide-react is available, or use a custom icon

// Fallback icon component if lucide-react isn't installed
const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

interface ProjectsGridProps {
  projects: ProjectItem[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className={styles.gridWrapper}>
      {projects.map((project) => (
        <article key={project.id} className={styles.projectCard}>
          <div className={styles.imageWrapper}>
            {project.mainImage ? (
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className={styles.projectImage}
              />
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700">
                No Image
              </div>
            )}
          </div>

          <div className={styles.content}>
            <div className={styles.meta}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.links}>
                {project.codeLink && (
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    className={styles.linkIcon}
                    title="View Code"
                  >
                    <GithubIcon />
                  </Link>
                )}
                {project.projectLink && (
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className={styles.linkIcon}
                    title="Live Project"
                  >
                    <LinkIcon />
                  </Link>
                )}
              </div>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.tags}>
              {project.technologies && project.technologies.length > 0
                ? project.technologies.map((tech) => (
                    <span key={tech.id} className={styles.tag}>
                      {tech.label}
                    </span>
                  ))
                : project.tags?.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export { ProjectsGrid };
