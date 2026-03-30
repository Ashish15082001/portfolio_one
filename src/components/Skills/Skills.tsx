"use client";

import { motion, type Variants } from "motion/react";
import styles from "./Skills.module.css";

const SKILL_ROWS = [
  {
    skill: "HTML5",
    experience: "4 years",
  },
  {
    skill: "CSS3",
    experience: "4 years",
  },
  {
    skill: "Javascript",
    experience: "4 years",
  },
  {
    skill: "TypeScript",
    experience: "3 years",
  },
  {
    skill: "React",
    experience: "4 years",
  },
  {
    skill: "NextJS",
    experience: "2 years",
  },

  {
    skill: "NodeJs",
    experience: "1 year",
  },
  {
    skill: "ExpressJS",
    experience: "1 year",
  },
  {
    skill: "Product Design",
    experience: "1 year",
  },

  {
    skill: "Web Development",
    experience: "4 years",
  },
  {
    skill: "Android Development",
    experience: "3 years",
  },
  {
    skill: "IOS Development",
    experience: "1 year",
  },
  {
    skill: "Guitar",
    experience: "1 year",
  },
  {
    skill: "Cooking",
    experience: "1 year",
  },
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

function SkillTag({
  skill,
  experience,
}: {
  skill: string;
  experience: string;
}) {
  const rotation = getRotationForLabel(skill);
  return (
    <motion.div
      className={styles.tag}
      variants={tagVariants}
      style={{ rotate: rotation }}
    >
      <span className={styles.tagText}>{skill}</span>
      <span className={styles.experienceText}>{experience}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.section
      className={styles.skillsSection}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      variants={containerVariants}
    >
      <h2 className={`${styles.heading} title`}>Skills</h2>
      <div className={styles.tagGrid}>
        {SKILL_ROWS.map((skill) => (
          <SkillTag
            key={skill.skill}
            skill={skill.skill}
            experience={skill.experience}
          />
        ))}
      </div>
      <div className={styles.squiggleWrapper}>
        <img src={SQUIGGLE} alt="" className={styles.squiggle} />
      </div>
    </motion.section>
  );
}
