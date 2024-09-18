import Image from "next/image";
export default function HeroSection() {
    return (
        <div className="relative pt-[8rem]  md:w-screen h-[54rem] flex flex-col md:flex-row  md:p-0 md:flex md:items-center md:h-[1006px] overflow-hidden">
            <div className="bg-[url('/bg_grid.svg')] absolute w-full h-full opacity-20 bg-green-100 z-0">

            </div>
            <div className="md:pl-40 h-[35%] md:w-[50%] px-[1.5rem] z-20">
                <h1 className="font-bold text-[44.55px] md:text-[81px] md:w-[912px] font-rubik leading-[44.55px] md:leading-[81px] md:font-extrabold">
                    GET <span className="text-myGreen pr-10 md:pr-0 underline decoration-[2px]">FREE ROBUX </span> ANYTIME ANYWHERE!
                </h1>
                <p className="font-rubik font-normal text-[13.2px] md:text-[24px] md:leading-[32.64px] leading-[17.95px] py-3 pr-3 text-[#161c18] opacity-75 md:w-[912px]">Earn Robux effortlessly by completing simple tasks and surveys. No more begging parents for Robux—start earning today!</p>

                <button className=" bg-myGreen h-[33px] md:h-[56px] w-[10rem] md:w-[292px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] md:text-[22px] md:font-extrabold text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] transition-colors duration-300 hover:bg-green-400 " >
                    GET ME STARTED!
                </button>
            </div>
            <div className="relative text-red-900   w-[100%] md:w-[50%] md:h-[1034px] ">
                
            </div>

            <div className="absolute -bottom-[5rem] w-screen h-[8rem] bg-bgColor border-t-myGreen border-t-[3px] z-30">

            </div>

            {/* <div className="md:h-[13500px] bg-center md:w-[13500px] w-[5000px] h-[5000px] top-[96%] -right-[625%] rounded-full border-myGreen md:border-[5px] border-[3px] absolute md:top-[85%] md:-right-[300%] bg-bgColor z-30">

            </div> */}
        </div>
    )
}