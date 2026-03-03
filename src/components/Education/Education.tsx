import styles from "./Education.module.css";

interface FactBadge {
  text: string;
}

interface EducationCardData {
  period: string;
  school: string;
  description: string;
  facts: FactBadge[];
  imageRight?: boolean;
}

const EDUCATION: EducationCardData[] = [
  {
    period: "Nursery to Class 3",
    school: "Kendriya Vidyalaya (NHPC Banabasa)",
    description:
      "This is where I started studying. I have lots of memories there. I am still in contact with some friends as they live in same place as me. Unfortunately, majority of friends are out of contact and many do not remember me. Even my best friend said he does not remember me!",
    facts: [
      { text: "I was very good in drawing." },
      {
        text: "I was also very good in studies. Because of this I did not study in LGK. I directly went to UKG!",
      },
    ],
    imageRight: false,
  },
  {
    period: "Class 4 to 10",
    school: "St Francis Senior Secondary School (Tanakpur)",
    description:
      "This is where both of my chachu (my father's brothers) studied. I do not have much to say about this. Here I became an average student. Had some of the worst teachers.",
    facts: [
      { text: "I was known to be very funny guy here." },
      { text: "I was famous as a good artist!" },
    ],
    imageRight: true,
  },
  {
    period: "Class 11 to 12",
    school: "Nosegay Public School (Khatima)",
    description:
      "Here my personality was completely different. I was known to be sincere and rarely talked. Even teachers had blind faith on me. They would never believe that I would do anything bad. I was once absent and physics teacher did not teach anyone that day. He said that he teaches only for me as others used to go to him for tuition. I scored highest in physics — 95% in 12th boards exam.",
    facts: [
      { text: "I was loved by all here." },
      {
        text: "I would like to go back to past just to experience this again.",
      },
    ],
    imageRight: false,
  },
];

function FactBox({ text }: { text: string }) {
  return (
    <div className={styles.factBox}>
      <p className={styles.factText}>{text}</p>
    </div>
  );
}

function EducationCard({ card }: { card: EducationCardData }) {
  const textContent = (
    <div className={styles.cardContent}>
      <div className={styles.cardTop}>
        <h3 className={styles.cardPeriod}>{card.period}</h3>
        <p className={styles.cardSchool}>{card.school}</p>
      </div>
      <p className={styles.cardDesc}>{card.description}</p>
      <div className={styles.factsRow}>
        {card.facts.map((f, i) => (
          <FactBox key={i} text={f.text} />
        ))}
      </div>
    </div>
  );

  const imagePlaceholder = (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      <div className={styles.imageInner} />
    </div>
  );

  return (
    <div className={`${styles.card} ${card.imageRight ? styles.reversed : ""}`}>
      {card.imageRight ? (
        <>
          {textContent}
          {imagePlaceholder}
        </>
      ) : (
        <>
          {imagePlaceholder}
          {textContent}
        </>
      )}
    </div>
  );
}

export default function Education() {
  return (
    <section className={styles.section}>
      {EDUCATION.map((card, i) => (
        <EducationCard key={i} card={card} />
      ))}
    </section>
  );
}
