"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectItem } from "@/lib/types/sanity";
import { PortableText } from "@portabletext/react";
import { Github, Globe, Figma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        className={cn(
          "bg-card backdrop-blur-[20px] border border-[var(--glass-border-color)]",
          "text-foreground max-w-[90vw] w-[1000px] h-[85vh] max-h-[85vh]",
          "overflow-hidden flex flex-col p-0 rounded-3xl",
          "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-none gap-0",
          "sm:max-w-[1000px]"
        )}
      >
        <div
          className={cn(
            "overflow-y-auto flex-1",
            "p-[clamp(16px,4vw,40px)]",
            "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-[10px]",
            "[&::-webkit-scrollbar-thumb:hover]:bg-primary"
          )}
        >
          <DialogHeader
            className={cn(
              "flex justify-between items-start",
              "mb-[clamp(24px,4vw,40px)]",
              "max-sm:flex-col max-sm:gap-4"
            )}
          >
            <div className="flex flex-col gap-2">
              {project.tagline && (
                <span className="font-secondary text-[var(--skill-text-color)] text-[clamp(1rem,1.5vw,1.125rem)]">
                  {project.tagline}
                </span>
              )}
              <DialogTitle className="font-secondary text-[clamp(1.5rem,4vw,3rem)] leading-tight text-foreground">
                {project.title}
              </DialogTitle>
            </div>

            <div
              className={cn("flex gap-3", "max-sm:w-full max-sm:justify-start")}
            >
              {project.projectLink && (
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className={cn(
                    "rounded-full border border-[var(--glass-border-color)]",
                    "bg-muted flex items-center justify-center text-foreground",
                    "transition-all duration-200",
                    "hover:bg-primary hover:-translate-y-0.5 hover:border-primary",
                    "w-12 h-12",
                    "max-sm:w-10 max-sm:h-10"
                  )}
                  aria-label="View Live Site"
                >
                  <Globe className={cn("w-5 h-5", "max-sm:w-4 max-sm:h-4")} />
                </Link>
              )}
              {project.codeLink && (
                <Link
                  href={project.codeLink}
                  target="_blank"
                  className={cn(
                    "rounded-full border border-[var(--glass-border-color)]",
                    "bg-muted flex items-center justify-center text-foreground",
                    "transition-all duration-200",
                    "hover:bg-primary hover:-translate-y-0.5 hover:border-primary",
                    "w-12 h-12",
                    "max-sm:w-10 max-sm:h-10"
                  )}
                  aria-label="View Source Code"
                >
                  <Github className={cn("w-5 h-5", "max-sm:w-4 max-sm:h-4")} />
                </Link>
              )}
              {project.designLink && (
                <Link
                  href={project.designLink}
                  target="_blank"
                  className={cn(
                    "rounded-full border border-[var(--glass-border-color)]",
                    "bg-muted flex items-center justify-center text-foreground",
                    "transition-all duration-200",
                    "hover:bg-primary hover:-translate-y-0.5 hover:border-primary",
                    "w-12 h-12",
                    "max-sm:w-10 max-sm:h-10"
                  )}
                  aria-label="View Design"
                >
                  <Figma className={cn("w-5 h-5", "max-sm:w-4 max-sm:h-4")} />
                </Link>
              )}
            </div>
          </DialogHeader>

          <div
            className={cn(
              "relative w-full aspect-video rounded-2xl overflow-hidden",
              "mb-[clamp(24px,4vw,40px)]",
              "border border-[var(--glass-border-color)]"
            )}
          >
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-[2fr_1fr]",
              "gap-[clamp(24px,4vw,40px)]"
            )}
          >
            <div className="text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-[var(--skill-text-color)] prose-custom">
              {project.detailedDescription ? (
                <PortableText value={project.detailedDescription} />
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            <div className="space-y-6">
              <div
                className={cn(
                  "bg-[var(--glass-color)] border border-[var(--glass-border-color)]",
                  "rounded-xl p-[clamp(16px,3vw,24px)] mb-4"
                )}
              >
                <h4 className="text-sm text-[var(--skill-text-color)] mb-2 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech.id}
                      className="text-sm px-3 py-1 bg-muted text-foreground border border-[var(--glass-border-color)] rounded-full whitespace-nowrap"
                    >
                      {tech.label}
                    </span>
                  ))}
                  {!project.technologies?.length &&
                    project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-muted text-foreground border border-[var(--glass-border-color)] rounded-full whitespace-nowrap"
                      >
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
