import Image from "next/image"
import NavBar from "./NavBar"
export default function Header(){
    return(
        <div className="md:flex relative md:justify-center md:items-center">
            <div className="mx-[1rem] h-[62px] md:h-[113px] w-screen bg-white flex justify-between px-[16px] md:px-[100px] items-center rounded-lg absolute md:fixed top-[5%] md:w-[90%] md:z-50 z-50">
                <Image 
                    src="/logo.svg" 
                    width={154} 
                    height={29} 
                    alt="logo" 
                    className="w-[9.5rem] md:w-[15.75rem] "/>
                <div className="md:flex md:gap-20">
                    <NavBar />
                    <button className=" bg-myGreen h-[33px] md:h-[56px] w-[7.5rem] md:w-[15rem] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[0.75rem] md:text-[22px] md:font-extrabold text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] transition-colors duration-300 hover:bg-green-400" >
                    GET STARTED
                    </button>
                </div>
            </div>
        </div>
    )
}