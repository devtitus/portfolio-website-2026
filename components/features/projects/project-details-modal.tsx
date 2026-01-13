"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectItem } from "@/lib/types/sanity";
import styles from "@/styles/features/projects/projectModal.module.css";
import { PortableText } from "@portabletext/react";
import { Github, Globe, Figma, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`${styles.modalContent} border-none p-0 gap-0 sm:max-w-[1000px] max-w-[95vw]`}
      >
        <div className={styles.scrollArea}>
          <DialogHeader className={styles.header}>
            <div className={styles.titleGroup}>
              {project.tagline && (
                <span className={styles.tagline}>{project.tagline}</span>
              )}
              <DialogTitle className={styles.mainTitle}>
                {project.title}
              </DialogTitle>
            </div>

            <div className={styles.actions}>
              {project.projectLink && (
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className={styles.actionBtn}
                  aria-label="View Live Site"
                >
                  <Globe className="w-5 h-5" />
                </Link>
              )}
              {project.codeLink && (
                <Link
                  href={project.codeLink}
                  target="_blank"
                  className={styles.actionBtn}
                  aria-label="View Source Code"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
              {project.designLink && (
                <Link
                  href={project.designLink}
                  target="_blank"
                  className={styles.actionBtn}
                  aria-label="View Design"
                >
                  <Figma className="w-5 h-5" />
                </Link>
              )}
            </div>
          </DialogHeader>

          <div className={styles.imageSection}>
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className={styles.projectImage}
              priority
            />
          </div>

          <div className={styles.gridContent}>
            <div className={styles.richText}>
              {project.detailedDescription ? (
                <PortableText value={project.detailedDescription} />
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            <div className="space-y-6">
              <div className={styles.statCard}>
                <h4 className={styles.statLabel}>Technologies</h4>
                <div className={styles.statValue}>
                  {project.technologies?.map((tech) => (
                    <span key={tech.id} className={styles.pill}>
                      {tech.label}
                    </span>
                  ))}
                  {!project.technologies?.length &&
                    project.tags?.map((tag) => (
                      <span key={tag} className={styles.pill}>
                        {tag}
                      </span>
                    ))}
                </div>
              </div>

              {/* Additional sidebar info could go here */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
