"use client";
import { motion } from "motion/react";
import Step, { StepProps } from "../step/Step";
import styles from "./MyJourney.module.css";
import Image from "next/image";
import Day1Image from "@/images/day-1.png";
import twinkle from "@/animations/twinkle.json";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import twoPathDownArrow from "@/icons/two-path-down-arrow.svg";

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

const day1Step: StepProps = {
  title: "Day 1",
  description: [
    "I was born in Uttarakhand. I am the first child of my parents and the first grandchild in my family.",
    "My mother says I was very quiet and rarely cried. I started school at the age of 3.",
  ],
  image: <Image src={Day1Image} alt="Day 1" className={styles.stepImage} />,
  isReversed: true,
  theme: "sky",
};

export default function MyJourney() {
  return (
    <section className={styles.myJourneySection}>
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
          <h2 className={`${styles.heading} title`}>My Journey</h2>

          <LottieAnimation animationData={twinkle} className={styles.twinkle} />
        </motion.div>
        {/* description */}
        <div className={styles.descriptionContainer}>
          {/* left description */}
          <motion.p
            className={`quote-text ${styles.leftDescription}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            I started programming when I was 15, just going with the flow—never
            imagining that AI might one day replace my job!
          </motion.p>

          <Image
            src={twoPathDownArrow}
            alt="Two Path Down Arrow"
            className={styles.twoPathDownArrow}
          />

          {/* right description */}
          <motion.p
            className={`caption ${styles.rightDescription}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            I later found out that choosing the science stream with computers
            would be good for my future. At that time, I didn’t really know what
            I wanted to become. After spending two years in it, I decided to
            continue. In college, I searched on Google for the highest-paying
            and most secure developer jobs—web development was in the top five!
            So I started with frontend development and loved how instantly
            visible the results are. Eventually, I also learned backend because
            I wanted to build full-stack applications.
          </motion.p>
        </div>
      </section>

      <Step
        title={day1Step.title}
        description={day1Step.description}
        image={day1Step.image}
        isReversed={day1Step.isReversed}
        theme={day1Step.theme}
      />
    </section>
  );
}
