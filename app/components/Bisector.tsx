import Image from "next/image";

export default function Partner(){
    return(
        <div className="relative bg-[#fcf9f9] py-20 md:py-40">
            <Image src="/Bisector_line.png" alt="hero" width={360} height={1} className="w-full md:h-[5px]"/>
            <Image src="/Bisector_line2.png" alt="hero" width={39.05} height={42.35} className="absolute md:left-[49%] left-[45%] bottom-[37%] md:bottom-[38%] md:w-[71px] md:h-[77px]"/>
        </div>
    )
}