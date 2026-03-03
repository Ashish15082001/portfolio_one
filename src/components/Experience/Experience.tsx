import styles from "./Experience.module.css";

interface FootNote {
  text: string;
}

interface ExperienceData {
  company: string;
  years: string;
  description: string;
  footnotes?: FootNote[];
  teaser?: string;
  imageRight?: boolean;
}

const EXPERIENCES: ExperienceData[] = [
  {
    company: "420seeds",
    years: "2013 – 2016",
    description:
      "I enjoyed creating designs for manufacturing, like T-shirts, bags and packaging.",
    teaser: "At the same time I started a new brand with friends.",
    imageRight: false,
  },
  {
    company: "Mediastream",
    years: "2010 – 2013",
    description:
      "While I was finishing my studies, Mediastream gave me the opportunity to work in a great team, with projects for big brands. I was lucky to work with @jorlo, one of the best designers I know and he was a great mentor and best friend.",
    teaser:
      "I arrived to do my internship and stayed a couple of years as a web designer.",
    footnotes: [
      {
        text: "Mediastream is one of the most important streaming companies in LATAM.",
      },
      {
        text: "I designed digital experiences for Platzi, Claro, Canal 13, TVN & internal products.",
      },
    ],
    imageRight: true,
  },
  {
    company: "Faisandú",
    years: "2013 – 2016",
    description:
      "I left my comfort zone and saw an opportunity to start my own project. It was a really good time. It was a time of constant experimentation and a lot of work in different areas of design. I learned a lot about software development, marketing, and self-management. In collaboration with talented people we designed beautiful projects.",
    teaser: "I started my design studio with Jorlo.",
    imageRight: false,
  },
  {
    company: "Santander",
    years: "2016 – 2018",
    description:
      "I worked in digital banking for Santander creating a Design System for the bank's App and website. Coordinating with multiple teams and considering the needs across a large organisation was challenging but the end result was a huge improvement in the handoff process. The best thing was the collaborative work with my teammates, @Nicole @Osman and @Tamara.",
    teaser: "I'm obsessed with design systems.",
    footnotes: [
      {
        text: "The design system started very small but little by little it was implemented in most of the bank's digital products.",
      },
    ],
    imageRight: true,
  },
  {
    company: "Sura",
    years: "2018 – Present",
    description:
      "I joined the Digital Transformation area working in a team focused on creating an online sales system for transforming the company's current business model. I met great professionals and led a lot of strategic projects for the company together with @Claudio @Majo @Ally and @Vivi. With @Italo as frontend developer, we implemented a design system that allowed us to improve the time to market.",
    teaser: "I worked a lot on the design process.",
    imageRight: false,
  },
];

function FootNoteBox({ text }: { text: string }) {
  return (
    <div className={styles.footnoteBox}>
      <p className={styles.footnoteText}>{text}</p>
    </div>
  );
}

function ExperienceCard({ card }: { card: ExperienceData }) {
  const textContent = (
    <div className={styles.cardContent}>
      <div className={styles.cardTop}>
        <h3 className={styles.cardCompany}>{card.company}</h3>
        <p className={styles.cardYears}>{card.years}</p>
      </div>
      <p className={styles.cardDesc}>{card.description}</p>
      {card.footnotes && card.footnotes.length > 0 && (
        <div className={styles.footnoteRow}>
          {card.footnotes.map((fn, i) => (
            <FootNoteBox key={i} text={fn.text} />
          ))}
        </div>
      )}
    </div>
  );

  const imagePlaceholder = (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      {card.teaser && <p className={styles.teaserText}>{card.teaser}</p>}
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

export default function Experience() {
  return (
    <section className={styles.section}>
      {EXPERIENCES.map((card, i) => (
        <ExperienceCard key={i} card={card} />
      ))}
    </section>
  );
}
