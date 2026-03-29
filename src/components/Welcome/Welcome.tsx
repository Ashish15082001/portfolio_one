import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import { SpringAnimation } from "../SpringAnimation/SpringAnimation";
import styles from "./Welcome.module.css";
import avatarAnimation from "@/animations/avatarAnimation.json";

export default function Welcome() {
  return (
    <section className={styles.section}>
      <div className={styles.avatarContainer}>
        <LottieAnimation animationData={avatarAnimation} size={50} />
      </div>

      <p className={styles.headline}>Hi, I'm Ashish.</p>

      <div className={styles.springAnimationContainer}>
        <SpringAnimation />
      </div>
    </section>
  );
}
