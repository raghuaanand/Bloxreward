import Image from "next/image"
import Button from "./Button"
export default function Header(){
    return(
            <div className="h-[62px] md:h-[113px] mb-[25px] mx-[10px] bg-white flex justify-between px-[16px] items-center rounded-lg">
                <Image src="/logo.png" width={154} height={29} alt="logo" />
                <Button buttonText={"GET STARTED"} width= {"121px"}/>
            </div>
    )
}