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
    <li className={`flex-none ${gridClass} w-full sm:w-auto`}>
        <Link href={href} passHref>
            <div className="block">
                <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" layout="responsive"/>
                <span className="block text-center mt-2">{text}</span>
            </div>
        </Link>
    </li>
);


const Header2 = () => (
    <div className="max-w-screen-lg mx-auto pt-10 px-6 sm:px-10">
        <div className="grid grid-cols-3">

            <div className="col-span-3">
                <h2 className="font-unna font-bold italic text-4xl text-white text-left">
                    Engineering biology will <br /> revolutionize the human condition.
                </h2>
            </div>

            <div className="col-span-0">
                <div className="top-0 left-0 w-96 h-0">
                    <h2 className="font-unna font-bold italic text-3xl text-white text-left">
                    </h2>
                </div>
            </div>

        </div>
    </div>
);



const ImageBesideText = () => (
    <div className="max-w-screen-lg mx-auto py-4 px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-y-12 gap-x-2">

            {/* Number */}
                <div className="col-span-1 flex items-center">
                    <span className="font-unna font-bold italic text-3xl text-white">1.</span>
                </div>
            {/* Image */}
                <div className="col-span-5">
                    <Image src="/origin_of_life_2.jpg" alt="Life" height={350} width={350} objectFit="cover" className="rounded-lg" />
                </div>
            {/* Text */}
                <div className="col-span-6 flex items-center">
                    <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm sm:pr-28 pr-0">
                        Earth-life emerged spontaneously and evolved itself into living diversity and brand new phenomenal categories.<br /><br />
                    </p>
                </div>



            {/* Number */}
                <div className="col-span-1 flex items-center">
                    <span className="font-unna font-bold italic text-3xl text-white">2.</span>
                </div>
            {/* Image */}
                <div className="col-span-5">
                    <Image src="/diversity_of_life_3.jpg" alt="Life" height={350} width={350} objectFit="cover" className="rounded-lg" />
                </div>
            {/* Text */}
                <div className="col-span-6 flex items-center">
                    <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm sm:pr-28 pr-0">
                        That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena 
                        -- including consciousness itself -- strongly suggests our universe is capable of hosting other undiscovered phenomena.
                    </p>
                </div>

            {/* Number */}
                <div className="col-span-1 flex items-center">
                    <span className="font-unna font-bold italic text-3xl text-white">3.</span>
                </div>
            {/* Image */}
                <div className="col-span-5">
                    <Image src="/intelligent_design_4.jpg" alt="Life" height={350} width={350} objectFit="cover" className="rounded-lg" />
                </div>
            {/* Text */}
                <div className="col-span-6 flex items-center">
                    <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm sm:pr-28 pr-0">
                        An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.
                    </p>
                </div>

            {/* Number */}
            <div className="col-span-1 flex items-center">
                    <span className="font-unna font-bold italic text-3xl text-white">4.</span>
                </div>
            {/* Image */}
                <div className="col-span-5">
                    <Image src="/brain_1.jpg" alt="Life" height={350} width={350} objectFit="cover" className="rounded-lg" />
                </div>
            {/* Text */}
                <div className="col-span-6 flex items-center">
                <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm sm:pr-28 pr-0">
                        We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, revolutionary exploration of the limits of what is possible from our universe.
                    </p>
                </div>
        </div>
    </div>
);








// ImagePanel for the second row with potentially different rules or styles
const NavPanel = () => (
    <div className="max-w-screen-lg mx-auto pt-40 pb-20">
        <ul className="grid grid-cols-2 sm:grid-cols-5 gap-10">
            {[
                { href: "/", imgSrc: "/steven.png", text: "Home" },
                { href: "/bioengineering-ideas", imgSrc: "/bio_eng.jpg", text: "BioEng Ideas" },
                { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs_1950.jpg", text: "Acorn Biolabs" },
                { href: "/podcast", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
                { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" }
            ].map((item, index) => (
                <li key={index} className="md:col-span-1">
                  <Link href={item.href} passHref>
                    <div className="flex flex-col items-center">
                      <Image src={item.imgSrc} alt={item.text} width={150} height={150} className="rounded-lg w-36 h-auto md:w-full" layout="intrinsic"/>
                      <span className="mt-2 text-sm">{item.text}</span>
                    </div>
                  </Link>
                </li>
            ))}
        </ul>
    </div>
);


// Footer component
const Footer = () => (
    <footer className="italic p-10 bg-black w-full text-center text-white">
        the year is <b>2024</b>
        <p> all images generated via tireless midjourney prompting. </p>
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <Header2 />
            <ImageBesideText />
            <NavPanel />
            <Footer />
        </div>
    );
}
