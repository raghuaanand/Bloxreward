import { IoWallet } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

// Define the card type so TypeScript knows what to expect
interface Card {
    id: number;
    title: string;
    description: string;
    logo: JSX.Element | null;  // Allow JSX.Element or null for no logo
}



const cards: Card[] = [
    {
        id: 1,
        title: 'Getting Started',
        description: 'Register by entering your Roblox username, with no passwords needed!',
        logo: <MdManageAccounts className="text-white h-[22.5px] w-[20.7px] " />  
    },
    {
        id: 2,
        title: 'Complete Tasks',
        description: 'Finish easy tasks and surveys from anywhere—on your phone, tablet, or computer to earn robux.',
        logo: <FaClipboardList className="text-white h-[22.5px] w-[20.7px] "/>  
    },
    {
        id: 3,
        title: 'Instantly Withdraw',
        description: 'Cash out your earnings instantly as Robux, cryptocurrency, and much more!',
        logo: <IoWallet className="text-white h-[22.5px] w-[20.7px] "/>   
    }
];


export default cards;
