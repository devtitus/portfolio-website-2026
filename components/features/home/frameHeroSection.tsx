"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/features/home/frameHero.module.css";
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
         <div ref={sectionRef} className={styles.frameHeroSection} style={{ height: "500vh" }}>
            <div className={styles.stickyContainer}>
                <canvas ref={canvasRef} className={styles.canvas} />
                <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                        <div className="flex flex-col items-start gap-12 z-10 relative pl-4 md:pl-20 w-full max-w-[1920px] mx-auto"> 
                            {/* Hero Heading */}
                            <h1 className={styles.heroTitle}>
                                <span className={styles.heroTitleLine}>
                                    I help founders turn ideas{" "}
                                </span>
                                <span className={styles.heroTitleLine}>
                                    into seamless{" "}
                                    <AuroraText
                                        colors={["#0057E0", "#F3F4F6", "#0057E0", "#0057E0"]}
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
                                <span className={styles.heroDescriptionText}>
                                    a Full stack Developer
                                </span>
                            </div>

                            {/* Hero Buttons */}
                            <div className="flex items-center gap-10 max-lg:flex-col-reverse max-lg:gap-7">
                                <button className="group relative flex justify-center items-center px-8 py-4 bg-white text-[#08080a] text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_1px_rgba(0,87,224,0.3),0_8px_24px_rgba(0,87,224,0.2)] hover:shadow-[0_0_0_1px_rgba(0,87,224,0.5),0_12px_32px_rgba(0,87,224,0.3)]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0057E0]/10 via-transparent to-[#0057E0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 tracking-wide">Let's Connect</span>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0057E0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </button>
                                <div className="flex flex-row items-center gap-3 group">
                                    <button
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
                                        onClick={handleCopyEmail}
                                        title={isCopied ? "Copied!" : "Copy email to clipboard"}
                                    >
                                        <CopyIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                                    </button>
                                    <span className="text-white/70 text-base font-medium tracking-wide w-[196px] group-hover:text-white/90 transition-colors">
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
