"use client";
import { motion } from "motion/react";
import styles from "./Step.module.css";

export interface StepProps {
  title: string;
  subtitle?: string;
  description: string;
  image: React.ReactNode;
  isReversed?: boolean;

  highlights?: { text: string }[];
  theme:
    | "suset"
    | "grape"
    | "blueberry"
    | "sky"
    | "nordic"
    | "mint"
    | "peach"
    | "bless";
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const viewport = { once: true, amount: 0.5 };

export default function Step({
  title,
  subtitle,
  description,
  image,
  isReversed,
  highlights,
  theme,
}: StepProps) {
  return (
    <div
      className={` ${styles.step} ${styles[`step-theme-${theme}`]} ${isReversed ? `${styles.reversed}` : ""}
      `}
    >
      {/* image content */}
      <motion.div
        className={styles.imageContent}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {image}
      </motion.div>

      {/* text content */}
      <div className={styles.textContent}>
        {/* title */}
        <motion.h2
          className={`${styles.title} big-title`}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {title}
        </motion.h2>

        {/* subtitle */}
        <motion.p
          className={`${styles.subtitle} body-text`}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {subtitle}
        </motion.p>

        {/* description */}
        <motion.p
          className={`${styles.description} body-text`}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {description}
        </motion.p>

        {/* highlights */}
        {highlights && (
          <motion.div
            className={styles.highlights}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <p className="caption">{highlight.text}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
