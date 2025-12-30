import React from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

/*
  Tailwind reference for classes used on this page (default scale):

  Breakpoints
  sm: = >= 640px (desktop rules start at this width)

  Text sizes
  text-xs  = 0.75rem  (12px)
  text-sm  = 0.875rem (14px)
  text-base= 1rem     (16px)
  text-lg  = 1.125rem (18px)
  text-xl  = 1.25rem  (20px)
  text-2xl = 1.5rem   (24px)
  text-3xl = 1.875rem (30px)
  text-4xl = 2.25rem  (36px)

  Font families / styles
  font-unna        = Unna (serif)
  font-roboto-slab = Roboto Slab (serif)
  italic           = italic style
  font-extralight  = 200

  Text alignment & color
  text-left / text-center / text-right
  text-white, text-gray-400

  Spacing scale (px/py/pt/pb/mt/mb/space-y/gap use the same scale)
  1  = 0.25rem (4px)
  2  = 0.5rem  (8px)
  3  = 0.75rem (12px)
  4  = 1rem    (16px)
  6  = 1.5rem  (24px)
  8  = 2rem    (32px)
  10 = 2.5rem  (40px)
  12 = 3rem    (48px)
  24 = 6rem    (96px)
  28 = 7rem    (112px)
  32 = 8rem    (128px)
  40 = 10rem   (160px)

  Layout / sizing
  max-w-screen-lg = 1024px
  w-full = 100%
  rounded-lg = 0.5rem (8px)
  object-cover = image crops to fill
  hidden / block / flex = display utilities

  Grid
  grid / grid-cols-2 / grid-cols-3 / grid-cols-8 / grid-cols-12
  col-span-* = number of columns to span in the current grid
*/


const Header = () => (
  <div className="w-full max-w-screen-lg mx-auto pt-10 pb-4 sm:pt-32 sm:pb-16 px-6 sm:px-10">
    {/* Desktop Control: sm:text-4xl | Mobile Control: text-2xl */}
    <h2 className="font-unna italic text-2xl sm:text-4xl text-white text-left">
      Engineering biology will <br /> revolutionize the human condition.
    </h2>
  </div>
);

const Panel = () => (
  <div className="max-w-screen-lg mx-auto pt-4 pb-16 px-6 sm:px-10 border-t">
    {/* Desktop Control: sm:text-lg | Mobile Control: text-sm */}
    <h2 className="font-roboto-slab text-sm sm:text-lg text-gray-400 text-left">
      A few first principles toward my North Star:
    </h2>
    <div className="mt-8 space-y-8">
      {bioSections.map((section) => (
        <div key={section.title} className="grid grid-cols-12 gap-x-4 gap-y-2 sm:gap-y-8">
          <div className={section.styles.mobile.imageWrap}>
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              height={400}
              width={400}
              className={section.styles.mobile.image}
            />
          </div>
          <div className={section.styles.mobile.textWrap}>
            {/* Desktop Control */}
            <h3 className={`hidden sm:block ${section.styles.desktop.title}`}>
              {section.title}
            </h3>
            {/* Mobile Control */}
            <h3 className={`sm:hidden ${section.styles.mobile.title}`}>
              {section.title}
            </h3>
            <p className={`sm:hidden ${section.styles.mobile.body}`}>
              {section.body}
            </p>
            <p className={`hidden sm:block ${section.styles.desktop.body}`}>
              {section.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


const bioSections = [
  {
    title: "Life started itself",
    body:
      "Earth-life emerged spontaneously from the primordial earth ~4 billion years ago and evolved itself into brand new phenomenal categories.",
    imageSrc: "/origin_of_life_2.jpg",
    imageAlt: "Life",
    styles: {
      // Mobile Control
      mobile: {
        title: "font-roboto-slab text-base text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-xs mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-2",
      },
      // Desktop Control
      desktop: {
        title: "font-roboto-slab text-xl text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-sm mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-0",
      },
    },
  },
  {
    title: "Evolved within the limit",
    body:
      "That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena — including consciousness itself — strongly suggests our universe is capable of hosting other undiscovered phenomena.",
    imageSrc: "/diversity_of_life_3.jpg",
    imageAlt: "Life",
    styles: {
      // Mobile Control
      mobile: {
        title: "font-roboto-slab text-base text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-xs mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-2",
      },
      // Desktop Control
      desktop: {
        title: "font-roboto-slab text-xl text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-sm mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-0",
      },
    },
  },
  {
    title: "Has potential beyond the limit",
    body:
      "Natural selection was the only game in town, but isn’t the only way. An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.",
    imageSrc: "/intelligent_design_4.jpg",
    imageAlt: "Life",
    styles: {
      // Mobile Control
      mobile: {
        title: "font-roboto-slab text-base text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-xs mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-2",
      },
      // Desktop Control
      desktop: {
        title: "font-roboto-slab text-xl text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-sm mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-0",
      },
    },
  },
  {
    title: "We too are engineerable biology",
    body:
      "We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, human-experience-altering exploration.",
    imageSrc: "/brain_1.jpg",
    imageAlt: "Life",
    styles: {
      // Mobile Control
      mobile: {
        title: "font-roboto-slab text-base text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-xs mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-2",
      },
      // Desktop Control
      desktop: {
        title: "font-roboto-slab text-xl text-white text-left py-1",
        body: "font-roboto-slab font-extralight text-gray-400 text-left text-sm mt-1",
        image: "rounded-lg object-cover",
        imageWrap: "col-span-5",
        textWrap: "col-span-7 flex flex-col justify-center px-0",
      },
    },
  },
];



const summaryOne = {
  title: "So, let’s accelerate bioengineering.",
  body:
    "We’re at the tip of the genetic hyperspace iceberg. The kinds and scales of mechanical and phenomenological entities possible is unimaginable.",
  image: {
    src: "/great_tree_iceberg.jpg",
    alt: "Life",
    mobile: { width: 390, height: 702 },
    desktop: { width: 650, height: 1170 },
  },
  styles: {
    // Mobile Control
    mobile: {
      title: "font-roboto-slab italic text-xl text-white",
      body: "font-roboto-slab font-extralight text-gray-400 text-left text-xs pt-4",
    },
    // Desktop Control
    desktop: {
      title: "font-roboto-slab italic text-xl text-white",
      body: "font-roboto-slab font-extralight text-gray-400 text-left text-sm pt-4",
    },
  },
};

const TextSummary1 = () => (
  <div className="max-w-screen-lg mx-auto pt-8 px-6">
    <div className="grid grid-cols-8 gap-4 border-white">
      <div className="col-span-3 sm:col-span-3 flex items-center pt-6 sm:pt-12">
        {/* Mobile Control */}
        <div className="sm:hidden">
          <Image
            src={summaryOne.image.src}
            alt={summaryOne.image.alt}
            width={summaryOne.image.mobile.width}
            height={summaryOne.image.mobile.height}
            className="rounded-lg"
          />
        </div>
        {/* Desktop Control */}
        <div className="hidden sm:block">
          <Image
            src={summaryOne.image.src}
            alt={summaryOne.image.alt}
            width={summaryOne.image.desktop.width}
            height={summaryOne.image.desktop.height}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="col-span-5 sm:col-span-5 flex flex-col justify-center">
        {/* Mobile Control */}
        <h2 className={`sm:hidden ${summaryOne.styles.mobile.title}`}>
          {summaryOne.title}
        </h2>
        <p className={`sm:hidden ${summaryOne.styles.mobile.body}`}>
          <i>We’re at the tip of the genetic hyperspace iceberg</i>.<br /><br />
          The kinds and scales of mechanical and phenomenological entities possible is unimaginable.
        </p>
        {/* Desktop Control */}
        <h2 className={`hidden sm:block ${summaryOne.styles.desktop.title}`}>
          {summaryOne.title}
        </h2>
        <p className={`hidden sm:block ${summaryOne.styles.desktop.body}`}>
          We’re at the tip of the <i>genetic hyperspace iceberg</i>.<br /><br />
          The kinds and scales of mechanical and phenomenological entities possible is unimaginable.
        </p>
      </div>
    </div>
  </div>
);

const summaryTwo = {
  title: "Powerfully, with AI",
  body:
    "The chaos of biological complexity will almost certainly become best understood by AI. The emergence of LLMs and their success with human language hints at the possibility for new understandings of biology.",
  image: {
    src: "/wizard_bird.jpg",
    alt: "Life",
    mobile: { width: 595, height: 680 },
    desktop: { width: 1190, height: 1360 },
  },
  styles: {
    // Mobile Control
    mobile: {
      title: "font-roboto-slab italic text-xl text-white text-left",
      body: "font-roboto-slab font-extralight text-gray-400 text-left text-xs pt-4",
    },
    // Desktop Control
    desktop: {
      title: "font-roboto-slab italic text-xl text-white text-right",
      body: "font-roboto-slab font-extralight text-gray-400 text-right text-sm pt-4",
    },
  },
};

const TextSummary2 = () => (
  <div className="max-w-screen-lg mx-auto pt-8 px-6 pb-40">
    <div className="grid grid-cols-8 gap-4">
      <div className="col-span-5 sm:col-span-3 flex flex-col justify-center order-1">
        {/* Desktop Control: sm:text-right | Mobile Control: text-left */}
        {/* Mobile Control */}
        <h2 className={`sm:hidden ${summaryTwo.styles.mobile.title}`}>
          {summaryTwo.title}
        </h2>
        <p className={`sm:hidden ${summaryTwo.styles.mobile.body}`}>
          The chaos of biological complexity will almost certainly become best understood by AI.
          <br /><br />
          The emergence of LLMs and their success with human language hints at the possibility for new understandings of biology.
        </p>
        {/* Desktop Control */}
        <h2 className={`hidden sm:block ${summaryTwo.styles.desktop.title}`}>
          {summaryTwo.title}
        </h2>
        <p className={`hidden sm:block ${summaryTwo.styles.desktop.body}`}>
          The chaos of biological complexity will almost certainly become best understood by AI.
          <br /><br />
          The emergence of LLMs and their success with human language hints at the possibility for new understandings of biology.
        </p>
      </div>
      <div className="col-span-3 sm:col-span-5 flex items-center order-2">
        {/* Mobile Control */}
        <div className="sm:hidden">
          <Image
            src={summaryTwo.image.src}
            alt={summaryTwo.image.alt}
            width={summaryTwo.image.mobile.width}
            height={summaryTwo.image.mobile.height}
            className="rounded-lg"
          />
        </div>
        {/* Desktop Control */}
        <div className="hidden sm:block">
          <Image
            src={summaryTwo.image.src}
            alt={summaryTwo.image.alt}
            width={summaryTwo.image.desktop.width}
            height={summaryTwo.image.desktop.height}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

/** Desktop Control */
const ComingSoonDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-12 pb-40 px-6 sm:px-10 border-t">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-unna italic text-center text-3xl text-white">
          Fun javascript model of the origin of life
        </h2>
        <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pl-4 pt-4 pb-8">
          As imagined by Freeman Dyson in his 1985 book, Origns of Life.  
        </p>
        <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pl-4 pt-0 pb-8">
          This toy model treats early life as short chains of monomers drifting in a constrained
          soup. Red and blue sites swap through probabilistic mutations, and the live graph tracks
          how each population rises and falls over time. Move your cursor to perturb the system,
          nudging the particles away like a gentle environmental push. When chains get close enough,
          active sites can seed neighbors, hinting at how local interactions might propagate
          structure. The goal is not realism, but intuition for how simple rules can yield emergent
          patterns.
        </p>
        <div className="mt-0 flex justify-center">
          <iframe
            src="/OOL_Sim/index.html"
            width="135%"
            height="700px"
            style={{ border: "none" }}
            title="Origin of Life Simulation"
          ></iframe>
        </div>
      </div>
      <div className="col-span-0">
        <div className="top-0 left-0 w-96 h-0">
          <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
        </div>
      </div>
    </div>
  </div>
);

/** Mobile Control */
const ComingSoonMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-2 px-6 pb-28">
    <div className="grid grid-cols-8 gap-4 border-t border-white border-b pb-0">
      <div className="col-span-8 flex flex-col pt-10 pb-8">
        <h2 className="font-roboto-slab text-left text-xl text-white">
          Fun simulation of the origin of life
        </h2>
        <p className="font-roboto-slab text-font-extralight text-xs sm:text-sm pt-4">
           As imagined by Freeman Dyson in his 1985 book, <br/> Origns of Life. 
        </p>
        <p className="font-roboto-slab font-extralight text-xs sm:text-sm pt-4 pb-4">
          This toy model treats early life as short chains of monomers drifting in a constrained
          soup. Red and blue sites swap through probabilistic mutations, and the live graph tracks
          how each population rises and falls over time. Move your cursor to perturb the system,
          nudging the particles away like a gentle environmental push. When chains get close enough,
          active sites can seed neighbors, hinting at how local interactions might propagate
          structure. The goal is not realism, but intuition for how simple rules can yield emergent
          patterns.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="w-full" style={{ maxWidth: "350px" }}>
            <iframe
              src="/OOL_Sim_Mobile/index.html"
              width="100%"
              height="700px"
              style={{ border: "none" }}
              title="Origin of Life Simulation (Mobile)"
            />
          </div>
        </div>
        <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pt-6 text-gray-400">
          (Note: For best experience, try a tablet/desktop!)
        </p>
      </div>
    </div>
  </div>
);


const NavPanel = () => (
  <div className="max-w-screen-lg mx-auto pt-10 pb-20 px-10">
    <ul className="grid grid-cols-2 sm:grid-cols-5 gap-10">
      {[
        { href: "/", imgSrc: "/steven.png", text: "Home" },
        { href: "/bioeng", imgSrc: "/bio_eng.jpg", text: "BioEng Ideas" },
        { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs_1950.jpg", text: "Acorn Biolabs" },
        { href: "/podcast", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
        { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" },
      ].map((item, index) => (
        <li key={index} className="md:col-span-1">
          <Link href={item.href}>
            <div className="flex flex-col items-center">
              <Image
                src={item.imgSrc}
                alt={item.text}
                width={150}
                height={150}
                className="rounded-lg w-36 h-auto md:w-full"
              />
              <span className="mt-2 text-sm">{item.text}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function BioEng() {
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <Header />
      <Panel />
      <TextSummary1 />
      <TextSummary2 />
      <ComingSoonDesktop />
      <ComingSoonMobile />
      <NavPanel />
      <Footer />
    </div>
  );
}
