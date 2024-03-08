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
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
        <div className="grid grid-cols-3">

            <div className="col-span-3">
                <h2 className="font-unna italic text-4xl text-white text-left">
                    Should you cryopreserve  <br /> your cells for future longevity?
                </h2>
            </div>

            <div className="col-span-0">
                <div className="top-0 left-0 w-96 h-0">
                    <h2 className="font-unna font-bold italic text-3xl text-white text-left">
                    </h2>
                </div>
            </div>


            <div className="col-span-3">
                <h2 className="font-roboto-slab text-lg text-gray-300 text-left pt-2">
                    A logical cost-benefit analyis says yes. <br /> I co-founded a company called Acorn Biolabs to make it real.
                </h2>
            </div>

            <div className="col-span-3 col-start-1 flex items-center pt-12">
                <Image src="/home-kit-diagram.png" alt="Life" width={800} height={700} className="rounded-lg" layout="intrinsic" />
            </div>

        </div>
    </div>
);

const HeaderMobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-4 px-6">
        <div className="grid grid-cols-3">


            <div className="col-span-3">
                <h2 className="font-unna italic text-4xl text-white text-left">
                    Should you cryopreserve  <br /> your cells for future longevity?
                </h2>
            </div>

            <div className="col-span-0">
                <div className="top-0 left-0 w-96 h-0">
                    <h2 className="font-unna font-bold italic text-3xl text-white text-left">
                    </h2>
                </div>
            </div>


            <div className="col-span-3">
                <h2 className="font-roboto-slab text-lg text-gray-400 text-left pt-8">
                    A logical cost-benefit analyis says yes. <br /> I co-founded a company called Acorn Biolabs to make it real.
                </h2>
            </div>

        </div>
    </div>
);


const TheLogic = () => (
    <div className="max-w-screen-lg mx-auto pt-16 px-6">
        <div className="grid grid-cols-8 gap-2 border-b">
            <div className="col-span-8 flex flex-col justify-center pt-4 pb-20">
                <h2 className="font-roboto-slab text-left text-md text-gray-400">
                    I present, the logical case for young-cell cryopreservation:
                </h2>
                <div className="pt-4 border-t border-white">
                    <h2 className="font-unna text-left font-bold italic text-3xl text-white">
                        Pascal&#39;s Bioengineering Wager
                    </h2>
                    <h2 className="font-unna text-left font-bold italic text-lg text-gray-400">
                        The gamble for life extension available to everyone--today.
                    </h2>
                </div>

                <div className="flex items-center pt-4 pb-4">
                    <Image src="/pascal.png" alt="Life" width={800} height={700} className="rounded-lg" layout="intrinsic" />
                </div>

                <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm pr-20 pt-4">
                    Have you heard of Pascal&#39;s Wager? It&#39;s about as mathematical a reason to believe in God as any.
                    Pascal didn&#39;t rely on evidence or revelation for his argument. Instead, he  stressed the relatively
                    insignificant cost to secure the possibility of an infinitely positive outcome; when the enormities
                    of heaven and hell are at stake, disbelief becomes illogical.
                    <br /> <br />
                    In basic terms, Pascal&#39;s argument is that logically you might as well believe in God.
                    <br /> <br />
                    When the benefit is infinitely positive and the consequence infinitely negative - heaven&amp;hell.
                    Even in the face of uncertainty about the reality of heaven or hell, if the cost to play it safe
                    is low enough you might as well go through the motions and believe! One hour of church once a week
                    isn&#39;t so bad when an infinity of good or bad after death are at stake.
                    <br /><br />
                    Wether or not Pascal&#39;s Wager is actually convincing, his argument&#39;s underlying logic can apply neatly
                    today to human longevity.
                    <br /><br />
                    My bioengineering longevity version goes like this:
                    <br /><br />
                    There are compelling reasons to believe biotechnology is going to continue advancing tremendously in
                    the coming decades and result in radical life-extension. Imagine, for example, using your own cells
                    in a 3D-bioprinter to create a fresh new liver that could save your life. Or modifying the embryological
                    process to generate new organs from individual stem cells for transplant. Both are real strategies already
                    in preliminary proof-of-concept (links here and here) that could lead to substantial health and life-extension
                    improvements. If we can manage to live decades or centuries longer we can bear witness to human civilizational
                    progress over millennial time-scales, upgrade our own intelligence, and join humanity&#39;s incredibly rich
                    technological future into the stars and beyond.
                    <br /><br />
                </p>


                <Image src="/longevity_wager.png" alt="Life" width={600} height={100} className="rounded-lg" layout="intrinsic" />

                <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm pr-20">
                    <br /><br />
                    This is &#39;heaven&#39; in my bio version of Pascal&#39;s Wager.
                    <br /><br />
                    So, what&#39;s the &#39;church&#39;? What&#39;s the low-cost thing we should each be doing to get secure our spot in this possible heaven?
                    <br /><br />
                    Well, there&#39;s trouble in paradise - an original sin, of sorts.
                    <br /><br />
                    The quality of the cells you start with might matter a lot and we&#39;re all getting old, fast.
                    <br /><br />
                    Imagine yourself decades from now as an old fart donating your stem cells to be grown and used in 3D-bioprinting to create your new liver, or heart, or skin, or kidney, or neurons. Your stem cells suck because you&#39;re old. Your granddaughter is happy to donate her healthy young stem cells, but the doctors tell you that your immune system won&#39;t accept. If only you had… BANKED YOUR OWN STEM CELLS FOR YOURSELF WHEN YOU WERE YOUNG.
                    <br /><br />
                    This is &#39;church&#39; in my bio version of Pascal&#39;s Wager.
                    <br /><br />
                    It doesn&#39;t cost you that much to arrange to have your young cells preserved for a lifetime. It&#39;s called Acorn Biolabs and it&#39;s the startup I started and co-created with Drew Taylor and Patrick Pumputis
                    In our lifetimes scientists will have created bio-engineering solutions powerful enough to improve our lifespans using preserved young cellular material. It really matters whether you preserved your cells or not because you&#39;re risking the worst possible outcome: missing out on the opportunity to continue doing the things you love indefinitely.
                    That&#39;s pretty powerful. Is it more or less convincing than the original wager? It becomes personal to each of us to look at the facts, what we believe in, what we want out of life, and how much we feel there&#39;s a real opportunity for bio-engineering to achieve something.

                </p>
            </div>
        </div >
    </div>
);



const ArchiveSection = () => (
    <div className="mx-auto mt-20 max-w-4xl space-y-20">
        {/* Title #2 - FROM THE ARCHIVES */}
        <div className="text-center">
            <h1 className="text-3xl font-bold">FROM THE ARCHIVES:</h1>
        </div>

        {/* Archives #1 - Acorn as an incubating startup */}
        <div>
            <h1 className="text-3xl font-bold mb-4">
                Acorn as an incubating startup in Waterloo, 2017.
            </h1>
            <Image src="/images/velocity_garage.jpg" alt="Velocity Garage" width={500} height={300} className="mx-auto" />
            <div className="mt-10">
                <audio controls>
                    <source src="/audio/ten_with_ken_Steven_interview.mp3" type="audio/mpeg" />
                </audio>
                <p className="mt-4">
                    I gave an interview for a university review podcast (Ten with Ken) on the Velocity startup ecosystem at the University of Waterloo back when I was the CEO of Acorn in 2017.
                </p>
            </div>
        </div>

        {/* Repeat similar structure for other archive entries as needed */}
    </div>
);


const TextSummary2 = () => (
    <div className="grid grid-cols-8 gap-4 max-w-screen-lg mx-auto px-6 pt-16">
        {/* Text content beside the image */}
        <div className="col-span-3 flex flex-col justify-center">
            <h2 className="font-unna font-bold italic text-right text-3xl text-white">
                Powerfully, with AI
            </h2>
            <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm pr-4 pt-4 text-right">
                The chaos of biological complexity will almost certainly become best understood by AI.
                <br /><br />
                The emergence of LLMs and their success with human language hints at the possiblity for new understandings of biology.
            </p>
        </div >
        {/* Image taking up the vertical space equivalent to two rows */}
        <div className="col-span-5 flex items-center">
            <Image src="/wizard_bird.jpg" alt="Life" width={700} height={800} className="rounded-lg" layout="intrinsic" />
        </div>
    </div >
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
    <footer className="italic p-10 bg-black w-full text-center text-white">
        the year is <b>2024</b>
        <p> all images generated via tireless midjourney prompting. </p>
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <HeaderDesktop />
            <HeaderMobile />
            <TheLogic />
            <ArchiveSection />
            <TextSummary2 />
            <NavPanel />
            <Footer />
        </div>
    );
}
