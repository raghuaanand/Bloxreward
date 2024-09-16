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
    <div className="relative min-h-screen bg-[#f3f0f0ef] pt-[25px] md:overflow-hidden">
      <div className="absolute inset-0 bg-[url('/br_grid.png')] bg-[length:400px_400px] md:bg-[length:1000px_1000px] md:opacity-[0.03]   bg-center opacity-5 z-0 pointer-events-none"></div>
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
          <div className="md:hidden md:overflow-hidden">
            <HowToVideo />
          </div>
          <WhyWating />
          <Footer />
          {/* <NavbarMobile /> */}
        </div>
    </div>
  );
}
