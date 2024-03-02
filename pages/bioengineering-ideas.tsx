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
            <div>
                This is text
            </div>
            <div>
                This is text 2
            </div>
        </div>
    </div>
);




// ImagePanel for the second row with potentially different rules or styles
const NavPanel = () => (
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



// Footer component
const Footer = () => (
    <footer className="italic p-10 mt-4 bg-black w-full text-center text-white">
        the year is <b>2024</b>
        <p> all images generated via tireless midjourney prompting. </p>
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <Header />
            <FullImageGrid />
            <TextGrid />
            <NavPanel />
            <Footer />
        </div>
    );
}
