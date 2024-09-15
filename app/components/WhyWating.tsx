import Image from "next/image";

export default function WhyWating() {
    return(
        <div className="relative h-[650px] bg-bgColor flex justify-center items-center">
            <Image src="/Bisector_line.png" alt="hero" width={360} height={1} layout="responsive" className="w-full"/>

            <div className="absolute bg-myGreen h-[565px] w-[310px] rounded-xl flex flex-col items-start justify-start gap-5 px-8 pt-10 overflow-hidden">
                <h1 className="text-white font-rubik text-[29.27px] font-[800] w-[261.32px] leading-[29.27px]">
                    WHAT ARE YOU WAITING FOR?
                </h1>
                <p className="text-white text-[16.2px] leading-[18.63px] font-[600] w-[261.32px] ">Starting earning free Robux effortlessly by completing simple tasks and surveys today!</p>

                <button className=" bg-white h-[33px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] text-myGreen font-rubik shadow-[0_2.2px_0_0_#219542, inset_0_1.1px_0.55px_0_#FFFFFF3D, inset_0_-1.1px_0.55px_0_#0000003D] " >
                GET ME STARTED TODAY!
                </button>
                <div className="relative w-full h-[150px] flex items-center justify-center mt-auto">
                <Image
                        src={'/animated.png'}
                        alt="animated logo"
                        height={492.8}
                        width={492.8}
                        layout="intrinsic"
                        className="w-auto h-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}