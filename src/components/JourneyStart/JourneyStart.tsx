import styles from "./JourneyStart.module.css";

export default function JourneyStart() {
  return (
    <section className={styles.section}>
      <div className={styles.titleRow}>
        <h2 className={styles.heading}>My design journey</h2>
      </div>

      <div className={styles.columns}>
        <div className={styles.leftQuote}>
          <p className={styles.quoteText}>
            I STARTED DOING PROGRAMMING WHEN I WAS 15. THEN I WENT WITH THE FLOW
            NOT KNOWING AI WILL REPLACE MY JOB!
          </p>
        </div>

        {/* Center decorative area — replace with an illustration if desired */}
        <div className={styles.centerDecor} aria-hidden="true" />

        <div className={styles.rightParagraph}>
          <p className={styles.bodyText}>
            I just came to know that taking science stream with computer will be
            good for future. I did not really know what I want to become! As I
            spent two years in this, I decided to continue. When in college, I
            did google search about most paying secure dev jobs. Web development
            was in top 5! Then started with frontend and I liked that frontend
            is visible. Although I also learned backend as I wanted to build my
            full stack app.
          </p>
        </div>
      </div>
    </section>
  );
}
