"use client";

import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import styles from "@/app/styles/components/commandMenu.module.css";
import Image from "next/image";

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
            <Image
              src={"/icons/search.svg"}
              width={18}
              height={18}
              alt="Command menu"
              className={styles.searchIcon}
            />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Type a command or search..."
              className={styles.commandInput}
            />
          </div>
          <Command.List className={styles.commandList}>
            <Command.Empty className={styles.commandEmpty}>
              No results found.
            </Command.Empty>

            <Command.Group heading="Pages" className={styles.commandGroup}>
              <Command.Item
                value="home"
                onSelect={() => handleSelect("home")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>🏠</span>
                <span>Home</span>
                <span className={styles.commandShortcut}>⌘H</span>
              </Command.Item>

              <Command.Item
                value="about"
                onSelect={() => handleSelect("about")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>👨‍💻</span>
                <span>About</span>
                <span className={styles.commandShortcut}>⌘A</span>
              </Command.Item>

              <Command.Item
                value="projects"
                onSelect={() => handleSelect("projects")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>💼</span>
                <span>Projects</span>
                <span className={styles.commandShortcut}>⌘P</span>
              </Command.Item>

              <Command.Item
                value="contact"
                onSelect={() => handleSelect("contact")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>📧</span>
                <span>Contact</span>
                <span className={styles.commandShortcut}>⌘C</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Actions" className={styles.commandGroup}>
              <Command.Item
                value="copy-email"
                onSelect={() => handleSelect("copy-email")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>📋</span>
                <span>Copy Email</span>
                <span className={styles.commandShortcut}>⌘E</span>
              </Command.Item>

              <Command.Item
                value="theme-dark"
                onSelect={() => handleSelect("theme-dark")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>🌙</span>
                <span>Dark Theme</span>
                <span className={styles.commandShortcut}>⌘D</span>
              </Command.Item>

              <Command.Item
                value="theme-light"
                onSelect={() => handleSelect("theme-light")}
                className={styles.commandItem}
              >
                <span className={styles.commandIcon}>☀️</span>
                <span>Light Theme</span>
                <span className={styles.commandShortcut}>⌘L</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};

export default CommandMenu;
