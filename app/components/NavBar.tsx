import { IoHome } from "react-icons/io5";
import { HiGift } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
export default function NavBar() {
    return(
        <>
            <div className=" hidden md:flex gap-[5rem] h-[63px]">
                <div className="bg-white rounded-r-xl flex  gap-10">
                    <a href="/" className="flex gap-3 items-center">
                        <IoHome className="text-black" size={20.61}/>
                        <p className="text-[18.73px] leading-[22.2px] ">Home</p>
                    </a>
                    <a href="/" className="flex gap-3 items-center">
                        <HiGift className="text-black" size={20.61}/>
                        <p className="text-[18.73px] leading-[22.2px] ">Rewards</p>
                    </a>
                
                    <a href="/" className="flex gap-3 items-center">
                        <FaTrophy className="text-black" size={20.61}/>
                        <p className="text-[18.73px] leading-[22.2px] ">Leaderboard</p>
                    </a>
                    <a href="/" className="flex gap-3 items-center">
                        <RiWallet3Fill className="text-black" size={20.61}/>
                        <p className="text-[18.73px] leading-[22.2px] ">Withdraw</p>
                    </a>
                </div>
            </div>
        </>
    )
}