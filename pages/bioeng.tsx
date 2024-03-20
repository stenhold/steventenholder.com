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
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-16 px-6 sm:px-10">
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

const HeaderMobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-12 px-6">
        <div className="grid grid-cols-3">

            <div className="col-span-3">
                <h2 className="font-unna font-bold italic text-3xl text-white text-left">
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




// PanelDesktop for larger screens
const PanelDesktop = () => (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-4 pb-4 px-6 sm:px-10 border-t">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4">

            {/* Introduction */}
            <div className="col-span-12">
                <h2 className="font-unna font-bold text-lg text-gray-400 text-left">
                    A few first principles toward my North Star:
                </h2>
            </div>

            {/* Section 1 */}
            <div className="col-span-5 row-span-3">
                <Image src="/origin_of_life_2.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-6 row-span-3 flex flex-col justify-center">
                <div className="mb-4">
                    <span className="font-roboto-slab font-bold text-2xl text-white">Life started itself </span>
                </div>
                <div>
                    <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
                        Earth-life emerged spontaneously from the primordial earth ~4 billion years ago and evolved itself into brand new phenomenal categories. <br /><br />
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="col-span-5 row-span-3">
                <Image src="/neurons_background.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-6 row-span-3 flex flex-col justify-center">
                <div className="mb-4">
                    <span className="font-roboto-slab font-bold text-2xl text-white"> Evolved within the limit </span>
                </div>
                <div>
                    <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
                        That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena
                        -- including consciousness itself -- strongly suggests our universe is capable of hosting other undiscovered phenomena.
                        .</p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="col-span-5 row-span-3">
                <Image src="/intelligent_design_4.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-6 row-span-3 flex flex-col justify-center">
                <div className="mb-4">
                    <span className="font-roboto-slab font-bold text-2xl text-white"> Has potential beyond the limit </span>
                </div>
                <div>
                    <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
                        Natural selection was the only game in town, but isn&#39;t the only way. <br /><br />
                        An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.</p>
                </div>
            </div>

            {/* Section 4 */}
            <div className="col-span-5 row-span-3">
                <Image src="/brain_1.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            </div>
            <div className="col-span-6 row-span-3 flex flex-col justify-center">
                <div className="mb-4">
                    <span className="font-roboto-slab font-bold text-2xl text-white"> We too are engineerable biology </span>
                </div>
                <div>
                    <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
                        We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate,
                        human-experience-altering exploration.</p>
                </div>
            </div>


        </div>
    </div>
);

// PanelMobile
const PanelMobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto py-4 px-6 border-t">
        <div className="flex flex-col gap-y-12">
            <div className="col-span-12 mt-2">
                <h2 className="font-unna font-bold italic text-lg text-gray-400 leading-tight text-center">
                    First, a short story of first principles<br /> toward a North Star:
                </h2>
            </div>

            {/* Section 1 */}
            <div className="flex flex-col items-center">
                <Image src="/origin_of_life_2.jpg" alt="Life" height={400} width={400} className="rounded-lg" />
                <span className="font-unna font-bold italic text-3xl text-white">Life started itself</span>
                <p className="font-roboto-slab font-extralight text-center text-xs px-2">
                    Earth-life emerged spontaneously and evolved itself into living diversity and brand new phenomenal categories.
                </p>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col items-center">
                <Image src="/diversity_of_life_3.jpg" alt="Life" height={400} width={400} className="rounded-lg" />
                <span className="font-unna font-bold italic text-3xl text-white">Evolved within the limit </span>
                <p className="font-roboto-slab font-extralight text-center text-xs px-2">
                    That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena
                    -- including consciousness itself -- strongly suggests our universe is capable of hosting other undiscovered phenomena.
                </p>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col items-center">
                <Image src="/intelligent_design_4.jpg" alt="Life" height={400} width={400} className="rounded-lg" />
                <span className="font-unna font-bold italic text-3xl text-white"> Can evolve un-constrained </span>
                <p className="font-roboto-slab font-extralight text-centner text-xs px-2">
                    An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.
                </p>
            </div>
            {/* Section 4 */}
            <div className="flex flex-col items-center pb-0">
                <Image src="/brain_1.jpg" alt="Life" height={400} width={400} className="rounded-lg" />
                <span className="font-unna font-bold italic text-3xl text-white"> We are also bioengineerable</span>
                <p className="font-roboto-slab font-extralight text-center text-xs px-2">
                    We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate,
                    human-experience-altering exploration.</p>
            </div>
        </div>
    </div>
);



const TextSummary1 = () => (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-8 px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-8 gap-4 border-t border-white">
            {/* Image taking up the vertical space equivalent to two rows */}
            <div className="col-span-3 col-start-1 flex items-center pt-12">
                <Image src="/great_tree_iceberg.jpg" alt="Life" width={500} height={900} className="rounded-lg" layout="intrinsic" />
            </div>
            {/* Text content beside the image */}
            <div className="col-span-5 flex flex-col justify-center">
                <h2 className="font-unna font-bold italic text-2xl pl-2 text-white">
                    So, let&#39;s accelerate bioengineering.
                </h2>
                <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm pl-2 pt-4">
                    We&#39;re at the tip of the <i>genetic hyperspace iceberg</i>. <br /><br />
                    The kinds and scales of mechanical and phenomenological entities is near.
                    <br /> <br />
                </p>
            </div>
        </div>
    </div>
);


const TextSummary1Mobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-8 px-6">
        <div className="flex flex-col items-center">
            <div className="pb-8">
                <Image src="/great_tree_iceberg.jpg" alt="Life" width={300} height={540} className="rounded-lg" layout="intrinsic" />
            </div>
            <div>
                <h2 className="font-unna font-bold italic text-xl text-white text-center">
                    So, let&#39;s accelerate bioengineering.
                </h2>
                <p className="font-roboto-slab font-extralight text-gray-400 text-center text-sm pt-4">
                    We&#39;re at the tip of the <i>genetic hyperspace iceberg</i>.<br /><br />
                    The kinds and scales of mechanical and phenomenological entities are near.
                </p>
            </div>
        </div>
    </div>
);


const TextSummary2 = () => (
    <div className="hidden sm:block">
        <div className="grid grid-cols-8 gap-4 max-w-screen-lg mx-auto px-6 pb-12">
            {/* Text content beside the image */}
            <div className="col-span-3 flex flex-col justify-center">
                <h2 className="font-unna font-bold italic text-right text-2xl pr-2 text-white">
                    Powerfully, with AI
                </h2>
                <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm pr-2 pt-4 text-right">
                    The chaos of biological complexity will almost certainly become best understood by AI.
                    <br /><br />
                    The emergence of LLMs and their success with human language hints at the possiblity for new understandings of biology.
                </p>
            </div >
            <div className="col-span-5 flex items-center">
                <Image src="/wizard_bird.jpg" alt="Life" width={700} height={800} className="rounded-lg" layout="intrinsic" />
            </div>
        </div >
    </div>
);


const TextSummary2Mobile = () => (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-8 px-6">
        <div className="flex flex-col items-center">
            <div className="pb-8">
                <div>
                    <Image src="/wizard_bird.jpg" alt="Life" width={350} height={400} className="rounded-lg" layout="intrinsic" />
                </div>
                <h2 className="font-unna font-bold italic text-xl text-white text-center pt-8">
                    Powerfully, with AI
                </h2>
                <p className="font-roboto-slab font-extralight text-gray-400 text-center text-sm pt-4">
                    The chaos of biological complexity will almost certainly become best understood by AI.<br /><br />
                    The emergence of LLMs and their success with human language hints at the possibility for new understandings of biology.
                </p>
            </div>
        </div>
    </div>
);



const ComingSoon = () => (
    <div className="max-w-screen-lg mx-auto pt-16 px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-8 gap-4 border-t border-white border-b">
            {/* Text content beside the image */}
            <div className="col-span-8 flex flex-col justify-center pt-20 pb-20">
                <h2 className="font-unna text-center font-bold italic text-3xl text-white">
                    I&#39;ll upload progress here as I go.
                </h2>
                <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pl-4 pt-4">
                    Javascript model of the origin of life coming soon. <br />
                    But for now hang tight. I&#39;m just one guy learning and building as much as possible, you know.
                    <br /> <br />
                </p>
            </div>
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
            <PanelDesktop />
            <PanelMobile />
            <TextSummary1 />
            <TextSummary1Mobile />
            <TextSummary2 />
            <TextSummary2Mobile />
            <ComingSoon />
            <NavPanel />
            <Footer />
        </div>
    );
}
