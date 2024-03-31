
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




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



// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <ImageBesideText />
        </div>
    );
}