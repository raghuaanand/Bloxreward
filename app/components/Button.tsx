interface ButtonProps {
    buttonText: string;
    width: string;
}

export default function Button(props: ButtonProps){
    return(
        <>
            <div style={{ width: props.width}} className=" bg-myGreen h-[33px] md:h-[56px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] text-white font-rubik shadow-[0px_4px_0px_0px_rgba(33,149,66,1),0px_2px_1px_0px_rgba(255,255,255,0.24)_inset,0px_-2px_1px_0px_rgba(0,0,0,0.24)_inset] " >
                {props.buttonText}
            </div>
        </>
    )
}