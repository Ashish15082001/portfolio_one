import Welcome from "@/components/Welcome/Welcome";
import Skills from "@/components/Skills/Skills";
import JourneyStart from "@/components/JourneyStart/JourneyStart";
import Education from "@/components/Education/Education";
import Today from "@/components/Today/Today";
import Contact from "@/components/Contact/Contact";
import Step from "@/components/step/Step";
import nurseryToClass3Image from "@/images/nursery-to-class3.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-container">
      {/* <Welcome /> */}
      {/* <Skills /> */}
      <JourneyStart />
      <Education />
      {/* <Today /> */}
      {/* <Contact />  */}
    </main>
  );
}
