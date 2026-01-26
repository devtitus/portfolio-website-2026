"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CommandMenu from "@/components/layouts/command-menu";

// Navigation items configuration
type NavItem = {
  label: string;
  href: string;
  id: string;
  disabled?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  { label: "Projects", href: "/projects", id: "projects" },
  { label: "Blog", href: "/blog", id: "blog", disabled: true },
  { label: "Contact", href: "/contact", id: "contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  const handleCommandMenuClick = () => {
    setIsCommandMenuOpen(true);
  };

  const handleCommandNavigation = (page: string) => {
    router.push(page === "home" ? "/" : `/${page}`);
  };

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const handleNavItemClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.disabled) {
      e.preventDefault();
      return;
    }
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 w-full z-[1000] overflow-hidden inline-flex justify-center",
          "bg-[linear-gradient(to_bottom,black_0%,#0a0a0f_50%,transparent_100%),radial-gradient(circle_at_50%_0%,rgba(0,87,224,0.12)_0%,transparent_70%)]",
          "backdrop-blur-xl backdrop-saturate-180",
          "border-b border-white/20",
          "transition-all duration-[400ms] ease-out",
          "max-lg:bg-black/90 max-lg:backdrop-blur-2xl",
        )}
      >
        {/* Top glow line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-60" />

        <div
          className={cn(
            "w-full max-w-[1400px]",
            "px-[clamp(16px,4vw,60px)] py-[clamp(10px,1vw,18px)] 2xl:px-0",
            "max-lg:px-4 max-lg:py-3",
            "flex flex-row items-center justify-between",
          )}
        >
          <Link href="/">
            <Image
              src={"/navbar/logo.png"}
              className={cn(
                "w-12 h-12 aspect-square transition-all duration-300",
                "drop-shadow-[0_2px_8px_rgba(0,87,224,0.2)]",
                "hover:scale-105 hover:drop-shadow-[0_4px_12px_rgba(0,87,224,0.4)]",
                "max-lg:w-9 max-lg:h-9",
              )}
              width={48}
              height={48}
              alt="Logo"
            />
          </Link>

          <nav
            className="flex flex-1 justify-center max-lg:hidden"
            aria-label="Main navigation"
          >
            <ul
              className={cn(
                "flex items-center gap-1 p-2 rounded-xl",
                "bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-180",
                "border border-white/10",
                "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.05)]",
                "isolate relative",
              )}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavItemClick(e, item)}
                      aria-current={active ? "page" : undefined}
                      aria-disabled={item.disabled}
                      className={cn(
                        "group flex items-center justify-center px-3 py-[6px] rounded-[8px]",
                        "relative isolate transition-all",
                        active
                          ? [
                              "bg-gradient-to-br from-brand-blue/10 to-brand-blue/10",
                              "border border-brand-blue/20 backdrop-blur-xl",
                              "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_2px_8px_rgba(0,87,224,0.2),0_0_0_1px_rgba(0,87,224,0.3)]",
                              "duration-400",
                              // Animated glow
                              "before:content-[''] before:absolute before:inset-[-1px] before:rounded-xl before:z-[-1]",
                              "before:bg-gradient-to-br before:from-brand-blue/40 before:via-transparent before:to-brand-blue/20",
                              "before:opacity-50 before:blur-[8px] before:animate-pulse-gentle-glow",
                            ]
                          : [
                              "border border-transparent cursor-pointer",
                              "duration-300",
                              "active:scale-[0.98]",
                              // Hover background
                              "before:content-[''] before:absolute before:inset-0 before:rounded-[8px]",
                              "before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-300",
                              "hover:before:opacity-100",
                            ],
                        item.disabled && "opacity-40 cursor-not-allowed",
                      )}
                    >
                      <span
                        className={cn(
                          "font-secondary font-medium text-sm leading-normal whitespace-nowrap",
                          "transition-all duration-300 tracking-[0.01em] relative z-10",
                          active
                            ? "text-white/95 font-semibold drop-shadow-[0_0_20px_rgba(0,87,224,0.3)]"
                            : "text-white/65 group-hover:text-white/90 group-hover:-translate-y-px",
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className={cn(
              "relative flex items-center justify-center p-[10px] rounded-[10px]",
              "bg-white/5 border border-white/10 backdrop-blur-[8px]",
              "cursor-pointer overflow-hidden transition-all duration-300",
              // Hover gradient overlay
              "before:content-[''] before:absolute before:inset-0",
              "before:bg-gradient-to-br before:from-brand-blue/20 before:to-transparent",
              "before:opacity-0 before:transition-opacity before:duration-300",
              "hover:bg-white/10 hover:border-brand-blue/40 hover:scale-105 hover:before:opacity-100",
              "hover:shadow-[0_4px_12px_rgba(0,87,224,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
              "active:scale-95",
              "max-lg:p-2 max-lg:rounded-lg",
            )}
            aria-label="Command menu (⌘K)"
            onClick={handleCommandMenuClick}
          >
            <Image
              src={"/navbar/command.svg"}
              width={24}
              height={24}
              alt="Command menu"
              className={cn(
                "w-5 h-5 aspect-square brightness-90 transition-[filter] duration-300 relative z-[1]",
                "hover:brightness-110",
              )}
            />
          </button>
        </div>
      </header>
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setIsCommandMenuOpen}
        onNavigate={handleCommandNavigation}
      />
    </>
  );
};

export default Navbar;
