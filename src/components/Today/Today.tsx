"use client";
import Step from "../step/Step";
import styles from "./Today.module.css";
import Image from "next/image";
import TodayImage from "@/images/today.png";
import { SpringAnimation } from "../SpringAnimation/SpringAnimation";

export default function Today() {
  return (
    <section className={styles.todaySection}>
      <Step
        title="Today"
        description={[
          "I’m still working at the same company as a Frontend Developer.",
          "Currently, I’m focusing on Web Security, Optimization, System Design, and Animations.",
          "I’m also continuing to learn music, as I want to become a professional in this field. I just need to make one hit song—then life is set! I’ll retire and start farming. 😄",
        ]}
        image={<Image src={TodayImage} alt="Today" />}
        isReversed={true}
        theme="peach"
      />

      <div className={styles.springAnimationContainer}>
        <SpringAnimation theme="peach" />
      </div>
    </section>
  );
}
