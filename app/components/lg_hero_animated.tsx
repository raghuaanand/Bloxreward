import Image from "next/image";

export default function LgHero(){
    return (
        <div className="hidden md:block w-[100%]">
            <Image src={'/hero_character.svg'} alt="hero character" layout="fill" objectFit="contain" className="min-h-[70rem] w-screen absolute top-[1rem] right-[1rem]"/>
        </div>
    )
}