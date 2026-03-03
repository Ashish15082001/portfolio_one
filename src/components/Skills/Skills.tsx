import styles from "./Skills.module.css";

const SKILL_ROWS = [
  ["HTML & CSS", "Javascript", "Typescript", "React"],
  ["NodeJs", "ExpressJS", "Product Design", "Android Development"],
  ["Web Development", "IOS Development", "Guitar", "Cooking"],
];

// Squiggly arrow asset from Figma
const SQUIGGLE =
  "https://www.figma.com/api/mcp/asset/e19f729a-dffc-4886-aa18-5667ccda07ad";

function Tag({ label }: { label: string }) {
  return (
    <div className={styles.tag}>
      <span className={styles.tagText}>{label}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.tagGrid}>
        {SKILL_ROWS.map((row, ri) => (
          <div key={ri} className={styles.tagRow}>
            {row.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.squiggleWrapper}>
        <img src={SQUIGGLE} alt="" className={styles.squiggle} />
      </div>
    </section>
  );
}
