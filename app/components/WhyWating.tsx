import Image from "next/image";

//TODO : Add gradirent
export default function WhyWating() {
    return(
        <div className="relative h-[650px] bg-bgColor flex justify-center items-center ">
            <Image src="/Bisector_line.png" alt="hero" width={360} height={1} className="w-full md:h-[0.5rem]"/>

            <div className="absolute bg-custom-gradient h-[565px]  rounded-xl flex md:flex-row md:justify-center md:items-center flex-col items-start justify-start gap-5 px-8 pt-10 overflow-hidden md:w-[85%] md:h-[443px]">
                <div className="flex flex-col items-start justify-start md:px-20 gap-5 md:w-[835px]">
                    <h1 className="text-white font-rubik text-[29.27px] font-extrabold w-[261.32px] md:w-[835px] leading-[29.27px] md:text-[54px] md:leading-[54px] ">
                        WHAT ARE YOU WAITING FOR?
                    </h1>
                    <p className="text-white text-[16.2px] leading-[18.63px] md:text-[31px] md:leading-[35.65px] font-[600] w-[261.32px] md:w-[762px] ">Starting earning free Robux effortlessly by completing simple tasks and surveys today!</p>
                    <button className=" bg-white h-[33px] md:h-[56px] w-[178px] md:w-[340px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] md:text-[22px] md:font-extrabold text-myGreen font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] transition-colors duration-300 hover:bg-gray-200" >
                    GET STARTED TODAY!
                    </button>
                </div>
                <div className=" w-full h-[150px] flex items-center justify-center mt-auto">
                <Image
                        src={'/hero_character.svg'}
                        alt="animated logo"
                        height={492.8}
                        width={492.8}
                        className="absolute md:-top-[70%] md:left-[45%] z-0 top-40 h-[510px] md:w-[65rem] md:h-[65rem] left-9 rotate-[16deg]"
                    />
                </div>
            </div>
        </div>
    )
}