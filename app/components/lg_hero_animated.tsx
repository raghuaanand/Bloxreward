import Image from "next/image";

export default function LgHero(){
    return (
        <div className="hidden md:block w-[100%]">
            <Image src={'/Right_Side_Image_Desktop.webp'} alt="hero character" width={942} height={1004} className="md:max-w-[30rem] md:max-[50rem] lg:max-w-[35rem] xl:max-w-[45rem] absolute md:bottom-[0rem] right-[0rem]"/>
        </div>
    )
}