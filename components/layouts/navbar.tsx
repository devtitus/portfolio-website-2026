"use client";
import React, { useState } from "react";
import styles from "@/styles/layouts/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import CommandMenu from "@/components/layouts/command-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

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

  // Determine active page based on pathname
  const getActivePage = () => {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/projects") return "projects";
    if (pathname === "/contact") return "contact";
    return "home";
  };

  const activePage = getActivePage();

  return (
    <>
      <header className={styles.navbarContainer}>
        <div className={styles.mobileContainer}>
          <Link href="/">
            <Image
              src={"/navbar/logo.png"}
              className={styles.logo}
              width={48}
              height={48}
              alt="Logo"
            />
          </Link>
          <nav
            className={styles.navItemsContainer}
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              <li
                className={
                  activePage === "home" ? styles.navItemActive : styles.navItem
                }
              >
                <Link
                  href="/"
                  aria-current={activePage === "home" ? "page" : undefined}
                  className={styles.navText}
                >
                  Home
                </Link>
              </li>
              <li
                className={
                  activePage === "about" ? styles.navItemActive : styles.navItem
                }
              >
                <Link
                  href="/about"
                  aria-current={activePage === "about" ? "page" : undefined}
                  className={styles.navText}
                >
                  About
                </Link>
              </li>
              <li
                className={
                  activePage === "projects"
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <Link
                  href="/projects"
                  aria-current={activePage === "projects" ? "page" : undefined}
                  className={styles.navText}
                >
                  Projects
                </Link>
              </li>
              <li className={`${styles.navItem} ${styles.navItemDisabled}`}>
                <Link
                  href="/blog"
                  onClick={(e) => e.preventDefault()}
                  className={`${styles.navText} ${styles.navTextDisabled}`}
                  aria-disabled="true"
                >
                  Blog
                </Link>
              </li>
              <li
                className={
                  activePage === "contact"
                    ? `${styles.navItemContact} ${styles.navItemActive}`
                    : styles.navItemContact
                }
              >
                <div aria-hidden="true" className={styles.navItemBorder} />
                <Link
                  href="/contact"
                  aria-current={activePage === "contact" ? "page" : undefined}
                  className={styles.navText}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button
              className={styles.commandIconWrapper}
              aria-label="Command menu (⌘K)"
              onClick={handleCommandMenuClick}
            >
              <Image
                src={"/navbar/command.svg"}
                width={24}
                height={24}
                alt="Command menu"
                className={styles.commandIcon}
              />
            </button>
            <ModeToggle />
          </div>
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
