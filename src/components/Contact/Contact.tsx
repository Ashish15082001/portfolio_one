"use client";

import { motion, type Variants } from "motion/react";
import styles from "./Contact.module.css";

const EMAIL = "ashusingh15082001@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ashish-singh-4675aa192/";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

const RESUME =
  "https://drive.google.com/file/d/1bAQWF1W9JRrA0CNLDfKuU4npXatSuWPc/view?usp=sharing";

const LINKS = [
  {
    icon: "@",
    label: "Email",
    description: "Drop me an email anytime.",
    sub: EMAIL,
    href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
    external: true,
  },
  {
    icon: "in",
    label: "LinkedIn",
    description: "Let's connect on LinkedIn.",
    sub: "ashish-singh-4675aa192",
    href: LINKEDIN,
    external: true,
  },
  {
    icon: "CV",
    label: "Resume",
    description: "View or download my resume.",
    sub: "Google Drive",
    href: RESUME,
    external: true,
  },
];

export default function Contact() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <motion.div className={styles.headingBlock} variants={itemVariants}>
          <h2 className={styles.heading}>Get in touch.</h2>
          <p className={styles.subheading}>
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat.
          </p>
        </motion.div>

        <div className={styles.cardsRow}>
          {LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className={styles.iconCircle}>
                <span className={styles.iconText}>{link.icon}</span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>{link.label}</span>
                <p className={styles.cardDesc}>{link.description}</p>
                <span className={styles.cardSub}>{link.sub}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p className={styles.copyright} variants={itemVariants}>
          &copy; {new Date().getFullYear()} Ashish Singh. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
