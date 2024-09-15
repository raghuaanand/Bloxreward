import Button from "./Button";
import Image from "next/image";
export default function(){
    return(
        <div className="p-[20px] md:p-0 md:flex md:justify-between md:items-center md:h-[1006px]">
            <div className="">
                <h1 className="font-[900] text-[44.55px] font-rubik leading-[44.55px]">GET <span className="text-myGreen underline pr-10">FREE</span> <span className="text-myGreen underline block">ROBUX</span> ANYTIME ANYWHERE!</h1>
                <p className="font-rubik font-normal text-[13.2px] leading-[17.95px py-3 pr-3">Earn Robux effortlessly by completing simple tasks and surveys. No more begging parents for Robux—start earning today!</p>
                <Button  buttonText={"GET ME STARTED!"} width= {"10rem"}/>
            </div>
            <div className="w-screen md:w-[30%]">
                <Image src="/animated.png"  width={544.95} height={543.81} layout="responsive" className="w-screen" alt="hero"/>
            </div>
        </div>
    )
}