import LgHero from "./lg_hero_animated";
import SmHeroAnimated from "./sm_hero_animated";

export default function HeroSection(){
    return (
        <div className="relative  h-[54.3125rem] overflow-hidden  pt-[8rem] px-[2rem] md:w-screen md:pt-[15rem] border-b-myGreen border-b-[3px] z-20">
            <div className="absolute bg-[url('/bg_grid.svg')] min-h-[80rem] min-w-full top-0 bg-green-200 opacity-20 left-0 z-0">

            </div>
            <div className="z-20 flex md:w-[50%] flex-col gap-5 md:pl-[4rem]">

                <h1 className="font-extrabold text-[2.784375rem] leading-[2.794375rem] md:text-[5rem] md:leading-[5rem]">
                    GET <span className="text-myGreen underline decoration-[3px]"> FREE ROBUX </span> ANYTIME ANYWHERE!
                </h1>

                <p className="font-semibold text-[13.2px] leading-[17.95px] md:text-[24px] md:leading-[32.64px]  opacity-75">
                    Earn Robux effortlessly by completing simple tasks and surveys. No more begging parents for Robux—start earning today!
                </p>

                <button className="bg-myGreen h-[2rem] w-fit px-[1rem] rounded-lg font-extrabold shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] text-white transition-colors duration-300 hover:bg-green-400      md:h-[3.5rem] md:text-[22px] ">
                    GET ME STARTED!
                </button>
            </div>
            <div className="md:w-[50%]">
                <LgHero />
                <SmHeroAnimated />
            </div>
        </div>
    )
}