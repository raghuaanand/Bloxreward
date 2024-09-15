import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Legal() {
    return (
        <div className="relative bg-myGreen text-white font-rubik px-6 pt-16">
            <div className="absolute inset-0 bg-legal_bg  bg-cover bg-center opacity-90 z-0 pointer-events-none"></div>
            <p className="font-[700] text-[14.3px] leading-[14.3px] pb-3">ARE WE LEGIT?</p>

            <h1 className="font-[800] text-[29.7px] leading-[29.7px] pb-7">
                YES, WE'RE <span className="underline ">100% </span> 
                <span className="underline">
                    LEGIT!
                </span>
            </h1>
            <p className="text-[12.1px] opacity-95 leading-[16.46px] pb-7">
                We know you might be wondering if BloxReward is the real deal. Let us explain how it works!
            </p>
            <p className="text-[12.1px] opacity-95 leading-[16.46px] pb-7">
                At BloxReward, we partner with reputable companies that want to hear your opinions and engage with you through tasks and surveys. These companies pay us for your participation, and we share a big portion of that with you as Robux. That’s how we can afford to give you Robux for free!
            </p>
            <p className="text-[12.1px] opacity-95 leading-[16.46px] pb-7">
                Every task you complete and every survey you fill out helps these companies improve their products and services, and in return, you get to earn Robux. It’s a win-win!
            </p>
            <div>
                <Image src={'/gift.png'} alt="gift" width={347.32} height={342.91} />
            </div>
        </div>
    )
}