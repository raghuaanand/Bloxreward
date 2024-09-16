import cards from "@/constants/cards";

export default function MultipleCard() {
    return (
        <div className="bg-[#fcf9f9] flex flex-col items-center gap-6 md:pt-16">
            <ul className="flex flex-col md:flex-row justify-center items-center bg-[#fcf9f9] gap-9 pt-10">
                {cards.map((card, index) => {
                    return (
                        <li key={index} className="relative bg-white border-[1px] h-[139px] md:h-[253px] w-[310px] md:w-[462px] rounded-lg">

                            <div className="bg-myGreen w-[44px] md:h-[80px] md:w-[80px] h-[44px] flex items-center justify-center rounded-lg absolute -top-[15%] left-[5%]">
                                {card.logo} 
                            </div>

                            <div className="px-6 md:px-10 md:pt-20 pt-10 font-rubik">
                                <h1 className="text-[15.4px] md:text-[28px] md:leading-[38px] leading-[20.94px] font-[500] text-[#161c18] ">{card.title}</h1>
                                <p className="font-[500] text-[#161c18] opacity-75 text-[12.1px] md:text-[22px] md:leading-[29.92px] pt-2 ">{card.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button className=" bg-myGreen h-[33px] md:h-[56px] w-[188.47px] md:w-[310px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] md:mt-7 px-[15px] text-[13px] md:text-[22px] md:font-extrabold text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] transition-colors duration-300 hover:bg-green-400" >
                START EARNING NOW
                </button>
        </div>
    );
}
