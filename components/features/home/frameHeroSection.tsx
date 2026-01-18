"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/features/home/frameHero.module.css";
import { AuroraText } from "@/components/ui/magicui/aurora-text";
import { CopyIcon } from "@/lib/utils/icons";
import Image from "next/image";

const frameCount = 192;
const framePath = "/frame-hero/ezgif-frame-";

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
        <div ref={sectionRef} className={styles.frameHeroSection} style={{ height: "500vh" }}>
            <div className={styles.stickyContainer}>
                <canvas ref={canvasRef} className={styles.canvas} />
                <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <div className="flex flex-col items-center gap-12 z-10 relative"> 
                            {/* Hero Heading */}
                            <h1 className={styles.heroTitle}>
                                <span className={styles.heroTitleLine}>
                                    I help founders turn ideas
                                </span>
                                <span className={styles.heroTitleLine}>
                                    into seamless{" "}
                                    <AuroraText
                                        colors={["#F6B2E1", "#F3F4F6", "#F6B2E1", "#F6B2E1"]}
                                        speed={1.5}
                                        className={styles.auraText}
                                    >
                                        Digital Experiences
                                    </AuroraText>
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <div className="flex flex-row items-center gap-3 max-lg:hidden">
                                <span className={styles.heroDescriptionText}>
                                    Hello, I&apos;m Melwyn Titus
                                </span>
                                <div className="w-[80px] h-[40px] rounded-[40px] flex items-center justify-center border border-white/10 relative overflow-hidden group cursor-pointer">
                                    <div className="absolute top-0 w-full h-full bg-[#d9d9d9] transform translate-y-0 duration-500 ease-in-out group-hover:-translate-y-full z-[4]"></div>
                                    <Image
                                        src="/home/hi.png"
                                        alt="Welcome Icon"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 origin-[70%_70%] animate-wave z-[5]"
                                    />
                                </div>
                                <span className={styles.heroDescriptionText}>
                                    a Full stack Developer
                                </span>
                            </div>

                            {/* Hero Buttons */}
                            <div className="flex items-center gap-10 max-lg:flex-col-reverse max-lg:gap-7">
                                <button className="flex justify-center items-center border border-[#0c0811] shadow-[4px_4px_0_0_#1a85ff] rounded px-8 py-3 bg-white text-[#08080a] text-lg font-medium hover:scale-[1.02] active:scale-[0.99] active:shadow-none transition-all duration-75">
                                    Let’s Connect
                                </button>
                                <div className="flex flex-row items-center gap-2">
                                    <button
                                        className="flex items-center justify-center hover:scale-[1.02] active:scale-[0.99] transition-transform"
                                        onClick={handleCopyEmail}
                                        title={isCopied ? "Copied!" : "Copy email to clipboard"}
                                    >
                                        <CopyIcon className="w-6 h-6" />
                                    </button>
                                    <span className="text-[#a1a1aa] text-lg w-[196px]">
                                        {isCopied ? "Copied!" : email}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className={styles.scrollIndicator}>
                    Scroll to animate
                 </div>
            </div>
        </div>
    );
};

export default FrameHeroSection;
