import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-bgColor flex flex-col px-6 gap-5 pb-8 ">
            <div>
                <Image src={'/footer_logo.png'} alt="footer logo" width={309} height={56} />
            </div>
            <div className="flex gap-5">
                <div className="w-[33.5px] h-[33.5px] rounded-lg bg-green-100 flex items-center justify-center">
                    <a href="www.discord.com"><FaDiscord /></a>
                </div>
                <div className="w-[33.5px] h-[33.5px] rounded-lg bg-green-100 flex items-center justify-center">
                    <a href="www.twitter.com"><FaTwitter /></a>
                </div>
                <div className="w-[33.5px] h-[33.5px] rounded-lg bg-green-100 flex items-center justify-center">
                    <a href="www.youtube.com"><FaYoutube /></a>
                </div>
            </div>
            <div className="pt-4 font-rubik flex gap-4 justify-center border-b-myGreen border-b-[2px] pb-10">
                <div className="flex flex-col gap-3">
                    <h1 className="pb-3 font-[600] text-[13.75px] leading-[15.81px] ">Quick Links</h1>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Home</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Earn</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Rewards</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Learderships</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Withdrawals</a>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="pb-3 font-[600] text-[13.75px] leading-[15.81px] ">Support</h1>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Discord Server</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Eamil Us</a>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="pb-3 font-[600] text-[13.75px] leading-[15.81px] ">Legal</h1>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Privacy Policy</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Terms of Service</a>
                    <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] ">Cookie Policy</a> 
                </div>
            </div>

            <div className="font-rubik">
                <p className="font-bold text-[13.75px] pb-2 text-[#161c18]">© 2024 Bloxreward™. All Rights Reserved.</p>
                <p className="opacity-75 text-[12.1px] font-[400] ">We’re not affiliated in any way with the Roblox Corporation or any of its trademarks.</p>
            </div>
        </div>
    )
}