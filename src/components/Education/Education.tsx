import Image from "next/image";
import Step, { StepProps } from "../step/Step";
import styles from "./Education.module.css";
import nurseryToClass3Image from "@/images/nursery-to-class3.png";
import clas4To10 from "@/images/class-4-10.png";
import class11to12 from "@/images/class-11-12.png";

interface FactBadge {
  text: string;
}

const EDUCATION: StepProps[] = [
  {
    title: "Nursery to Class 3",
    subtitle: "Kendriya Vidyalaya (NHPC Banabasa)",
    description:
      "This is where I started studying. I have lots of memories there. I am still in contact with some friends as they live in same place as me. Unfortunately, majority of friends are out of contact and many do not remember me. Even my best friend said he does not remember me!",
    highlights: [
      { text: "I was very good in drawing." },
      {
        text: "I was also very good in studies. Because of this I did not study in LGK. I directly went to UKG!",
      },
    ],
    image: <Image src={nurseryToClass3Image} alt="Nursery to Class 3" />,
    isReversed: false,
    theme: "sky",
  },
  {
    title: "Class 4 to 10",
    subtitle: "St Francis Senior Secondary School (Tanakpur)",
    description:
      "This is where both of my chachu (my father's brothers) studied. I do not have much to say about this. Here I became an average student. Had some of the worst teachers.",
    highlights: [
      { text: "I was known to be very funny guy here." },
      { text: "I was famous as a good artist!" },
    ],
    image: <Image src={clas4To10} alt="Class 4 to 10" />,
    isReversed: true,
    theme: "sky",
  },
  {
    title: "Class 11 to 12",
    subtitle: "Nosegay Public School (Khatima)",
    description:
      "Here my personality was completely different. I was known to be sincere and rarely talked. Even teachers had blind faith on me. They would never believe that I would do anything bad. I was once absent and physics teacher did not teach anyone that day. He said that he teaches only for me as others used to go to him for tuition. I scored highest in physics — 95% in 12th boards exam.",
    highlights: [
      { text: "I was loved by all here." },
      {
        text: "I would like to go back to past just to experience this again.",
      },
    ],
    image: <Image src={class11to12} alt="Class 11 to 12" />,
    isReversed: false,
    theme: "sky",
  },
];

export default function Education() {
  return (
    <section className={styles.educationSection}>
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
