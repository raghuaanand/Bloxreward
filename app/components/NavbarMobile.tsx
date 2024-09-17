"use client"
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { HiGift } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import Image from "next/image";

export default function NavbarMobile() {
    const [activeIndex, setActiveIndex] = useState<number | null >(null);

    const handleClick = (index:number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="md:hidden fixed w-screen bg-[url('/Navbar_mobile.svg')] bg-cover bottom-0 flex gap-[5rem] h-[63px] z-50">
            <div className="flex w-[40%] justify-around items-center">
                <a
                    href="#"
                    className={`flex flex-col justify-center items-center w-[50px] transition-colors duration-300 ${activeIndex === 0 ? 'text-myGreen' : 'text-black'}`}
                    onClick={() => handleClick(0)}
                >
                    <IoHome
                        className={`transition-colors duration-300 ${activeIndex === 0 ? 'text-myGreen' : 'text-black'}`}
                        size={20.61}
                    />
                    <p className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Home</p>
                </a>
                <a
                    href="#"
                    className={`flex flex-col justify-center items-center w-[50px] transition-colors duration-300 ${activeIndex === 1 ? 'text-myGreen' : 'text-black'}`}
                    onClick={() => handleClick(1)}
                >
                    <HiGift
                        className={`transition-colors duration-300 ${activeIndex === 1 ? 'text-myGreen' : 'text-black'}`}
                        size={20.61}
                    />
                    <p className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Rewards</p>
                </a>
            </div>

            <Image src={'/menu.svg'} alt="menu" width={52} height={58} className="absolute left-[40%] bottom-[0%] w-[70px] h-[58px]" />

            <div className="flex w-[40%] justify-around items-center">
                <a
                    href="#"
                    className={`flex flex-col justify-center items-center w-[50px] transition-colors duration-300 ${activeIndex === 2 ? 'text-myGreen' : 'text-black'}`}
                    onClick={() => handleClick(2)}
                >
                    <FaTrophy
                        className={`transition-colors duration-300 ${activeIndex === 2 ? 'text-myGreen' : 'text-black'}`}
                        size={20.61}
                    />
                    <p className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Leaderboard</p>
                </a>
                <a
                    href="#"
                    className={`flex flex-col justify-center items-center w-[50px] transition-colors duration-300 ${activeIndex === 3 ? 'text-myGreen' : 'text-black'}`}
                    onClick={() => handleClick(3)}
                >
                    <RiWallet3Fill
                        className={`transition-colors duration-300 ${activeIndex === 3 ? 'text-myGreen' : 'text-black'}`}
                        size={20.61}
                    />
                    <p className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Withdraw</p>
                </a>
            </div>
        </div>
    );
}
