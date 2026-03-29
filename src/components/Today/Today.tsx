"use client";
import Step from "../step/Step";
import styles from "./Today.module.css";
import Image from "next/image";
import TodayImage from "@/images/today.png";

export default function Today() {
  return (
    <section className={styles.todaySection}>
      <Step
        title="Today"
        description={[
          "I am still working for same company as a Frontend Developer.",
          "Started focusing on Web Security, Optimization, System Design and Animations.",
          "I will keep learning music as i want become professional in this field. I just need to make one hit song and life set. I will retire and start farming.",
        ]}
        image={<Image src={TodayImage} alt="Today" />}
        isReversed={true}
        theme="mint"
      />
    </section>
  );
}
