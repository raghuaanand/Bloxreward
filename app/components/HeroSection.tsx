import Button from "./Button";
import Image from "next/image";
export default function(){
    return(
        <div className="relative p-[20px] md:p-0 md:flex md:justify-between md:items-center md:h-[1006px] overflow-hidden">
            <div className="md:pl-40">
                <h1 className="font-bold text-[44.55px] md:text-[81px] md:w-[912px] font-rubik leading-[44.55px] md:leading-[81px] md:font-extrabold">
                    GET <span className="text-myGreen pr-10 md:pr-0 underline decoration-[2px]">FREE ROBUX </span> ANYTIME ANYWHERE!
                </h1>
                <p className="font-rubik font-normal text-[13.2px] md:text-[24px] md:leading-[32.64px] leading-[17.95px] py-3 pr-3 text-[#161c18] opacity-75 md:w-[912px]">Earn Robux effortlessly by completing simple tasks and surveys. No more begging parents for Robux—start earning today!</p>

                <button className=" bg-myGreen h-[33px] md:h-[56px] w-[10rem] md:w-[292px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] md:text-[22px] md:font-extrabold text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset]" >
                GET ME STARTED!
                </button>
            </div>
            <div className="w-screen md:w-[30%]">
                <Image 
                    src="/animated.png"  
                    width={544.95} 
                    height={543.81} 
                    className="w-screen md:h-[1034px] md:w-[1034px]" 
                    alt="hero"/>
            </div>
            <div className="md:h-[13500px] md:w-[13500px] w-[5000px] h-[5000px] top-[96%] -right-[553%] rounded-full border-myGreen border-[5px] border-[3px] absolute md:top-[91%] md:-right-[300%] bg-bgColor">

            </div>
        </div>
    )
}