"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/magicui/aurora-text";
import { CopyIcon } from "@/lib/utils/icons";
import Image from "next/image";

const frameCount = 192;
const framePath = "/macbook/ezgif-frame-";

const FrameHeroSection = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = "m.works.gd@gmail.com";
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= frameCount; i++) {
                const img = new window.Image();
                const src = `${framePath}${i.toString().padStart(3, "0")}.jpg`;
                const promise = new Promise((resolve, reject) => {
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                });
                img.src = src;
                loadedImages.push(img);
                promises.push(promise);
            }

            try {
                await Promise.all(promises);
                setImages(loadedImages);
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load hero frames", error);
            }
        };

        loadImages();
    }, []);

    // Scroll Logic
    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current || !sectionRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Set canvas size to match window
        const updateSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Draw current frame immediately after resize
            const scrollPos = window.scrollY;
             updateFrame(scrollPos);
        };
        
        const updateFrame = (scrollY: number) => {
             const sectionHeight = sectionRef.current?.offsetHeight || 0;
             const windowHeight = window.innerHeight;
             // The scrollable distance is sectionHeight - windowHeight
             const maxScroll = sectionHeight - windowHeight;
             
             if (maxScroll <= 0) return;

             const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
             const frameIndex = Math.min(
                 Math.floor(progress * (frameCount - 1)),
                 frameCount - 1
             );

             const img = images[frameIndex];
             
             // Draw image 'cover' style
             if (img) {
                 const hRatio = canvas.width / img.width;
                 const vRatio = canvas.height / img.height;
                 const ratio = Math.max(hRatio, vRatio);
                 const centerShift_x = (canvas.width - img.width * ratio) / 2;
                 const centerShift_y = (canvas.height - img.height * ratio) / 2;
                 
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.drawImage(
                     img,
                     0,
                     0,
                     img.width,
                     img.height,
                     centerShift_x,
                     centerShift_y,
                     img.width * ratio,
                     img.height * ratio
                 );
             }
        };

        window.addEventListener("resize", updateSize);
        window.addEventListener("scroll", () => updateFrame(window.scrollY));
        
        updateSize(); // Initial draw

        return () => {
            window.removeEventListener("resize", updateSize);
            window.removeEventListener("scroll", () => updateFrame(window.scrollY));
        };
    }, [isLoaded, images]);

    // Email Copy Handle Function
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch {
            // Fallback for older browsers
             const textArea = document.createElement("textarea");
             textArea.value = email;
             document.body.appendChild(textArea);
             textArea.select();
             document.execCommand("copy");
             document.body.removeChild(textArea);
             setIsCopied(true);
             setTimeout(() => {
                setIsCopied(false);
             }, 2000);
        }
    };

    return (
         <div 
            ref={sectionRef} 
            className={cn(
                "relative w-full",
                "bg-gradient-to-b from-black via-[#0a0a0f] to-black",
                // Ambient background glow
                "before:content-[''] before:absolute before:-top-1/2 before:-left-1/4",
                "before:w-[150%] before:h-[200%]",
                "before:bg-[radial-gradient(ellipse_at_center,rgba(0,87,224,0.15)_0%,rgba(0,87,224,0.05)_25%,transparent_50%)]",
                "before:animate-ambient-pulse before:pointer-events-none before:z-0",
                "motion-reduce:before:animate-none"
            )} 
            style={{ height: "500vh" }}
        >
            <div className={cn(
                "sticky top-0 w-full h-dvh min-h-[600px] overflow-hidden",
                "max-sm:h-dvh max-sm:min-h-[500px]"
            )}>
                {/* Canvas */}
                <canvas 
                    ref={canvasRef} 
                    className={cn(
                        "absolute top-0 left-0 w-full h-full object-contain aspect-[16/9] z-[1] mt-[85px]",
                        "brightness-[0.7] contrast-[1.1] transition-[filter] duration-300",
                        "max-lg:brightness-[0.6] max-lg:contrast-[1.15]",
                        "max-sm:brightness-[0.5]"
                    )} 
                />
                
                {/* Overlay */}
                <div className={cn(
                    "absolute top-0 left-0 w-full h-full z-10",
                    "flex flex-col justify-center items-center pointer-events-none",
                    "bg-gradient-to-br from-black/40 via-black/20 to-brand-blue/10",
                    // Glassmorphic backdrop
                    "after:content-[''] after:absolute after:inset-0",
                    "after:backdrop-blur-[0.5px] after:pointer-events-none"
                )}>
                    <div className="pointer-events-auto w-full h-full flex flex-col justify-center items-center relative z-[11]">
                        <div className={cn(
                            "flex flex-col items-start gap-4 z-10 relative pl-4 md:pl-20 w-full max-w-[1920px] mx-auto",
                            "max-sm:items-center max-sm:pl-0 max-sm:px-4 max-sm:gap-8"
                        )}> 
                            {/* Hero Heading */}
                            <h1 className={cn(
                                "flex flex-col text-white text-left font-primary",
                                "text-[clamp(18px,5vw,38px)] font-semibold leading-[1.4] tracking-tight",
                                "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
                                "animate-fade-in-up motion-reduce:animate-none",
                                "max-lg:text-[clamp(28px,5vw,48px)]",
                                "max-sm:text-[clamp(22px,6vw,32px)] max-sm:text-center"
                            )}>
                                <span className="inline-block">
                                    I help founders turn ideas{" "}
                                </span>
                                <span className="inline-block">
                                    into seamless{" "}
                                    <AuroraText
                                        colors={["#0057E0", "#F3F4F6", "#0057E0", "#0057E0"]}
                                        speed={1.5}
                                        className={cn(
                                            "font-primary font-bold capitalize",
                                            "text-[clamp(18px,5vw,38px)]",
                                            "max-lg:text-[clamp(28px,5vw,48px)]",
                                            "max-sm:text-[clamp(22px,6vw,32px)]"
                                        )}
                                    >
                                        Digital Experiences
                                    </AuroraText>
                                </span>
                            </h1>

                            {/* Hero Description - hidden on mobile */}
                            <div className="flex flex-row items-center gap-3 max-lg:hidden">
                                <span className={cn(
                                    "text-left font-secondary text-[clamp(16px,2vw,18px)] font-normal",
                                    "text-white/85 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
                                    "animate-fade-in-up motion-reduce:animate-none"
                                )} style={{ animationDelay: '0.2s' }}>
                                    Hello, I&apos;m Melwyn Titus
                                </span>
                                <div className="w-[80px] h-[40px] rounded-[40px] flex items-center justify-center border border-white/20 relative overflow-hidden group cursor-pointer backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent transform translate-y-0 duration-500 ease-in-out group-hover:-translate-y-full z-[4]"></div>
                                    <Image
                                        src="/home/hi.png"
                                        alt="Welcome Icon"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 origin-[70%_70%] animate-wave z-[5] drop-shadow-lg"
                                    />
                                </div>
                                <span className={cn(
                                    "text-left font-secondary text-[clamp(16px,2vw,18px)] font-normal",
                                    "text-white/85 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
                                    "animate-fade-in-up motion-reduce:animate-none"
                                )} style={{ animationDelay: '0.2s' }}>
                                    a Full stack Developer
                                </span>
                            </div>

                            {/* Hero Buttons */}
                            <div className={cn(
                                "flex items-center gap-10 mt-8",
                                "max-lg:flex-col-reverse max-lg:gap-7",
                                "max-sm:flex-col max-sm:gap-5 max-sm:w-full"
                            )}>
                                <button className={cn(
                                    "group relative flex justify-center items-center",
                                    "px-6 py-3 bg-white text-[#08080a] text-base font-normal rounded-[8px]",
                                    "overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                                    "shadow-[0_0_0_1px_rgba(0,87,224,0.3),0_8px_24px_rgba(0,87,224,0.2)]",
                                    "hover:shadow-[0_0_0_1px_rgba(0,87,224,0.5),0_12px_32px_rgba(0,87,224,0.3)]",
                                    "max-sm:px-6 max-sm:py-3 max-sm:text-base max-sm:w-full max-sm:max-w-[280px]"
                                )}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0057E0]/10 via-transparent to-[#0057E0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 tracking-wide">Let's Connect</span>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0057E0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </button>
                                <div className="flex flex-row items-center gap-3 group max-sm:hidden">
                                    <button
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
                                        onClick={handleCopyEmail}
                                        title={isCopied ? "Copied!" : "Copy email to clipboard"}
                                    >
                                        <CopyIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                                    </button>
                                    <span className="text-white/80 text-base font-normal tracking-wide w-[196px] group-hover:text-white/90 transition-colors">
                                        {isCopied ? "Copied!" : email}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className={cn(
                    "absolute bottom-10 left-1/2 -translate-x-1/2 z-20",
                    "text-white/60 text-xs uppercase tracking-[4px] font-normal",
                    "flex flex-col items-center gap-3 animate-pulse-glow",
                    "motion-reduce:animate-none",
                    // Line after
                    "after:content-[''] after:w-px after:h-[30px]",
                    "after:bg-gradient-to-b after:from-brand-blue/80 after:to-transparent",
                    "after:animate-scroll-line",
                    "motion-reduce:after:animate-none",
                    // Hide on mobile
                    "max-sm:hidden"
                )}>
                    Scroll to animate
                </div>
            </div>
        </div>
    );
};

export default FrameHeroSection;

