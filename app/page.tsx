import Image from "next/image";
import NavbarMobile from "./components/NavbarMobile";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { MovingCards } from "./components/MovingCards";
import GettingStarted from "./components/GettingStarted";
import MultipleCard from "./components/MultipleCard";
import Bisector from "./components/Bisector";
import Partners from "./components/Partners";
import Legal from "./components/Legal";
import HowToVideo from "./components/HowToVideo";
import WhyWating from "./components/WhyWating";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f3f0f0ef] pt-[25px]">
      <div className="absolute inset-0 bg-my_bg bg-cover bg-center opacity-5 z-0 pointer-events-none"></div>
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <MovingCards />
          <GettingStarted />
          <MultipleCard />
          <Bisector />
          <Partners />
          <Legal />
          <FAQ />
          <HowToVideo />
          <WhyWating />
          <Footer />
          {/* <NavbarMobile /> */}
        </div>
    </div>
  );
}
