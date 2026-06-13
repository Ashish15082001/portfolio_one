"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import styles from "./Experience.module.css";
import appShowcase from "@/images/app-showcase.png";
import matchShowcase from "@/images/match-showcase.png";
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
    title: "SmileBots",
    subtitle: "Software Engineer - Frontend · Jun 2023 – Present",
    description: [
      "Owned frontend architecture end-to-end — established coding standards, led code reviews, and mentored junior engineers, reducing production regressions and improving release stability.",
      "Engineered a real-time multiplayer quiz using WebSockets with sub-second latency, and shipped an offline-first architecture that reduced API dependency by over 50%.",
      "Built a reusable component library and design system with Storybook and MUI, and drove Core Web Vitals improvements via code splitting, lazy loading, and rendering optimisation.",
      "Implemented OWASP-aligned security practices (JWT auth, protected routes, RBAC), integrated Firebase, GA4, and Google Ads tracking, and owned a Next.js sports booking platform end-to-end.",
    ],
    highlights: [
      {
        text: "Scaled NetPractice from an early-stage product to 250K+ users on Google Play Store.",
      },
    ],
    image: <Image src={matchShowcase} alt="Match Showcase" />,
    isReversed: true,
    theme: "sunset",
    links: [
      {
        text: "Developer Website",
        url: "https://netpractice.app/",
      },
    ],
  },
  {
    title: "SmileBots",
    subtitle: "Junior Software Engineer - Frontend · Sep 2022 – May 2023",
    description: [
      "Joined at an early stage of the product and helped shape its foundations — contributed to initial UI components, researched tech stack decisions (React Native vs Capacitor), and shipped the first production builds.",
      "Built and scaled multi-platform apps (Web, PWA, Android, Desktop, iOS) using React Native, Capacitor, and Electron, reducing development and maintenance effort across platforms.",
      "Improved accessibility across responsive interfaces using semantic HTML, keyboard navigation, focus management, and WCAG-aligned frontend practices.",
    ],
    highlights: [
      {
        text: "Contributed from day one of the product — before the first public release.",
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
            4 years. 250K+ users. One product, built from the ground up.
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
