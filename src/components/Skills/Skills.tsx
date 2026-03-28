"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./Skills.module.css";

const SKILL_ROWS = [
  ["HTML & CSS", "Javascript", "TypeScript", "React", "NextJS"],
  ["NodeJs", "ExpressJS", "Product Design", "Android Development"],
  ["Web Development", "IOS Development", "Guitar", "Cooking"],
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const rowVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 20,
      mass: 0.55,
    },
  },
};

// Squiggly arrow asset from Figma
const SQUIGGLE =
  "https://www.figma.com/api/mcp/asset/e19f729a-dffc-4886-aa18-5667ccda07ad";

function getRotationForLabel(label: string) {
  // deterministic pseudo-random by text hash: [-10deg, -5deg] U [5deg, 10deg]
  let hash = 0;
  for (let i = 0; i < label.length; i += 1) {
    hash = (hash << 5) - hash + label.charCodeAt(i);
    hash |= 0;
  }

  const band = Math.abs(hash % 2); // 0 or 1
  const val = 5 + (Math.abs(hash) % 6); // 5..10
  return (band === 0 ? -1 : 1) * val;
}

function Tag({ label }: { label: string }) {
  const rotation = getRotationForLabel(label);
  return (
    <motion.div
      className={styles.tag}
      variants={tagVariants}
      style={{ rotate: rotation }}
    >
      <span className={styles.tagText}>{label}</span>
      <span className={styles.experienceText}>4 years</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
    >
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.tagGrid}>
        {SKILL_ROWS.map((row, ri) => (
          <motion.div key={ri} className={styles.tagRow} variants={rowVariants}>
            {row.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </motion.div>
        ))}
      </div>
      <div className={styles.squiggleWrapper}>
        <img src={SQUIGGLE} alt="" className={styles.squiggle} />
      </div>
    </motion.section>
  );
}
