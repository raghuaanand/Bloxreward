import Image from "next/image";

export default function Partner(){
    return(
        <div className="relative bg-[#fcf9f9] py-20">
            <Image src="/Bisector_line.png" alt="hero" width={360} height={1} layout="responsive" className="w-full"/>
            <Image src="/Bisector_line2.png" alt="hero" width={39.05} height={42.35} className="absolute left-[45%] bottom-[37%] "/>
        </div>
    )
}