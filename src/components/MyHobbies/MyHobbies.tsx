"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import YoutubeFrame from "../YoutubeFrame/YoutubeFrame";
import styles from "./MyHobbies.module.css";
import blender from "@/images/blender.png";
import cycling from "@/images/cycling.png";
import twinkle from "@/animations/twinkle.json";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import curvedArrow from "@/icons/curved-bottom-left-arrow.svg";

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

const HOBBIES: StepProps[] = [
  {
    title: "Blender",
    subtitle: "during covid",
    description: [
      "I had interesting game development and i got to know that we need 3d models likes characters and other assets.",
      "So, I decided to learn this using blender. With the help of YouTube, I learned basics in one week..",
    ],
    highlights: [
      {
        text: "I discontinued learning blender as rendering single image took more than 20 minutes!",
      },
    ],
    image: <Image src={blender} alt="Blender 3D renders" />,
    isReversed: false,
    theme: "nordic",
  },
  {
    title: "Cycling",
    subtitle: "50km per week",
    description: [
      "I has dream from childhood of having a gear cycle. I gifted myself a cycle and started cycling.",
      "I think this is good for health to go out cycling at least 3 ties a week.",
      "Longest i did is 65km, Nepal!",
    ],
    highlights: [
      { text: "I do servicing of my cycle own my own once a week." },
      { text: "I also do ride at night. Saw snakes on road couple of time!" },
    ],
    // <YoutubeFrame videoId="x3oOkC0JTcA" caption="50+ km" rotate={-2} />,
    image: <Image src={cycling} alt="Cycling" />,
    isReversed: true,
    theme: "nordic",
    links: [
      {
        text: "Strava Profile",
        url: "https://www.strava.com/athletes/142738329",
      },
    ],
  },
  {
    title: "Guitar",
    subtitle: "want to be professional",
    description: [
      "One day i went to my cousin brother's house. There i saw a guitar gifted to my cousin sister.",
      "I tried playing it and found extremely difficult. That day i decided to ave my own guitar and start learning.",
      "First i bought cheap guitar to check if i can play. I gifted myself new little expensive guitar last year on my birthday. I have reached intermediate level now.",
    ],
    highlights: [
      { text: "Next will be either piano or violin!" },
      { text: "I will start singing too." },
    ],
    image: (
      <YoutubeFrame videoId="JDy1CZ-9yEA" caption="Guitar Journey" rotate={2} />
    ),
    isReversed: false,
    theme: "nordic",
    links: [
      {
        text: "Guitar Link",
        url: "https://www.johnsmusic.in/products/kepma-edc-e-semi-acoustic-guitar-natural",
      },
    ],
  },
];

export default function MyHobbies() {
  return (
    <section className={styles.myHobbiesSection}>
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
          <h2 className={`${styles.heading} title`}>My Hobbies</h2>
          <LottieAnimation animationData={twinkle} className={styles.twinkle} />
        </motion.div>

        {/* description */}
        <div className={styles.descriptionContainer}>
          <motion.p
            className={`quote-text ${styles.leftDescription}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            I HAVE SOME INTERESTS OTHER THAN CODING LIKE LEARNING HOW MODELS ARE
            MADE USING BLENDER, LEARNING MUSIC THEORY, PLAYING GUITAR, CYCLING,
            PLAYING VIDEO GAMES ETC.
          </motion.p>

          <Image
            src={curvedArrow}
            alt="Curved Bottom Left Arrow"
            className={styles.curvedArrow}
          />
        </div>
      </section>

      {HOBBIES.map((hobby, i) => (
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
    </section>
  );
}
