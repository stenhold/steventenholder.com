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
      <a>
        <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg shadow-md" layout="responsive" />
        <span className="mt-2 text-xl font-bold text-white">{text}</span>
      </a>
    </Link>
  </li>
);

// Header component
const Header = () => (
  <div className="text-center mt-20">
    <Image src="/steven.png" alt="Steven ten Holder" width={500} height={300} className="rounded-lg shadow-md" layout="intrinsic" />
    <h2 className="text-3xl font-bold text-white mt-4">Hello, I&#39;m Steven ten Holder</h2>
  </div>
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
    <div className="space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <Header />
      <ImagePanel />
      <Footer />
    </div>
  );
}
