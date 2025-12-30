// pages/archive.tsx

import React from "react";
import Image from "next/image";
import Footer from "../components/Footer"; 
import Link from "next/link";

const archiveItems = [
  {
    number: "1.",
    imageSrc: "/origin_of_life_2.jpg",
    body:
      "Earth-life emerged spontaneously and evolved itself into living diversity and brand new phenomenal categories.",
  },
  {
    number: "2.",
    imageSrc: "/diversity_of_life_3.jpg",
    body:
      "That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena -- including consciousness itself -- strongly suggests our universe is capable of hosting other undiscovered phenomena.",
  },
  {
    number: "3.",
    imageSrc: "/intelligent_design_4.jpg",
    body:
      "An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.",
  },
  {
    number: "4.",
    imageSrc: "/brain_1.jpg",
    body:
      "We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, revolutionary exploration of the limits of what is possible from our universe.",
  },
];

const archiveStyles = {
  // Mobile Control
  mobile: {
    number: "font-unna font-bold italic text-3xl text-white",
    body: "font-roboto-slab font-extralight text-left text-xs sm:text-sm sm:pr-28 pr-0",
    image: "rounded-lg object-cover",
  },
  // Desktop Control
  desktop: {
    number: "font-unna font-bold italic text-3xl text-white",
    body: "font-roboto-slab font-extralight text-left text-xs sm:text-sm sm:pr-28 pr-0",
    image: "rounded-lg object-cover",
  },
};

/** 
 * Simple grid layout of images and text.
 * This is your main "archive" content block.
 */
const ImageBesideText = () => (
  <div className="max-w-screen-lg mx-auto py-4 px-6 sm:px-10">
    <div className="grid grid-cols-12 gap-y-12 gap-x-2">
      {archiveItems.map((item) => (
        <React.Fragment key={item.number}>
          <div className="col-span-1 flex items-center">
            {/* Mobile Control */}
            <span className={archiveStyles.mobile.number}>{item.number}</span>
          </div>
          <div className="col-span-5">
            <Image
              src={item.imageSrc}
              alt="Life"
              height={350}
              width={350}
              className={archiveStyles.mobile.image}
            />
          </div>
          <div className="col-span-6 flex items-center">
            <p className={archiveStyles.mobile.body}>
              {item.body}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

/**
 * Optionally, you can include a small nav panel or links to other pages 
 * if you want consistency with your other pages. (Sample below.)
 */
// const NavPanel = () => (
//   <div className="max-w-screen-lg mx-auto pt-10 pb-10 px-10">
//     <ul className="grid grid-cols-2 sm:grid-cols-5 gap-10">
//       {[
//         { href: "/", imgSrc: "/steven.png", text: "Home" },
//         { href: "/bioeng", imgSrc: "/bio_eng.jpg", text: "BioEng Ideas" },
//         { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs_1950.jpg", text: "Acorn Biolabs" },
//         { href: "/podcast", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
//         { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" },
//       ].map((item, index) => (
//         <li key={index} className="md:col-span-1">
//           <Link href={item.href}>
//             <div className="flex flex-col items-center">
//               <Image
//                 src={item.imgSrc}
//                 alt={item.text}
//                 width={150}
//                 height={150}
//                 className="rounded-lg w-36 h-auto md:w-full"
//               />
//               <span className="mt-2 text-sm">{item.text}</span>
//             </div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

export default function ArchivePage() {
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <ImageBesideText />

      {/*
      <NavPanel />
      <Footer />
      */}
    </div>
  );
}
