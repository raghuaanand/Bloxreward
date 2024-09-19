import Image from "next/image";

export default function SmHeroAnimated(){
    return(
        <div className="md:hidden relative ">


            <Image src={'/Right_Side_Image_Mob.webp'} alt="hero character" width={544} height={543} className="absolute top-[3rem] -right-[2rem] min-w-[26rem]"/>
            {/* <div className="w-screen absolute -left-[11rem] z-30">
                <Image 
                    src={'/hero_character.svg'} 
                    alt="hero character" 
                    width={544} 
                    height={543}

                    className="min-w-[35rem] z-30"
                />
            </div>
            <Image 
                src={'/hero_v3.svg'} 
                alt="hero vector" 
                height={621} 
                width={601}

                className="z-0 min-w-[25rem] absolute -left-[1rem] top-[3rem] rotate-[60deg] opacity-55"
            />

            <Image 
                src={'/hero_v2.svg'} 
                alt="hero vector" 
                height={65} 
                width={62}

                className="z-20  absolute right-[0.25rem] top-[20rem] rotate-[22deg]"
            /> */}

        </div>
    )
}