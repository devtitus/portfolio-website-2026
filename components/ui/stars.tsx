"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { cn } from "@/lib/utils";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

interface StarsBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minStarSize?: number;
  maxStarSize?: number;
  speed?: number; // Speed factor
  starColor?: string; // Hex or rgb
}

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minStarSize = 0.5,
  maxStarSize = 1,
  className,
  speed = 1,
  starColor = "#FFFFFF",
  ...props
}: StarsBackgroundProps) => {
  const [stars, setStars] = useState<Star[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate stars
  const generateStars = useCallback(
    (width: number, height: number): Star[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(), // used for pseudo-depth or opacity
          size:
            Math.random() * (maxStarSize - minStarSize) + minStarSize,
        };
      });
    },
    [starDensity, maxStarSize, minStarSize]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        // Handle high DPI displays - Cap at 1.5 to prevents mobile stutter
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [starDensity, maxStarSize, minStarSize, generateStars]);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    // Pre-calculate dpr inverse to avoid doing it every frame
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const dprInv = 1 / dpr;

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = starColor;

      stars.forEach((star) => {
        ctx.beginPath();

        // Movement: Move stars upwards/float logic
        star.y -= 0.3 * speed;

        // Wrap around
        const height = canvas.height * dprInv;
        const width = canvas.width * dprInv;

        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Twinkle effect
        const opacity = 0.5 + 0.5 * Math.sin(Date.now() * 0.001 * star.z * 10);
        ctx.globalAlpha = opacity;

        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, starColor, speed]);

  return (
    <div
      data-slot="stars-background"
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full block opacity-60"
      />
    </div>
  );
};
