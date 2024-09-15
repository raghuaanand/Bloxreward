import FaqList from "./FaqList"

export default function FAQ() {
    return (
        <div className="bg-[#fcf9f9] flex flex-col justify-center items-center gap-3 font-rubik px-5 pt-20">
            <h1 className="text-myGreen font-extrabold leading-[14.3px] text-[14.3px]">FAQ</h1>
            <h2 className="font-extrabold text-[29.7px] text-center leading-[29.7px]">GOT QUESTIONS?<span className="block">WE'VE GOT</span>  <span className="text-myGreen underline">ANSWERS!</span> </h2>
            <p className="text-center font-[500] text-[12.1px] px-2 padding-[16.46px] opacity-75">We’re here to help! Here are some of the most common questions about BloxReward. If you don’t see your question here, feel free to reach out to us anytime.</p>

            <div>
                <FaqList />
            </div>
        </div>

    )
}