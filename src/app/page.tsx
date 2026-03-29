import Welcome from "@/components/Welcome/Welcome";
import Skills from "@/components/Skills/Skills";
import MyJourney from "@/components/MyJourney/MyJourney";
import Education from "@/components/Education/Education";
import Hobbies from "@/components/Hobbies/Hobbies";
import Today from "@/components/Today/Today";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="main-container">
      <Welcome />
      <Skills />
      <MyJourney />
      <Education />
      <Hobbies />
      <Today />
      {/* <Contact />  */}
    </main>
  );
}
