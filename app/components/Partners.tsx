"use client"
import partners from "@/constants/partners";
import Image from "next/image";
import { useState } from "react";

export default function Partners() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleCardClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="bg-[#fcf9f9] flex flex-col justify-center items-center gap-3 font-rubik px-5 pb-16">
            <h1 className="text-myGreen font-[700] leading-[14.3px] text-[14.3px] md:text-[26px] md:leading-[26px] ">OUR PARTNERS</h1>
            <h2 className="font-[800] text-[29.7px] text-center md:text-[54px] md:leading-[54px] md:w-[815px] ">EARN ROUBX WITH OUR <span className="text-myGreen underline decoration-[3px]">TRUSTED PARTNERS! </span></h2>
            <p className="text-center font-[500] text-[12.1px] md:text-[22px] md:leading-[29.92px] md:w-[803px] md:pt-3 px-2 pb-4 padding-[16.46px] opacity-75 text-[#161c18] ">We&rsquo;ve partnered with top offerwalls and survey providers to bring you the best opportunities to earn Robux. Here&rsquo;s who we work with:</p>
            <div>
                <ul className="grid grid-cols-2 md:grid-cols-4 md:place-content-center place-items-center md:gap-x-5 md:gap-y-5 gap-x-3 gap-y-3 md:mt-10">
                    {partners.map((partner, index) => {
                        const isActive = activeIndex === index;

                        // Conditionally apply grid column based on index
                        let gridColumnClass = '';
                        if (index === 4) {
                            gridColumnClass = 'md:col-start-2'; // Start below the 2nd column
                        } else if (index === 5) {
                            gridColumnClass = 'md:col-start-3'; // Start below the 3rd column
                        }

                        return (
                            <li
                                key={index}
                                className={`rounded-lg border flex flex-col justify-center items-center h-fit md:h-[300px] w-[148px] md:w-[311px] ${isActive ? 'border-myGreen border-[3px]' : 'bg-white'} ${gridColumnClass}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="border-b-myGreen border-b-[1px] w-full flex items-center justify-center">
                                    <Image src={partner.logo} alt="company logo" width={148} height={95.7} layout="responsive" className="w-full" />
                                </div>
                                <div className={`flex flex-col items-start px-3 py-2 justify-center font-rubik font-[500] w-[148px] md:w-[311px] md:h-[126px] md:py-4 md:px-4 h-[78.74px] gap-1 ${isActive ? 'bg-myGreen text-white' : 'bg-white text-[#161c18]'}`}>
                                    <p className="text-[11.54px] leading-[15.69px] md:text-[20px] md:leading-[28.53px] md:font-semibold">{partner.name}</p>
                                    <p className="opacity-75 leading-[10.38px] text-[9.44px] md:text-[17.16px] md:leading-[18.88px]">{partner.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </div>
    )
}