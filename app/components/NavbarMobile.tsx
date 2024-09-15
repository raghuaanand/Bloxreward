import { IoHome } from "react-icons/io5";
import { HiGift } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
export default function NavbarMobile() {
    return(
        <>
            <div className=" fixed w-full bottom-0 flex gap-[5rem] h-[63px]">
                <div className="bg-white rounded-r-xl flex w-[40%]">
                    <a href="/">
                        <IoHome className="text-black"/>
                    </a>
                    <a href="/">
                        <HiGift className="text-black"/>
                    </a>
                </div>
                <div className="absolute left-32 top-3 rotate-45 rounded-lg h-[63px] w-[63px] bg-white">
                </div>
                <div className="bg-white flex w-[40%]">
                    <a href="/">
                        <FaTrophy className="text-black"/>
                    </a>
                    <a href="/">
                        <RiWallet3Fill className="text-black"/>
                    </a>
                </div>
            </div>
        </>
    )
}