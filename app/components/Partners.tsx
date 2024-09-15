import partners from "@/constants/partners";
import Image from "next/image";

export default function(){
    return(
        <div className="bg-[#fcf9f9] flex flex-col justify-center items-center gap-3 font-rubik px-5 pb-16">
            <h1 className="text-myGreen font-[700] leading-[14.3px] text-[14.3px]">OUR PARTNERS</h1>
            <h2 className="font-[800] text-[29.7px] text-center">EARN ROUBX WITH OUR <span className="text-myGreen underline">TRUSTED</span> <span className="text-myGreen underline">PARTNERS!</span> </h2>
            <p className="text-center font-[500] text-[12.1px] px-2 pb-4 padding-[16.46px] opacity-75 text-[#161c18] ">We’ve partnered with top offerwalls and survey providers to bring you the best opportunities to earn Robux. Here’s who we work with:</p>
            <div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-3 ">
                    {partners.map((partner, index) => {
                        return (
                            <li key={partner.id} className=" bg-white rounded-lg border flex flex-col justify-center items-center w-[148px] h-[176px]">
                                <div className="border-b-myGreen border-b-[1px] w-full flex items-center justify-center">
                                    <Image src={partner.logo} alt="company logo" width={148} height={95.7} layout="responsive" className="w-full"/>
                                </div>
                                <div className="flex flex-col items-start px-3 py-2 justify-center font-rubik font-[500] w-[148px] h-[78.74px] gap-1">
                                    <p className="text-[11.54px] leading-[15.69px] text-[#161c18]">{partner.name} </p>
                                    <p className="opacity-75 text-[#161c18] leading-[10.38px] text-[9.44px]">{partner.description} </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}