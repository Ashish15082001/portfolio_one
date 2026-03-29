import styles from "./Step.module.css";

export interface StepProps {
  title: string;
  subtitle?: string;
  description: string;
  image: React.ReactNode;
  isReversed?: boolean;

  highlights?: { text: string }[];
  theme:
    | "suset"
    | "grape"
    | "blueberry"
    | "sky"
    | "nordic"
    | "mint"
    | "peach"
    | "bless";
}

export default function Step({
  title,
  subtitle,
  description,
  image,
  isReversed,
  highlights,
  theme,
}: StepProps) {
  console.log(`step-theme-${theme}`);
  return (
    <div
      className={` ${styles.step} ${styles[`step-theme-${theme}`]} ${isReversed ? `${styles.reversed}` : ""}
      `}
    >
      {/* image content */}
      <div className={styles.imageContent}>{image}</div>

      {/* text content */}
      <div className={styles.textContent}>
        {/* title */}
        <h2 className={`${styles.title} big-title`}>{title}</h2>
        {/* subtitle */}
        <p className={`${styles.subtitle} body-text`}>{subtitle}</p>

        {/* description */}
        <p className={`${styles.description} body-text`}>{description}</p>

        {/* highlights */}
        {highlights && (
          <div className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <p className={`caption`}>{highlight.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
