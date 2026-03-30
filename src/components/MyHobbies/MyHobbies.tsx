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
    subtitle: "During COVID",
    description: [
      "I became interested in game development and learned that it requires 3D models like characters and other assets.",
      "So, I decided to learn Blender. With the help of YouTube, I picked up the basics within a week.",
    ],
    highlights: [
      {
        text: "I stopped learning Blender because rendering even a single image took more than 20 minutes!",
      },
    ],
    image: <Image src={blender} alt="Blender 3D renders" />,
    isReversed: false,
    theme: "nordic",
  },
  {
    title: "Cycling",
    subtitle: "50 km per week",
    description: [
      "I had a childhood dream of owning a geared cycle. Eventually, I gifted myself one and started cycling regularly.",
      "I believe cycling is great for health—I try to go out at least three times a week.",
      "My longest ride so far is 65 km, including a ride to Nepal!",
    ],
    highlights: [
      { text: "I service my cycle on my own once a week." },
      {
        text: "I also ride at night—have spotted snakes on the road a couple of times!",
      },
    ],
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
    subtitle: "Aspiring to go professional",
    description: [
      "One day, I visited my cousin’s house and saw a guitar that had been gifted to my cousin sister.",
      "I tried playing it and found it extremely difficult. That day, I decided to get my own guitar and start learning.",
      "At first, I bought a cheap guitar to see if I could stick with it. Last year, I gifted myself a slightly more expensive one for my birthday. Now, I’ve reached an intermediate level.",
    ],
    highlights: [
      { text: "Next, I might learn piano or violin!" },
      { text: "I also plan to start singing." },
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
            I have interests beyond coding, such as learning how 3D models are
            created using Blender, studying music theory, playing the guitar,
            cycling, and playing video games.
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
