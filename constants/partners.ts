interface Partner {
    id: number;
    name: string;
    description: string;
    logo: string;
}
const partners: Partner[] = [
    {
        id: 1,
        name: 'Offertoro',
        description: 'Complete fun tasks and offers to earn big!',
        logo: '/offertoro.svg'
    },
    {
        id: 2,
        name: 'Lootably',
        description: 'Engage in activities and see your Robux grow.',
        logo: '/lootably.svg'
    },
    {
        id: 3,
        name: 'AdGatemedia',
        description: 'Discover easy tasks and watch your earnings pile up.',
        logo: '/adgatemedia.svg'
    },
    {
        id: 4,
        name: 'AyetStudio',
        description: 'Simple surveys and offers to boost your Robux balance.',
        logo: '/ayetstudios.svg'
    },
    {
        id: 5,
        name: 'CPX Research',
        description: 'Your opinions matter—earn Robux for every survey!',
        logo: '/cpxresearch.svg'
    },
    {
        id: 6,
        name: 'BitLabs',
        description: 'Take surveys that reward you instantly.',
        logo: '/bitlabs.svg'
    },
]

export default partners;
