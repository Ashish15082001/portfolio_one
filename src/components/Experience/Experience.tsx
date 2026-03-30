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
    subtitle: "September 2022 - Present",
    description: [
      "I joined Smilebots as a Junior Frontend Developer and started working on a product called Netpractice, which was still in its early stages at the time.",
      "I researched whether to use React Native or Capacitor and also contributed to initial UI components using Figma.",
      "Today, the app has grown to 250K+ downloads. Our goal is to help students practice effectively for any exam using our Neo AI Coach.",
      "Users can also play live matches with their friends, making learning more interactive.",
      "I designed and developed the core frontend architecture for most of the app’s features.",
    ],
    highlights: [
      {
        text: "Contributed from the very early stage of the product to scaling it to 250K+ users.",
      },
    ],
    image: <Image src={appShowcase} alt="App Showcase" />,
    isReversed: false,
    theme: "sunset",
    links: [
      {
        text: "Developer Website",
        url: "https://netpractice.app/",
      },
    ],
  },
];

export default function MyExperience() {
  return (
    <section className={styles.experienceSection}>
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
          <h2 className={`${styles.heading} title`}>Experience</h2>
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
            I landed my first job as a Junior Frontend Developer at Smilebots!
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
          links={hobby.links}
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
