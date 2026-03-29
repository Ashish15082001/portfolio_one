import Welcome from "@/components/Welcome/Welcome";
import Skills from "@/components/Skills/Skills";
import JourneyStart from "@/components/JourneyStart/JourneyStart";
import Education from "@/components/Education/Education";
import Hobbies from "@/components/Hobbies/Hobbies";
import Today from "@/components/Today/Today";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="main-container">
      <Welcome />
      <Skills />
      <JourneyStart />
      <Education />
      <Hobbies />
      {/* <Today /> */}
      {/* <Contact />  */}
    </main>
  );
}
