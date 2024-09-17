import Image from "next/image";

export default function HowToVideo() {
    return(
        <div className=" w-screen md:w-[50%] bg-bgColor py-10">
            <div className="flex justify-center pb-5">
                <Image src={'/howto.svg'} alt="how to earn" width={310} height={174}  className="md:min-w-[718px] md:h-[300px]"/>
            </div>
            <div>
                <p className="text-center font-rubik font-[500] text-[14.85px] leading-[20.2px] md:text-[23px] md:font-semibold md:leading-[36.72px] md:w-[411px] ">SEE HOW BLOXREWARD WORKS</p>
            </div>
        </div>
    )
}