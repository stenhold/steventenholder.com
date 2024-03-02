import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define an interface for the ImageLink props
interface ImageLinkProps {
    href: string;
    imgSrc: string;
    text: string;
    gridClass?: string; // Make gridClass optional as it might not always be provided
}

// Use the ImageLinkProps interface for the ImageLink component&#39;s props
const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
    <li className={`flex-none ${gridClass}`}>
        <Link href={href} passHref>
            <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" />
            <span className="mt-2 text-xl font-bold text-white">{text}</span>
        </Link>
    </li>
);

// Header component
const Header = () => (
    <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-white mt-4">Engineering biology will revolutionize the human condition.</h2>
        <div className="flex justify-center">
            <Image src="/growing_neurons_8mb.gif" alt="Growing Neurons" width={500} height={300} className="rounded-lg mt-4" />
        </div>
    </div>
);


const NeuronLayout = () => {
    return (
        <div className="min-h-screen flex">
            {/* Neuron image background covering 1/3 of the screen */}
            <div className="w-1/3 h-full bg-neurons-background bg-cover bg-no-repeat bg-left-top">
                {/* Background image is set through inline style with Tailwind */}
            </div>

            {/* Text content to the right of the image */}
            <div className="w-2/3 flex flex-col justify-center p-8 space-y-4">
                <h1 className="text-2xl font-bold text-white">
                    Engineering Biology
                </h1>
                <p className="text-white">
                    Earth-life emerged spontaneously and evolved itself into the mindboggling diversity we see today.
                </p>
                <p className="text-white">
                    That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena...
                </p>
                {/* More text elements as needed */}
            </div>
        </div>
    );
};




const ContentLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-8">
                <ul className="space-y-8 md:space-y-0 md:grid md:grid-rows-3 md:col-span-2 md:pl-12">
                    <li className="text-m text-white">
                        <div className="border border-gray-400 p-4 rounded-lg flex">
                            <Image src="/neurons_background.jpg" alt="Biology" width={50} height={50} className="rounded-full mr-4" />
                            <p> Earth-life emerged spontaneously and evolved itself into the mindboggling diversity we see today.</p>
                        </div>
                    </li>
                    <li className="text-m text-white">
                        <div className="border border-gray-400 p-4 rounded-lg flex">
                            <Image src="/neurons_background.jpg" alt="Biology" width={50} height={50} className="rounded-full mr-4" />
                            <p> That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena --
                                including consciousness itself -- strongly suggests our universe is capable of hosting other undiscovered phenomena.</p>
                        </div>
                    </li>
                    <li className="text-m text-white">
                        <div className="border border-gray-400 p-4 rounded-lg flex">
                            <Image src="/neurons_background.jpg" alt="Biology" width={50} height={50} className="rounded-full mr-4" />
                            <p> An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.
                                We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, revolutionary exploration of the limits of what is possible from our universe.</p>
                        </div>
                    </li>
                </ul>
                <div className="md:col-span-1 text-l text-white">
                    There&#39;s a certain excitement around the recent achievements and growth of computation. No other new field of science has produced an engineering platform as productivity-boosting and lifestyle-enhancing as it. We&#39;re confident it will continue to be improved and generate new phenomena, including the exciting possibility of general artificial intelligence. However, a head-to-head comparison with the astounding capabilities of existing biological systems serves to remind us to appreciate how powerful that operating system can be.
                </div>
            </div>
        </div>
    );
};



// ImagePanel for the second row with potentially different rules or styles
const ImagePanelSecondRow = () => (
    <div className="max-w-screen-lg mx-auto py-10">
        <ul className="grid grid-rows-1 grid-cols-2 gap-20 m-10 mt-2">
            {[
                { href: "/podcasts", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
                { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" },
            ].map((item, index) => (
                <ImageLink
                    key={index}
                    href={item.href}
                    imgSrc={item.imgSrc}
                    text={item.text}
                    gridClass="col-span-2 md:col-span-1"
                />
            ))}
        </ul>
    </div>
);

const FullImageGrid = () => (
    <div className="max-w-screen-lg mx-auto py-10 mr-10 ml-10">
        <div className="grid grid-cols-2 gap-10">
            <Image src="/neurons_background.jpg" alt="Neuron Research" height={500} width={500} objectFit="cover" className="rounded-lg" />
            <Image src="/bio_eng_2.jpg" alt="Brain Enhancements" height={500} width={500} objectFit="cover" className="rounded-lg" />
        </div>
    </div>
);

const TextGrid = () => (
    <div className="max-w-screen-lg mx-auto py-10 mr-10 ml-10">
        <div className="grid grid-cols-2 gap-10">
            <div objectFit="cover" className="rounded-lg">
                This is text
            </div>
            <div objectFit="cover" className="rounded-lg">
                This is text 2
            </div>
        </div>
    </div>
);



// Footer component
const Footer = () => (
    <footer className="italic p-10 mt-4 bg-black w-full text-center text-white">
        the year is <b>2024</b> and I hereby declare copyright the content on this site.
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <Header />
            <ContentLayout />
            <ImagePanelSecondRow />
            <NeuronLayout />
            <FullImageGrid />
            <TextGrid />
            <Footer />
        </div>
    );
}
