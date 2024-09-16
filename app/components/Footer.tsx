import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-bgColor flex flex-col px-6 gap-5 md:pb-8 pb-20">
            <div className="md:flex md:justify-between md:px-20 md:border-b-myGreen md:border-b-[3px]">
                <div className="flex flex-col gap-5">
                    <div>
                        <Image src={'/footer_logo.png'} alt="footer logo" width={309} height={56} className="md:w-[630px] md:h-[94px] "/>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-[33.5px] md:h-[61px] md:w-[61px] h-[33.5px] rounded-lg bg-green-100 flex items-center justify-center">
                            <a href="www.discord.com"><FaDiscord className="md:w-[31px] md:h-[24px] "/></a>
                        </div>
                        <div className="w-[33.5px] md:h-[61px] md:w-[61px] h-[33.5px] rounded-lg bg-green-100 flex items-center justify-center">
                            <a href="www.twitter.com"><FaTwitter className="md:w-[31px] md:h-[24px] "/></a>
                        </div>
                        <div className="w-[33.5px] md:h-[61px] md:w-[61px] h-[33.5px] rounded-lg bg-green-100 flex items-center justify-center">
                            <a href="www.youtube.com"><FaYoutube className="md:w-[31px] md:h-[24px] "/></a>
                        </div>
                    </div>
                </div>
                <div className="pt-4 font-rubik flex gap-4 justify-between pb-10 md:w-[681px] md:border-b-0 border-b-myGreen border-b-[2px]">
                    <div className="flex flex-col gap-3 md:items-end ">
                        <h1 className="pb-3 font-[600] text-[13.75px] leading-[15.81px] md:text-[25px] md:leading-[28.75px] ">Quick Links</h1>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Home</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Earn</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Rewards</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Learderships</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Withdrawals</a>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end ">
                        <h1 className="pb-3 font-[600] text-[13.75px] leading-[15.81px] md:text-[25px] md:leading-[28.75px] ">Support</h1>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Discord Server</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Eamil Us</a>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end ">
                        <h1 className="pb-3 font-[600] text-[13.75px] leading-[15.81px] md:text-[25px] md:leading-[28.75px] ">Legal</h1>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Privacy Policy</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Terms of Service</a>
                        <a href="#" className="opacity-75 text-[12.1px] leading-[13.92px] font-[500] md:text-[22px] md:leading-[25.3px] ">Cookie Policy</a> 
                    </div>
                </div>
            </div>

            <div className="font-rubik md:flex md:justify-between md:items-center md:pb-10">
                <p className="font-bold text-[13.75px] pb-2 text-[#161c18] md:text-[25px] md:leading-[28.75px] ">© 2024 Bloxreward™. All Rights Reserved.</p>
                <p className="opacity-75 text-[12.1px] font-[400] md:text-[22px] md:leading-[25.3px]">We’re not affiliated in any way with the Roblox Corporation or any of its trademarks.</p>
            </div>
        </div>
    )
}