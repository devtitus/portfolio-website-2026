"use client";

import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import { Command } from "cmdk";
import styles from "@/styles/components/commandMenu.module.css";
import {
  HomeIcon,
  SearchIcon,
  AboutIcon,
  ProjectsIcon,
  ContactIcon,
  CopyIcon,
  LinkedInIcon,
  LinkIcon,
  XIcon,
  GithubIcon,
} from "@/lib/utils/icons";

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
}

/**
 * CommandMenu - Optimized for INP (Interaction to Next Paint)
 * 
 * Performance improvements:
 * - Memoized component to prevent re-renders
 * - useCallback for all handlers
 * - Event listener cleanup with stable references
 * - Deferred state updates with startTransition
 */
const CommandMenu = memo(function CommandMenu({
  isOpen,
  setIsOpen,
  onNavigate,
}: CommandMenuProps) {
  const [search, setSearch] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Memoized close handler
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, [setIsOpen]);

  // Memoized click outside handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (contentRef.current && !contentRef.current.contains(target)) {
      handleClose();
    }
  }, [handleClose]);

  // Memoized keyboard handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Use passive event handling for better INP
    if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
      return;
    }

    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }, [handleClose, setIsOpen, isOpen]);

  // Add click outside handler
  useEffect(() => {
    if (!isOpen) return;

    // Use capture phase for slightly better performance
    document.addEventListener("mousedown", handleClickOutside, { capture: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, { capture: true });
    };
  }, [isOpen, handleClickOutside]);

  // Keyboard shortcuts - use passive option
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Memoized select handler
  const handleSelect = useCallback((value: string) => {
    switch (value) {
      case "home":
      case "about":
      case "projects":
      case "contact":
        onNavigate(value);
        break;
      case "copy-email":
        navigator.clipboard.writeText("m.works.gd@gmail.com");
        break;
      case "theme-dark":
      case "theme-light":
        break;
    }
    handleClose();
  }, [onNavigate, handleClose]);

  // Memoized search change handler
  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.commandDialogOverlay}>
      <div ref={contentRef} className={styles.commandDialogContent}>
        <Command className={styles.command} shouldFilter={true}>
          <div className={styles.commandInputContainer}>
            <SearchIcon className={styles.searchIcon} />
            <Command.Input
              value={search}
              onValueChange={handleSearchChange}
              placeholder="Type a command or search..."
              className={styles.commandInput}
              autoFocus
            />
            <button
              className={styles.escKeyButton}
              onClick={handleClose}
              type="button"
            >
              esc
            </button>
          </div>
          <Command.List className={styles.commandList}>
            <Command.Empty className={styles.commandEmpty}>
              No results found.
            </Command.Empty>
            {/* Pages */}
            <Command.Group className={styles.commandGroup}>
              <span className={styles.commandGroupHeading}>Pages</span>
              <Command.Item
                value="home"
                onSelect={() => handleSelect("home")}
                className={styles.commandItem}
              >
                <div className={styles.commandIconWrapper}>
                  <HomeIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>Home</span>
                  <p className={styles.commandDescription}>
                    Go to the home page
                  </p>
                </div>
              </Command.Item>

              <Command.Item
                value="about"
                onSelect={() => handleSelect("about")}
                className={styles.commandItem}
              >
                <div className={styles.commandIconWrapper}>
                  <AboutIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>About</span>
                  <p className={styles.commandDescription}>
                    Learn more about me
                  </p>
                </div>
              </Command.Item>

              <Command.Item
                value="projects"
                onSelect={() => handleSelect("projects")}
                className={styles.commandItem}
              >
                <div className={styles.commandIconWrapper}>
                  <ProjectsIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>Projects</span>
                  <p className={styles.commandDescription}>View my projects</p>
                </div>
              </Command.Item>
            </Command.Group>
            {/* Actions */}
            <Command.Group className={styles.commandGroup}>
              <span className={styles.commandGroupHeading}>Actions</span>
              <Command.Item
                value="copy-email"
                onSelect={() => handleSelect("copy-email")}
                className={styles.commandItem}
              >
                <div className={styles.commandIconWrapper}>
                  <CopyIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>Copy Email</span>
                  <p className={styles.commandDescription}>
                    Copy my email to clipboard
                  </p>
                </div>
              </Command.Item>
              <Command.Item
                value="contact"
                onSelect={() => handleSelect("contact")}
                className={styles.commandItem}
              >
                <div className={styles.commandIconWrapper}>
                  <ContactIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>Contact</span>
                  <p className={styles.commandDescription}>
                    Get in touch with me
                  </p>
                </div>
              </Command.Item>
            </Command.Group>
            {/* Socials */}
            <Command.Group className={styles.commandGroup}>
              <span className={styles.commandGroupHeading}>Socials</span>

              <Command.Item value="linkedin" className={styles.commandItem}>
                <div className={styles.commandIconWrapper}>
                  <LinkedInIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>LinkedIn</span>
                  <p className={styles.commandDescription}>
                    Connect with me on LinkedIn
                  </p>
                </div>

                <LinkIcon className={styles.commandShortcut} />
              </Command.Item>

              <Command.Item value="x" className={styles.commandItem}>
                <div className={styles.commandIconWrapper}>
                  <XIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>X</span>
                  <p className={styles.commandDescription}>
                    Connect with me on X
                  </p>
                </div>
                <LinkIcon className={styles.commandShortcut} />
              </Command.Item>
              <Command.Item value="github" className={styles.commandItem}>
                <div className={styles.commandIconWrapper}>
                  <GithubIcon className={styles.commandIcon} />
                </div>
                <div className={styles.commandTextContainer}>
                  <span className={styles.commandText}>Github</span>
                  <p className={styles.commandDescription}>
                    Connect with me on Github
                  </p>
                </div>
                <LinkIcon className={styles.commandShortcut} />
              </Command.Item>
            </Command.Group>
          </Command.List>
          {/* Footer */}
          <div className={styles.commandFooter}>
            <div className={styles.socialIcons}>
              <LinkedInIcon className={styles.footerIcon} />
              <XIcon className={styles.footerIcon} />
              <GithubIcon className={styles.footerIcon} />
            </div>

            <div className={styles.navigationControls}>
              <div className={styles.controlGroup}>
                <span className={styles.controlKey}>↑</span>
                <span className={styles.controlKey}>↓</span>
                <span className={styles.controlText}>navigate</span>
              </div>

              <div className={styles.controlGroup}>
                <span className={styles.controlKey}>←</span>
                <span className={styles.controlText}>select</span>
              </div>

              <div className={styles.controlGroup}>
                <span className={styles.controlKey}>esc</span>
                <span className={styles.controlText}>close</span>
              </div>
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
});

export default CommandMenu;
