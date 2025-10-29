"use client";

import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import styles from "@/app/styles/components/commandMenu.module.css";
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
} from "@/app/utils/icons";

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
}

const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  setIsOpen,
  onNavigate,
}) => {
  const [search, setSearch] = useState("");

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest(`.${styles.commandDialogContent}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleSelect = (value: string) => {
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
        // Add theme switching logic here
        break;
      case "theme-light":
        // Add theme switching logic here
        break;
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.commandDialogOverlay}>
      <div className={styles.commandDialogContent}>
        <Command className={styles.command}>
          <div className={styles.commandInputContainer}>
            <SearchIcon className={styles.searchIcon} />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Type a command or search..."
              className={styles.commandInput}
            />
            <button
              className={styles.escKeyButton}
              onClick={() => setIsOpen(false)}
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
          {/* Add this footer section after Command.List */}
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
};

export default CommandMenu;
