"use client";
import { motion } from "motion/react";
import Step, { StepProps } from "../step/Step";
import styles from "./PersonalProjects.module.css";
import Image from "next/image";
import reviewDestinationDemo from "@/images/review-destination-demo.png";
import twinkle from "@/animations/twinkle.json";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import twoPathDownArrowBlessFlip from "@/icons/two-path-down-arrow-bless-flip-y.svg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const viewport = { once: false, amount: 0.4 };

const personalProject: StepProps = {
  title: "Review Destination",
  subtitle: "Social Media App",
  description: [
    "I started learning Next.js this year and decided to build a full-stack web application using it.",
    "Currently, I’m developing a social media platform for travelers around the world.",
    "I have also built a custom authentication system from scratch.",
  ],
  image: (
    <Image
      src={reviewDestinationDemo}
      alt="Review Destination Demo"
      className={styles.stepImage}
    />
  ),
  isReversed: true,
  theme: "bless",
};

export default function PersonalProjects() {
  return (
    <section className={styles.PersonalProjectsSection}>
      {/* intro */}
      <section className={styles.introSection}>
        {/* title */}
        <motion.div
          className={styles.headingContainer}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className={`${styles.heading} title`}>Personal Projects</h2>

          <LottieAnimation animationData={twinkle} className={styles.twinkle} />
        </motion.div>
        {/* description */}
        <div className={styles.descriptionContainer}>
          {/* left description */}
          <motion.p
            className={`caption ${styles.leftDescription}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            I’ve built more than 10 personal projects, but only two have been
            deployed—and currently, only one is actively running.
          </motion.p>

          <Image
            src={twoPathDownArrowBlessFlip}
            alt="Two Path Down Arrow Bless Flip"
            className={styles.twoPathDownArrow}
          />

          {/* right description */}
          <motion.p
            className={`quote-text ${styles.rightDescription}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            In the era of AI, I’m actively exploring how to integrate it into my
            projects. My focus is on building AI-powered applications that can
            genuinely help people in their daily lives.
          </motion.p>
        </div>
      </section>

      <Step
        title={personalProject.title}
        subtitle={personalProject.subtitle}
        description={personalProject.description}
        image={personalProject.image}
        highlights={personalProject.highlights}
        isReversed={personalProject.isReversed}
        theme={personalProject.theme}
        links={personalProject.links}
      />
    </section>
  );
}
