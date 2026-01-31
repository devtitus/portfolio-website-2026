import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/lib/types/sanity";
import { GlassCard } from "@/components/ui";
import { LinkIcon } from "@/lib/utils/icons";

interface ProjectCardProps {
  project: ProjectItem;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const linkUrl = project.projectLink || project.codeLink || "#";

  return (
    <GlassCard
      hover
      glow
      padding="none"
      className="group overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container with Overlay */}
      <div className="relative aspect-video overflow-hidden bg-black/10">
        {project.mainImage ? (
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/50">
            No Image
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

        {/* Hover Info */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-end w-full">
            <Link
              href={linkUrl}
              target={linkUrl !== "#" ? "_blank" : undefined}
              className="w-10 h-10 rounded-full bg-[rgba(0,87,224,0.2)] backdrop-blur-sm border border-[rgba(0,87,224,0.4)] flex items-center justify-center text-white hover:bg-[rgba(0,87,224,0.3)] hover:scale-110 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-[clamp(18px,1.25vw,20px)] mb-1">{project.title}</h3>
        <p className="text-white/70 text-[clamp(16px,1vw,18px)] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(project.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="px-3 py-1 text-[clamp(12px,1.25vw,14px)] rounded-full bg-[rgba(0,87,224,0.1)] border border-[rgba(0,87,224,0.3)] text-[#0057E0]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
