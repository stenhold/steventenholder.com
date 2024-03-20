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
                <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" layout="responsive" />
                <span className="block text-center mt-2">{text}</span>
            </div>
        </Link>
    </li>
);


const HeaderDesktop = () => (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-20 pb-16 px-6 sm:px-10">
        <div className="grid grid-cols-3">
            <div className="col-span-3">
                <h2 className="font-unna italic text-4xl text-white text-left">
                    Casual conversations with friends.
                </h2>
            </div>
            <div className="col-span-3">
                <h2 className="font-roboto-slab text-lg text-gray-300 text-left pt-2">
                    Podcast is the new blog: conversations on display.
                </h2>
            </div>

            <div className="col-span-3 col-start-1 flex items-center pt-8">
                <Image src="/podcast_convos.jpg" alt="Life" width={800} height={700} className="rounded-lg" layout="intrinsic" />
            </div>
        </div >
    </div >
);

const HeaderMobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-4 px-6">
        <div className="grid grid-cols-3">
            <div className="col-span-3">
                <h2 className="font-unna italic text-4xl text-white text-left">
                    Casual conversations with friends.
                </h2>
            </div>
            <div className="col-span-3">
                <h2 className="font-roboto-slab text-lg text-gray-300 text-left pt-2">
                    Podcast is the new blog: <br /> conversations on display.
                </h2>
            </div>
            <div className="col-span-3 col-start-1 flex items-center pt-12">
                <Image src="/podcast_convos.jpg" alt="Life" width={800} height={700} className="rounded-lg" layout="intrinsic" />
            </div>
        </div>
    </div>
);




const ComingSoonDesktop = () => (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-8 px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-8 gap-4 border-t border-white border-b">
            {/* Text content beside the image */}
            <div className="col-span-8 flex flex-col justify-center pt-12 pb-12">
                <h2 className="font-unna text-center font-bold italic text-3xl text-white">
                    I have many more <br /> conversations to upload.
                </h2>
                <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pt-4">
                    Coming soon, but for now please enjoy what I have up:
                </p>
            </div>
        </div>
    </div>
);


const ComingSoonMobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-12 px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-8 gap-4 border-t border-white border-b">
            {/* Text content beside the image */}
            <div className="col-span-8 flex flex-col justify-center pt-12 pb-12">
                <h2 className="font-unna text-center font-bold italic text-2xl text-white">
                    I have many more <br /> conversations to upload.
                </h2>
                <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pt-4">
                    Coming soon, but for now please enjoy what I have up:
                </p>
            </div>
        </div>
    </div>
);



const PodcastsDesktop = () => (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-14 pb-16 px-6 sm:px-10">
        <div className="grid grid-cols-6 gap-10">
            <div className="col-span-3">
                <h1 className="font-unna text-2xl pt-20 pb-4">
                    On Apple Podcasts
                </h1>
                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *"
                    height="450"
                    className="w-full overflow-hidden bg-transparent"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/chemical-conversations/id1569555415">
                </iframe>
            </div >
            <div className="col-span-3">
                <h1 className="font-unna text-2xl pt-20 pb-2">
                    On Spotify Podcasts
                </h1>
                <iframe
                    src="https://open.spotify.com/embed/show/3HAx176OOvVFrMSu7IyHvX?theme=0"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="mt-4">
                </iframe>
            </div >
        </div>
    </div>
);

const PodcastsMobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-4 px-6 sm:px-10">
        <div className="grid grid-cols-3 gap-10">
            <div className="col-span-3">
                <h1 className="font-unna text-2xl pt-4 pb-4">
                    On Apple Podcasts
                </h1>
                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *"
                    height="450"
                    className="w-full overflow-hidden bg-transparent"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/chemical-conversations/id1569555415">
                </iframe>
            </div >
            <div className="col-span-3">
                <h1 className="font-unna text-2xl pt-8 pb-2">
                    On Spotify Podcasts
                </h1>
                <iframe
                    src="https://open.spotify.com/embed/show/3HAx176OOvVFrMSu7IyHvX?theme=0"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="mt-4">
                </iframe>
            </div >
        </div>
    </div>
);






// ImagePanel for the second row with potentially different rules or styles
const NavPanel = () => (
    <div className="max-w-screen-lg mx-auto pt-40 pb-20 px-10">
        <ul className="grid grid-cols-2 sm:grid-cols-5 gap-10">
            {[
                { href: "/", imgSrc: "/steven.png", text: "Home" },
                { href: "/bioeng", imgSrc: "/bio_eng.jpg", text: "BioEng Ideas" },
                { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs_1950.jpg", text: "Acorn Biolabs" },
                { href: "/podcast", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
                { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" }
            ].map((item, index) => (
                <li key={index} className="md:col-span-1">
                    <Link href={item.href} passHref>
                        <div className="flex flex-col items-center">
                            <Image src={item.imgSrc} alt={item.text} width={150} height={150} className="rounded-lg w-36 h-auto md:w-full" layout="intrinsic" />
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
    <footer className="italic p-10 mt-4 bg-black w-full text-center text-gray-600">
        the year is <span className="text-gray-400"><b>2024</b></span>
        <p> all images generated via tireless midjourney prompting </p>
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <HeaderDesktop />
            <HeaderMobile />
            <ComingSoonDesktop />
            <ComingSoonMobile />
            <PodcastsDesktop />
            <PodcastsMobile />
            <NavPanel />
            <Footer />
        </div>
    );
}
