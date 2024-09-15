import cards from "@/constants/cards";
import Button from "./Button";

export default function MultipleCard() {
    return (
        <div className="bg-[#fcf9f9] flex flex-col items-center gap-6">
            <ul className="flex flex-col justify-center items-center bg-[#fcf9f9] gap-9 pt-10">
                {cards.map((card, index) => {
                    return (
                        <li key={index} className="relative bg-white border-[1px] h-[139px] w-[310px] rounded-lg">

                            <div className="bg-myGreen w-[44px] h-[44px] flex items-center justify-center rounded-lg absolute -top-[15%] left-[5%]">
                                {card.logo} 
                            </div>

                            <div className="px-6 pt-10 font-rubik">
                                <h1 className="text-[15.4px] leading-[20.94px] font-[500] text-[#161c18] ">{card.title}</h1>
                                <p className="font-[500] text-[#161c18] opacity-75 text-[12.1px] pt-2 ">{card.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Button buttonText="START EARNING NOW!" width="188.47px" />
        </div>
    );
}
