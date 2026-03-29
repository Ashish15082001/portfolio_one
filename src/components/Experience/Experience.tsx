"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import styles from "./Experience.module.css";
import appShowcase from "@/images/app-showcase.png";
import twinkle from "@/animations/twinkle.json";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import curvedBottomRightArrowSunset from "@/icons/curved-bottom-right-arrow-sunset.svg";

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

const Experience: StepProps[] = [
  {
    title: "Smilebots",
    subtitle: "September 2022 - present",
    description: [
      "I started working on a product called Netpractice which was not even started when i joined.",
      "Did research on whether to use React Native or Capacitor. Initially i also developed some ui components using Figma.",
      "Currently we have  250K+ downloads. Our goal is to make student practice using our app for any exams they are preparing using out Neo Ai Coach!",
      "Users can play lives matches with there friends too.",
      "I designed and developed core architecture of all features in a app in terms of frontend.",
    ],
    highlights: [
      {
        text: "I discontinued learning blender as rendering single image took more than 20 minutes!",
      },
    ],
    image: <Image src={appShowcase} alt="App Showcase" />,
    isReversed: false,
    theme: "sunset",
  },
];

export default function MyExperience() {
  return (
    <section className={styles.myExperienceSection}>
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
          <h2 className={`${styles.heading} title`}>My Experience</h2>
          <LottieAnimation animationData={twinkle} className={styles.twinkle} />
        </motion.div>

        {/* description */}
        <div className={styles.descriptionContainer}>
          <Image
            src={curvedBottomRightArrowSunset}
            alt="Curved Bottom Right Arrow"
            className={styles.curvedArrow}
          />

          <motion.p
            className={`quote-text ${styles.rightDescription}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            I got my first job at Smilebots as a junior frontend developer!
          </motion.p>
        </div>
      </section>

      {Experience.map((hobby, i) => (
        <Step
          key={i}
          title={hobby.title}
          subtitle={hobby.subtitle}
          description={hobby.description}
          image={hobby.image}
          highlights={hobby.highlights}
          isReversed={hobby.isReversed}
          theme={hobby.theme}
        />
      ))}

      {/* app demo video */}
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/-AIbuRV0CE0?autoplay=0&rel=0"
          title="App Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
    </section>
  );
}
