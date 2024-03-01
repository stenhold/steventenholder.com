import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Header component
const Header = () => (
  <div className="text-center mt-20">
    <Image src="/steven.png" alt="Steven ten Holder" width={500} height={300} className="rounded-lg shadow-md" layout="intrinsic" />
    <h2 className="text-3xl font-bold text-white mt-4">Hello, I'm Steven ten Holder</h2>
  </div>
);

// ImageLink component adjusted to receive grid placement classes
const ImageLink = ({ href, imgSrc, text, gridClass }) => (
  <li className={`flex-none ${gridClass}`}>
    <Link href={href} passHref>
      <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg shadow-md" layout="responsive" />
      <span className="mt-2 text-xl font-bold text-white">{text}</span>
    </Link>
  </li>
);

// Updated ImagePanel component for two-row layout
const ImagePanel = () => (
  <div className="max-w-screen-lg mx-auto py-20">
    <ul className="grid grid-rows-2 grid-cols-2 gap-20 m-20">
      <ImageLink
        href="/bioengineering-ideas"
        imgSrc="/davinci.jpg"
        text="Bioengineering Ideas"
        gridClass=""
      />
      <ImageLink
        href="/acorn-biolabs"
        imgSrc="/acorn_biolabs.jpg"
        text="Acorn Biolabs"
        gridClass=""
      />
      {/* Adjust the gridClass if needed to explicitly place items, but in this simple layout, it may not be necessary */}
      <ImageLink
        href="/podcasts"
        imgSrc="/podcast_conversations.jpg"
        text="Podcast"
        gridClass=""
      />
      <ImageLink
        href="/blog"
        imgSrc="/blog.jpg"
        text="Blog"
        gridClass=""
      />
    </ul>
  </div>
);


// Footer component
const Footer = () => (
  <footer className="p-10 mt-4 bg-black w-full text-center text-white">
    the year is 2024
  </footer>
);

// Adjust the main container of your Home component
export default function Home() {
  return (
    // Adjusted classes: Removed 'px-4 m-4' to prevent overflow and applied 'overflow-x-hidden' to hide any accidental horizontal overflow
    <div className="space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <Header />
      <ImagePanel />
      <Footer />
    </div>
  );
}
