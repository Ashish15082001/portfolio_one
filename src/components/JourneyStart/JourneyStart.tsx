import Step, { StepProps } from "../step/Step";
import styles from "./JourneyStart.module.css";
import Image from "next/image";
import Day1Image from "@/images/day-1.png";

const day1Step: StepProps = {
  title: "Day 1",
  description: [
    "I was born in Uttarakhand. I was first child of my parents and first grand child of my grand parents.",
    "My mother says i was very quiet and rarely cried. At age of 3, i joined school.",
  ],
  image: <Image src={Day1Image} alt="Day 1" className={styles.stepImage} />,
  isReversed: true,
  theme: "sky",
};

export default function JourneyStart() {
  return (
    <section className={styles.journeyStartSection}>
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
