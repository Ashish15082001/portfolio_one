import styles from "./Step.module.css";

export interface StepProps {
  title: string;
  subtitle: string;
  description: string;
  image: React.ReactNode;
  isReversed?: boolean;

  highlights?: { text: string }[];
}

export default function Step({
  title,
  subtitle,
  description,
  image,
  isReversed,
  highlights,
}: StepProps) {
  return (
    <div className={styles.step + (isReversed ? ` ${styles.reversed}` : "")}>
      {/* image content */}
      <div className={styles.imageContent}>{image}</div>

      {/* text content */}
      <div className={styles.textContent}>
        <h2 className={`${styles.title} big-title`}>{title}</h2>
        <p className={`${styles.subtitle} body-text`}>{subtitle}</p>
        <p className={`${styles.description} body-text`}>{description}</p>

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
