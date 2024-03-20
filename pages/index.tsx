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

// Use the ImageLinkProps interface for the ImageLink component's props
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
  <div className="text-left px-10 mt-20">
    <Image src="/steven.png" alt="Steven ten Holder" width={700} height={700} className="rounded-lg" />
    <h2 className="text-3xl font-unna font-bold text-white mt-8">
      Hello, I&apos;m Steven ten Holder
    </h2>
    <div style={{ maxWidth: '450px' }}> {/* Wrap the paragraph in a div for alignment */}
      <p className="font-roboto-slab text-gray-400 text-left text-xs sm:text-sm">
        <span className="font-unna text-lg text-gray-400">
          I&apos;m believe engineering biology will help civilization thrive. <br /><br /></span>
        Human longevity first. Intelligence next.
        <br />
        Currently I&apos;m exploring how LLMs can empower bio-engineering.
        <br /><br />
        I also have fun creating music, experimenting with cinematography,
        podcasting, skateboarding and snowboarding in Vancouver, BC.
        <br />
        <br />
        <br />
        <span className="font-roboto-slab text-gray-500 text-left text-xs sm:text-xsm">
          <i>
            If you&apos;d like to chat:
            steve.tenholder@gmail.com
          </i>
        </span>
      </p>
    </div>
  </div >
);

// ImagePanel for the first row
const ImagePanelFirstRow = () => (
  <div className="max-w-screen-lg mx-auto py-10">
    <ul className="grid grid-rows-1 grid-cols-2 gap-20 m-10 mb-0">
      <ImageLink
        href="/bioeng"
        imgSrc="/bio_eng.jpg"
        text="Bioengineering Ideas"
        gridClass="col-span-2 sm:col-span-1"
      />
      <ImageLink
        href="/acorn-biolabs"
        imgSrc="/acorn_biolabs_1950.jpg"
        text="Acorn Biolabs"
        gridClass="col-span-2 sm:col-span-1"
      />
    </ul>
  </div>
);

// ImagePanel for the second row with potentially different rules or styles
const ImagePanelSecondRow = () => (
  <div className="max-w-screen-lg mx-auto py-4">
    <ul className="grid grid-rows-1 grid-cols-2 gap-20 m-10 mt-2">
      <ImageLink
        href="/podcast"
        imgSrc="/podcast_conversations.jpg"
        text="Podcast"
        gridClass="col-span-2 sm:col-span-1"
      />
      <ImageLink
        href="/blog"
        imgSrc="/blog.jpg"
        text="Blog"
        gridClass="col-span-2 sm:col-span-1"
      />
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
      <Header />
      <ImagePanelFirstRow />
      <ImagePanelSecondRow />
      <Footer />
    </div>
  );
}
