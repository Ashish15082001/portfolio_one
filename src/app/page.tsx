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
      <div data-theme-section="welcome">
        <Welcome />
      </div>
      <div data-theme-section="skills">
        <Skills />
      </div>
      <div data-theme-section="myjourney">
        <MyJourney />
      </div>
      <div data-theme-section="education">
        <Education />
      </div>
      <div data-theme-section="myhobbies">
        <MyHobbies />
      </div>
      <div data-theme-section="experience">
        <Experience />
      </div>
      <div data-theme-section="personalprojects">
        <PersonalProjects />
      </div>
      <div data-theme-section="today">
        <Today />
      </div>

      <div data-theme-section="contact">
        <Contact />
      </div>
    </main>
  );
}
