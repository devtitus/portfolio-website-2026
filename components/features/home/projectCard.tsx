import React from "react";
import { GlassCard } from "@/components/ui";
import { LinkIcon } from "@/lib/utils/icons";

const ProjectCard = () => {
  return (
    <GlassCard 
      hover 
      glow 
      padding="none"
      className="group overflow-hidden"
    >
      {/* Image Container with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src="https://picsum.photos/seed/picsum/600/400"
          alt="Project preview"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Hover Info */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-end w-full">
            <button className="w-10 h-10 rounded-full bg-[rgba(0,87,224,0.2)] backdrop-blur-sm border border-[rgba(0,87,224,0.4)] flex items-center justify-center text-white hover:bg-[rgba(0,87,224,0.3)] hover:scale-110 transition-all duration-300">
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-[clamp(16px,2vw,22px)] mb-1">Project Title</h3>
        <p className="text-white/70 text-[clamp(14px,1.5vw,16px)] leading-relaxed mb-4">
          A brief description of the project and its key features.
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-[clamp(12px,1.25vw,14px)] rounded-full bg-[rgba(0,87,224,0.1)] border border-[rgba(0,87,224,0.3)] text-[#0057E0]">
            React
          </span>
          <span className="px-3 py-1 text-[clamp(12px,1.25vw,14px)] rounded-full bg-[rgba(0,87,224,0.1)] border border-[rgba(0,87,224,0.3)] text-[#0057E0]">
            TypeScript
          </span>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
