"use client";
import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/magicui/aurora-text";
import { CopyIcon } from "@/lib/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { StarsBackground } from "@/components/ui/stars";

const PerformanceHeroSection = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = "m.works.gd@gmail.com";

    // Email Copy Handle Function
    const handleCopyEmail = useCallback(async () => {
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
    }, [email]);

    return (
        <div className="relative w-full h-svh min-h-[600px] overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <StarsBackground
                    className="w-full h-full absolute inset-0"
                    transition={{ stiffness: 15, damping: 50 }}
                    speed={120}
                    factor={0.02}
                />
                {/* Gradient Overlay for depth */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-brand-blue/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" /> */}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center pointer-events-none">
                <div className="pointer-events-auto w-full h-full flex flex-col justify-center items-center relative z-[11]">
                    <div
                        className={cn(
                            "flex flex-col items-start gap-4 z-10 relative pl-4 md:pl-[clamp(24px,4vw,60px)] 2xl:pl-0 w-full max-w-[1920px] mx-auto",
                            "max-sm:items-center max-sm:pl-0 max-sm:px-4 max-sm:gap-8 max-w-[1400px]",
                        )}
                    >
                        {/* Hero Heading */}
                        <h1
                            className={cn(
                                "flex flex-col text-white text-left font-primary",
                                "text-[clamp(20px,3.25vw,44px)] font-semibold leading-[1.4] tracking-tight",
                                "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
                                "animate-fade-in-up motion-reduce:animate-none",
                                "max-lg:text-[clamp(20px,3.25vw,44px)]",
                                "max-sm:text-[clamp(28px,6vw,32px)] max-sm:text-center",
                            )}
                        >
                            <span className="inline-block">
                                Transforming complex challenges{" "}
                            </span>
                            <span className="inline-block">
                                into elegant{" "}
                                <AuroraText
                                    colors={["#0057E0", "#F3F4F6", "#0057E0", "#0057E0"]}
                                    speed={1.5}
                                    className={cn(
                                        "font-primary font-bold capitalize",
                                        "text-[clamp(20px,3.25vw,44px)]",
                                        "max-lg:text-[clamp(20px,3.25vw,44px)]",
                                        "max-sm:text-[clamp(30px,6vw,32px)]",
                                    )}
                                >
                                    Solutions
                                </AuroraText>
                            </span>
                        </h1>

                        {/* Hero Description */}
                        <div className="flex flex-row items-center gap-3 max-sm:flex max-sm:flex-col">
                            <span
                                className={cn(
                                    "text-left font-secondary text-[clamp(16px,1.5vw,20px)] font-normal",
                                    "text-white/85 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
                                    "animate-fade-in-up motion-reduce:animate-none",
                                )}
                                style={{ animationDelay: "0.2s" }}
                            >
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
                            <span
                                className={cn(
                                    "text-left font-secondary text-[clamp(16px,1.5vw,20px)] font-normal",
                                    "text-white/85 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
                                    "animate-fade-in-up motion-reduce:animate-none",
                                )}
                                style={{ animationDelay: "0.2s" }}
                            >
                                a Full Stack Developer & Product Engineer
                            </span>
                        </div>

                        {/* Hero Buttons */}
                        <div
                            className={cn(
                                "flex items-center gap-10 mt-8",
                                "max-lg:flex-col-reverse max-lg:gap-7",
                                "max-sm:flex-col max-sm:gap-5 max-sm:w-full",
                            )}
                        >
                            <Link href="/projects" className="w-full max-sm:max-w-[280px]">
                                <button
                                    className={cn(
                                        "group relative flex justify-center items-center w-full",
                                        "px-6 py-3 bg-white text-[#08080a] text-base font-normal rounded-[8px]",
                                        "overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                                        "shadow-[0_0_0_1px_rgba(0,87,224,0.3),0_8px_24px_rgba(0,87,224,0.2)]",
                                        "hover:shadow-[0_0_0_1px_rgba(0,87,224,0.5),0_12px_32px_rgba(0,87,224,0.3)]",
                                    )}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0057E0]/10 via-transparent to-[#0057E0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 tracking-wide">
                                        Explore Projects
                                    </span>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0057E0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </button>
                            </Link>
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
        </div>
    );
};

export default PerformanceHeroSection;
