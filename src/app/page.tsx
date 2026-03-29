import Welcome from "@/components/Welcome/Welcome";
import Skills from "@/components/Skills/Skills";
import MyJourney from "@/components/MyJourney/MyJourney";
import Education from "@/components/Education/Education";
import MyHobbies from "@/components/MyHobbies/MyHobbies";
import Experience from "@/components/Experience/Experience";
import Today from "@/components/Today/Today";
import Contact from "@/components/Contact/Contact";
import PersonalProjects from "@/components/PersonalProjects/PersonalProjects";

export default function Home() {
  return (
    <main className="main-container">
      <Welcome />
      <Skills />
      <MyJourney />
      <Education />
      <MyHobbies />
      <Experience />
      <PersonalProjects />
      <Today />

      {/* <Contact /> */}
    </main>
  );
}
