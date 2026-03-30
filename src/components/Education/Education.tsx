import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import styles from "./Education.module.css";
import nurseryToClass3Image from "@/images/nursery-to-class3.png";
import clas4To10 from "@/images/class-4-10.png";
import class11to12 from "@/images/class-11-12.png";
import unviversity from "@/images/unviversity.png";
import curvedDownArrowSky from "@/icons/curved-down-arrow-sky.svg";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import twinkle from "@/animations/twinkle.json";

const EDUCATION: StepProps[] = [
  {
    title: "Nursery to Class 3",
    subtitle: "Kendriya Vidyalaya (NHPC Banbasa)",
    description: [
      "This is where I started my schooling, and I have lots of memories from that time.",
      "I’m still in touch with a few friends since they live near me. Unfortunately, I’ve lost contact with most of them, and many don’t even remember me now—even my best friend once said he doesn’t remember me!",
    ],
    highlights: [
      { text: "I was very good at drawing." },
      {
        text: "I was also strong in academics. Because of this, I skipped LKG and went directly to UKG!",
      },
    ],
    image: <Image src={nurseryToClass3Image} alt="Nursery to Class 3" />,
    isReversed: false,
    theme: "sky",
    links: [
      {
        text: "Music used in dance performance",
        url: "https://www.youtube.com/watch?v=9UzvpM3IwwY",
      },
    ],
  },
  {
    title: "Class 4 to 10",
    subtitle: "St. Francis Senior Secondary School (Tanakpur)",
    description: [
      "This is where both of my uncles (my father’s brothers) studied.",
      "I don’t have much to say about this phase—this is where I became an average student.",
      "I also had some not-so-great teachers.",
    ],
    highlights: [
      { text: "I was known as a very funny guy here." },
      { text: "I was also quite popular as a good artist!" },
    ],
    image: <Image src={clas4To10} alt="Class 4 to 10" />,
    isReversed: true,
    theme: "sky",
  },
  {
    title: "Class 11 to 12",
    subtitle: "Nosegay Public School (Khatima)",
    description: [
      "During this time, my personality changed a lot. I became more sincere and rarely spoke.",
      "Even teachers had complete trust in me—they would never believe I could do anything wrong.",
      "Once, when I was absent, my physics teacher didn’t teach the class. He said he teaches only for me, as others usually attended his tuition anyway.",
      "I scored the highest in physics—95% in my 12th board exams.",
    ],
    highlights: [
      { text: "I was loved by everyone here." },
      {
        text: "I sometimes wish I could go back and experience this phase again.",
      },
    ],
    image: <Image src={class11to12} alt="Class 11 to 12" />,
    isReversed: false,
    theme: "sky",
  },
  {
    title: "Bachelors in Technology (Computer Science)",
    subtitle: "Lovely Professional University (Punjab)",
    description: [
      "After 12th, I searched online and checked local newspapers to choose the right college.",
      "I scored 80+ in my 12th boards and also cleared the university’s entrance exam, securing a 40% scholarship.",
      "After joining, I honestly didn’t find it valuable—I was quite disappointed.",
      "If I can learn what I want for free, why go to a university just to spend hard-earned money? If I could go back, I wouldn’t join any college.",
    ],
    highlights: [
      { text: "Dropped out in the 3rd year!" },
      { text: "Best decision of my life." },
    ],
    image: <Image src={unviversity} alt="Bachelors in Technology" />,
    isReversed: true,
    theme: "sky",
  },
];

export default function Education() {
  return (
    <section className={styles.educationSection}>
      {/* intro */}
      <section className={styles.introSection}>
        {/* title */}
        <div className={styles.headingContainer}>
          <h2 className={`${styles.heading} title`}>Education</h2>{" "}
          <LottieAnimation animationData={twinkle} className={styles.twinkle} />
        </div>

        {/* description */}
        <div className={styles.descriptionContainer}>
          <Image
            src={curvedDownArrowSky}
            alt="Curved Down Arrow Sky"
            className={styles.curvedDownArrowSky}
          />
        </div>
      </section>

      {EDUCATION.map((card, i) => (
        <Step
          key={i}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          image={card.image}
          highlights={card.highlights}
          isReversed={card.isReversed}
          theme={card.theme}
          links={card.links}
        />
      ))}
    </section>
  );
}
