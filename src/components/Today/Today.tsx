import styles from "./Today.module.css";

export default function Today() {
  return (
    <section className={styles.section}>
      {/* English skills banner */}
      <div className={styles.banner}>
        <p className={styles.bannerText}>
          I&apos;m improving my English skills ✨
        </p>
      </div>

      {/* Today / Goals */}
      <div className={styles.todayGrid}>
        <div className={styles.todayLeft}>
          <h2 className={styles.todayHeading}>Today</h2>
          <p className={styles.todayBody}>
            I want to lead UX projects remotely and move to the south of Chile
            with my girlfriend Mari and our kittens.
          </p>
        </div>
        <div className={styles.todayRight} aria-hidden="true">
          {/* Decorative map illustration placeholder */}
          <div className={styles.mapDecor} />
        </div>
      </div>
    </section>
  );
}
