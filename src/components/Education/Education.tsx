import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import styles from "./Education.module.css";
import nurseryToClass3Image from "@/images/nursery-to-class3.png";
import clas4To10 from "@/images/class-4-10.png";
import class11to12 from "@/images/class-11-12.png";
import unviversity from "@/images/unviversity.png";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import curvedDownArrowSky from "@/icons/curved-down-arrow-sky.svg";

interface FactBadge {
  text: string;
}

const EDUCATION: StepProps[] = [
  {
    title: "Nursery to Class 3",
    subtitle: "Kendriya Vidyalaya (NHPC Banabasa)",
    description: [
      "This is where I started studying. I have lots of memories there.",
      "I am still in contact with some friends as they live in the same place as me. Unfortunately, the majority of my friends are out of contact and many do not remember me. Even my best friend said he does not remember me!",
    ],
    highlights: [
      { text: "I was very good in drawing." },
      {
        text: "I was also very good at studies. Because of this I did not study in LKG. I directly went to UKG!",
      },
    ],
    image: <Image src={nurseryToClass3Image} alt="Nursery to Class 3" />,
    isReversed: false,
    theme: "sky",
  },
  {
    title: "Class 4 to 10",
    subtitle: "St Francis Senior Secondary School (Tanakpur)",
    description: [
      "This is where both of my chachu (my father's brothers) studied.",
      "I do not have much to say about this. Here I became an average student.",
      "I had some not-so-great teachers.",
    ],
    highlights: [
      { text: "I was known to be a very funny guy here." },
      { text: "I was famous as a good artist!" },
    ],
    image: <Image src={clas4To10} alt="Class 4 to 10" />,
    isReversed: true,
    theme: "sky",
  },
  {
    title: "Class 11 to 12",
    subtitle: "Nosegay Public School (Khatima)",
    description: [
      "Here my personality was completely different. I was known to be sincere and rarely talked.",
      "Even teachers had blind faith in me. They would never believe that I would do anything bad.",
      "I was once absent and the physics teacher did not teach anyone that day. He said that he teaches only for me as others used to go to him for tuition.",
      "I scored the highest in physics — 95% in 12th board exams.",
    ],
    highlights: [
      { text: "I was loved by all here." },
      {
        text: "I would like to go back to the past just to experience this again.",
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
      "After 12th i did google search and used local newspaper for choosing right college.",
      "Scored 80+ in 12th board and also cleared entrance exam conducted by university securing 40% scholarship!",
      "After joining i have Nothing much to say, Totally disappointed.",
      "If i can learn something i want to for free then why university? just to burn hard earned money!. If i get a chance to go back in past i would not even join any college.",
    ],
    highlights: [
      { text: "Dropped out in 3rd  year!" },
      { text: "Best decision of my life" },
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
          <h2 className={`${styles.heading} title`}>Education</h2>
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
        />
      ))}
    </section>
  );
}
