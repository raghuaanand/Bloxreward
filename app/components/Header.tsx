import Image from "next/image"
export default function Header(){
    return(
            <div className="h-[62px] md:h-[113px] mb-[25px] mx-[10px] md:mx-16 bg-white flex justify-between px-[16px] md:px-[100px] items-center rounded-lg md:fixed top-[5%] md:w-[1830px] md:z-50">
                <Image 
                    src="/logo.png" 
                    width={154} 
                    height={29} 
                    alt="logo" 
                    className="w-[154px] md:w-[250px] "/>
                <button className=" bg-myGreen h-[33px] md:h-[56px] w-[121px] md:w-[223px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] md:text-[22px] md:font-extrabold text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] transition-colors duration-300 hover:bg-green-400" >
                GET STARTED
                </button>
            </div>
    )
}