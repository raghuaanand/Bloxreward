/* eslint-disable */

import Image from "next/image";

export default function Legal() {
    return (
        <div className="relative bg-myGreen text-white font-rubik px-6 pt-16 md:flex overflow-hidden md:h-[680px]">
            <div className="absolute inset-0 bg-[url('/legal_vector.png')]  bg-cover bg-center md:bg-right opacity-90 z-0 pointer-events-none"></div>
            <div className="md:w-[803px] md:pl-20 md:pt-16">
                <p className="font-[700] text-[14.3px] leading-[14.3px] pb-3 md:text-[26px] md:leading-[26px] ">ARE WE LEGIT?</p>

                <h1 className="font-[800] text-[29.7px] leading-[29.7px] pb-7 md:text-[54px] md:leading-[54px] ">
                    YES, WE'RE <span className="underline md:decoration-[3px] ">100% LEGIT! </span> 
                    
                </h1>
                <p className="text-[12.1px] md:text-[22px] md:leading-[29.92px] opacity-95 leading-[16.46px] pb-7">
                    We know you might be wondering if BloxReward is the real deal. Let us explain how it works!
                </p>
                <p className="text-[12.1px] md:text-[22px] md:leading-[29.92px] opacity-95 leading-[16.46px] pb-7">
                    At BloxReward, we partner with reputable companies that want to hear your opinions and engage with you through tasks and surveys. These companies pay us for your participation, and we share a big portion of that with you as Robux. That is how we can afford to give you Robux for free!
                </p>
                <p className="text-[12.1px] md:text-[22px] md:leading-[29.92px] opacity-95 leading-[16.46px] pb-7">
                    Every task you complete and every survey you fill out helps these companies improve their products and services, and in return, you get to earn Robux. Its a win-win!
                </p>
            </div>
            <div className="md:absolute md:right-[0%] md:-bottom-[10%] ">
                <Image src={'/gift.png'} alt="gift" width={347.32} height={342.91} className="md:h-[651px] md:w-[761px] "/>
            </div>
        </div>
    )
}