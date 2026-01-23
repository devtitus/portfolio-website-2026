"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
    id: string;
    testimonial: string;
    name: string;
    company: string;
    image: string;
}

export interface TestimonialCarouselProps {
    testimonials: TestimonialItem[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [isPaused, setIsPaused] = React.useState(false);

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    // Triple testimonials for seamless infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div
            className="relative w-full max-w-[1400px] mx-auto overflow-x-hidden py-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Continuous Scrolling Container */}
            <div
                className={cn(
                    "flex gap-5 max-lg:gap-4",
                    "animate-scroll-testimonials",
                    isPaused && "paused"
                )}
                style={{
                    animationDuration: `${testimonials.length * 5}s`,
                }}
            >
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                        key={`${testimonial.id}-${index}`}
                        className={cn(
                            "flex-shrink-0 rounded-2xl p-6 flex flex-col items-center justify-between",
                            "bg-white/[0.03] border border-white/[0.12]",
                            "backdrop-blur-2xl backdrop-saturate-150",
                            "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
                            "hover:bg-white/[0.06] hover:border-brand-blue/40",
                            "hover:shadow-[0_12px_48px_rgba(0,87,224,0.2)]",
                            "transition-all duration-300",
                            "hover:scale-[1.02]",
                            // Fixed width for consistent scrolling
                            "w-[280px] sm:w-[300px] lg:w-[320px]",
                            "h-[clamp(220px,25vh,350px)]"
                        )}
                    >
                        {/* Avatar */}
                        <Image
                            src={testimonial.image}
                            alt={`Avatar of ${testimonial.name}`}
                            width={64}
                            height={64}
                            className="w-18 h-18 rounded-full border-2 border-white/20 object-cover"
                        />

                        {/* Quote */}
                        <p className={cn(
                            "text-center italic text-white/90 font-secondary flex items-center",
                            "text-[clamp(16px,1.5vw,18px)] leading-relaxed",
                            "line-clamp-4 px-2"
                        )}>
                            &ldquo;{testimonial.testimonial}&rdquo;
                        </p>

                        {/* Author Info */}
                        <div className="text-center space-y-1">
                            <h4 className="text-white font-medium font-secondary text-[clamp(16px,1.5vw,18px)]">
                                {testimonial.name}
                            </h4>
                            <p className="text-white/70 text-[clamp(14px,1.25vw,16px)]">
                                {testimonial.company}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
