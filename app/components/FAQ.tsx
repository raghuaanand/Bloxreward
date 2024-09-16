import FaqList from "./FaqList"
import HowToVideo from "./HowToVideo"

export default function FAQ() {
    return (
        <div className="bg-[#fcf9f9]  font-rubik px-5 pt-20">
            <div className="flex flex-col justify-center items-center gap-3  ">
                <h1 className="text-myGreen font-extrabold leading-[14.3px] text-[14.3px] md:text-[26px] md:leading-[26px] ">FAQ</h1>
                <h2 className="font-extrabold text-[29.7px] text-center leading-[29.7px] md:w-[614px] md:text-[54px] md:leading-[54px] ">GOT QUESTIONS? WE'VE GOT<span className="underline text-myGreen md:decoration-[3px]"> ANSWERS!</span> </h2>
                <p className="text-center font-[500] text-[12.1px] px-2 padding-[16.46px] opacity-75 md:text-[22px] md:leading-[29.92px] md:w-[1217px] ">We’re here to help! Here are some of the most common questions about BloxReward. If you don’t see your question here, feel free to reach out to us anytime.</p>
            </div>

            <div className="md:flex md:items-start md:w-screen md:mt-10 md:gap-20 md:mx-20 md:overflow-hidden">
                <FaqList />
                <div className="hidden  md:flex md:justify-center md:items-start ">
                    <HowToVideo />
                </div>
            </div>
        </div>

    )
}