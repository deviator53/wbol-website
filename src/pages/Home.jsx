import Hero from "../components/Hero";
import About from "../components/About";
import Programmes from "../components/Programmes";
import FocusAreas from "../components/FocusAreas";
import MissionVision from "../components/MissionVision";
import ProjectsSlider from "../components/ProjectsSlider";
import FounderSpeech from "../components/FounderSpeech";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programmes />
      <Testimonials />
      <FocusAreas />
      <MissionVision />
      <ProjectsSlider />
      <FounderSpeech />
    </main>
  );
}
