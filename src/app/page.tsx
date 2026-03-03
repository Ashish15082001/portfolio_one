import Welcome from "@/components/Welcome/Welcome";
import Skills from "@/components/Skills/Skills";
import JourneyStart from "@/components/JourneyStart/JourneyStart";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Today from "@/components/Today/Today";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Skills />
      <JourneyStart />
      <Education />
      <Experience />
      <Today />
      <Contact />
    </main>
  );
}
