interface ButtonProps {
    buttonText: string;
    width: string;
}

export default function Button(props: ButtonProps){
    return(
        <>
            <div style={{ width: props.width}} className=" bg-myGreen h-[33px] font-[900] text-center flex items-center justify-center rounded-lg py-[9px] px-[15px] text-[13px] text-white font-rubik shadow-[0_2.2px_0_0_#219542, inset_0_1.1px_0.55px_0_#FFFFFF3D, inset_0_-1.1px_0.55px_0_#0000003D] " >
                {props.buttonText}
            </div>
        </>
    )
}