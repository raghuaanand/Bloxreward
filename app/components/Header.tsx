import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="relative flex justify-center items-center md:flex">
      <div className="mx-[2rem] h-[62px] md:h-[113px] w-full bg-white flex justify-between px-4 md:px-16 lg:px-24 items-center rounded-lg fixed top-4 md:top-5 md:w-[95%] lg:w-[90%] z-50">
        {/* Logo */}
        <Image
          src="/logo.svg"
          width={154}
          height={29}
          alt="logo"
          className="w-[9.5rem] md:w-[12rem] lg:w-[15.75rem]"
        />

        {/* NavBar and Button */}
        <div className="flex items-center gap-4 md:gap-12 lg:gap-20">
          <NavBar />

          <button className="bg-myGreen h-[33px] md:h-[45px] lg:h-[56px] w-[7.5rem] md:w-[12rem] lg:w-[15rem] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[0.75rem] md:text-[18px] lg:text-[22px] lg:font-extrabold text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] transition-colors duration-300 hover:bg-green-400">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
