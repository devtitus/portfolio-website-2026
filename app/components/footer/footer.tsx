import React from "react";
import styles from "@/app/styles/footer/footer.module.css";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterProps {
  // Add any props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <Image
              src={"/navbar/logo.png"}
              width={64}
              height={64}
              alt="Logo"
              className={styles.footerLogoImage}
            />
          </div>
          <p className={styles.footerDescription}>
            I&apos;m Melwyn - a full-stack developer, freelancer & problem
            solver. Thanks for checking out my site!
          </p>
          <p className={styles.footerCopyright}>© 2025 Melwyn Titus</p>
        </div>

        <div className={styles.footerColumns}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>General</h3>
            <nav className={styles.footerNav}>
              <Link href="/" className={styles.footerLink}>
                Home
              </Link>
              <Link href="/about" className={styles.footerLink}>
                About
              </Link>
              <Link href="/projects" className={styles.footerLink}>
                Projects
              </Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>More</h3>
            <nav className={styles.footerNav}>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
              <Link href="/links" className={styles.footerLink}>
                Links
              </Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Social</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <span className={styles.socialText}>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Github"
              >
                <span className={styles.socialText}>Github</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <span className={styles.socialText}>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
