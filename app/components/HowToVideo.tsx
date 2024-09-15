import Image from "next/image";

export default function HowToVideo() {
    return(
        <div className=" w-screen bg-bgColor py-10">
            <div className="flex justify-center pb-5">
                <Image src={'/howto.png'} alt="how to earn" width={310} height={174}  className=""/>
            </div>
            <div>
                <p className="text-center font-rubik font-[500] text-[14.85px] leading-[20.2px]">SEE HOW BLOXREWARD WORKS</p>
            </div>
        </div>
    )
}