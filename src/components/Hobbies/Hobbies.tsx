import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import YoutubeFrame from "../YoutubeFrame/YoutubeFrame";
import styles from "./Hobbies.module.css";
import blender from "@/images/blender.png";

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
    isReversed: true,
    theme: "peach",
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
    image: <YoutubeFrame videoId="x3oOkC0JTcA" caption="50+ km" rotate={-2} />,
    isReversed: false,
    theme: "mint",
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
    isReversed: true,
    theme: "grape",
  },
];

export default function Hobbies() {
  return (
    <section className={styles.hobbiesSection}>
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
        />
      ))}
    </section>
  );
}
