import React from "react";

const ProjectsHero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center px-[clamp(16px,4vw,60px)] pt-[100px] pb-[60px] max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,87,224,0.08) 0%, rgba(0,87,224,0) 70%)",
        }}
      />

      <h1 className="text-[clamp(3rem,6vw,7rem)] leading-[0.9] font-medium text-foreground mb-[30px] font-secondary tracking-tight">
        Selected <br />
        <span
          className="italic"
          style={{
            background:
              "linear-gradient(90deg, #0057E0 0%, #2b7fff 55%, #0057E0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Works
        </span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
        A collection of projects where design meets code. From interactive web
        apps to robust backend systems, each piece represents a unique problem
        solved.
      </p>
    </section>
  );
};

export { ProjectsHero };
