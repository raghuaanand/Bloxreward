import { IoHome } from "react-icons/io5";
import { HiGift } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import Image from "next/image";
export default function NavbarMobile() {
    return (

        <div className=" md:hidden fixed w-screen bg-[url('/Navbar_mobile.svg')] bg-cover bottom-0  flex gap-[5rem] h-[63px] z-50">
            <div className="  rounded-r-xl flex w-[40%] justify-around items-center ">
                <a href="/" className="flex flex-col hover:text-myGreen justify-center items-center w-[50px] ">
                    <IoHome className="text-black" size={20.61}  />
                    <div className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Home</div>
                </a>
                <a href="/" className="flex flex-col justify-center items-center w-[50px] ">
                    <HiGift className="text-black" size={20.61}  />
                    <div className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center ">Rewards</div>
                </a>
            </div>
            
            <Image src={'/menu.png'} alt="menu" width={52} height={58} className="absolute left-[40%] bottom-[10%] w-[70px] h-[58px]"/>
            
            <div className=" flex w-[40%] justify-around items-center ">
                <a href="/" className="flex flex-col justify-center items-center w-[50px]">
                    <FaTrophy className="text-black" size={20.61} />
                    <div className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Leaderboard</div>
                </a>
                <a href="/" className="flex flex-col justify-center items-center w-[50px]">
                    <RiWallet3Fill className="text-black" size={20.61} />
                    <div className="w-[34px] h-[8px] text-[8px] leading-[8px] font-bold text-center">Withdraw</div>
                </a>
            </div>
        </div>
    )
}