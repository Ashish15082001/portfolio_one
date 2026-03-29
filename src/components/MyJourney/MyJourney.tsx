import Step, { StepProps } from "../step/Step";
import styles from "./MyJourney.module.css";
import Image from "next/image";
import Day1Image from "@/images/day-1.png";
import twinkle from "@/animations/twinkle.json";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import twoPathDownArrow from "@/icons/two-path-down-arrow.svg";

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

export default function MyJourney() {
  return (
    <section className={styles.myJourneySection}>
      {/* intro */}
      <section className={styles.introSection}>
        {/* title */}
        <div className={styles.headingContainer}>
          <h2 className={`${styles.heading} title`}>My Journey</h2>

          <LottieAnimation animationData={twinkle} className={styles.twinkle} />
        </div>

        {/* description */}
        <div className={styles.descriptionContainer}>
          {/* left description */}
          <p className={`quote-text ${styles.leftDescription}`}>
            I STARTED DOING PROGRAMMING WHEN I WAS 15. THEN I WENT WITH THE FLOW
            NOT KNOWING AI WILL REPLACE MY JOB!
          </p>

          <Image
            src={twoPathDownArrow}
            alt="Two Path Down Arrow"
            className={styles.twoPathDownArrow}
          />

          {/* right description */}
          <p className={`caption ${styles.rightDescription}`}>
            I just came to know that taking science stream with computer will be
            good for future. I did not really know what i want to become! As i
            spent two years in this, I decided to continue. When in college, I
            did google search about most paying secure dev jobs. Web development
            was in top 5! Then started with frontend and i liked that frontend
            is visible. Although i also learned backend as i wanted to build my
            full stack app.
          </p>
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
