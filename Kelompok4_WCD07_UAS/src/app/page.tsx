import ScrollToTop from "@/components/ScrollToTop";
import BusinessArea from "./components/BusinessArea";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PressRelease from "./components/PressRelease";
import VisionAndMission from "./components/VisionAndMisson";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <VisionAndMission />
      <BusinessArea />
      <PressRelease />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
