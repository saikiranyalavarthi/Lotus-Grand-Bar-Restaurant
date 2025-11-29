import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import DailyMenu from "./components/DailyMenu";
import EventSection from "./components/EventSection";
import Recommended from "./components/Recommended";
export default function Home() {
  return (
    <div>
         <main>
      <HeroSlider />
      <FeatureSection/>
      <AboutSection/>
      <DailyMenu/>
      <EventSection/>
      <Recommended/>
    </main>
    </div>
  );
}
