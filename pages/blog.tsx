// pages/blog.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import the shared Footer from your components folder instead of redefining it
import Footer from "../components/Footer";

/** Desktop blog content */
const BlogDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-8 px-6">
    {/* Grid layout */}
    <div className="grid grid-cols-8 gap-4 border-t border-b pb-14 border-white">
      {/* Left-side image */}
      <div className="col-span-3 col-start-1 flex items-center pt-12">
        <Image
          src="/blog_cosmos.jpg"
          alt="Blog cosmos"
          width={500}
          height={900}
          className="rounded-lg"
          layout="intrinsic"
        />
      </div>
      {/* Right-side text */}
      <div className="col-span-5 flex flex-col justify-center">
        <h2 className="font-unna font-bold italic text-2xl pl-2 text-white">
          I&#39;ve enjoyed writing about big questions.
        </h2>
        <p className="font-roboto-slab italic text-gray-400 text-left pb-6 pt-8 text-xs sm:text-sm pl-6 pt-4">
          - What does our sexuality say about human nature?
          <br />
          - How valuable are humans on the cosmic scale?
          <br />
          - Given modern progress, how should we define purpose?
          <br />
        </p>
        <p className="font-roboto-slab font-extralight text-gray-200 text-left text-xs sm:text-sm pl-2 pt-4">
          In each piece I attempt to take an empirical logical perspective on relevant, controversial human issues toward unintuitive conclusions.
          <br /> <br />
          Check it out:
        </p>
        <p className="font-roboto-slab font-extralight text-gray-200 text-left text-xs sm:text-sm pl-2 pt-10">
          <a
            href="https://medium.com/@steventen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-900 text-white px-6 py-3 rounded hover:bg-yellow-700 transition-colors"
          >
            Visit medium.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

/** Mobile blog content */
const BlogMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-8 px-6">
    <div className="flex flex-col items-center">
      <div className="pb-8">
        <Image
          src="/blog_cosmos.jpg"
          alt="Blog cosmos"
          width={300}
          height={540}
          className="rounded-lg"
          layout="intrinsic"
        />
      </div>
      <div>
        <h2 className="font-unna font-bold italic text-xl text-white text-center">
          I&#39;ve enjoyed writing about big questions.
        </h2>
        <p className="font-roboto-slab italic text-gray-400 text-left pb-6 pt-8 text-xs sm:text-sm pl-4 pt-4">
          - What does our sexuality say about human nature?
          <br />
          - How valuable are humans on the cosmic scale?
          <br />
          - Given modern progress, how should we define purpose?
          <br />
        </p>
        <p className="font-roboto-slab font-extralight text-gray-200 text-left text-xs sm:text-sm pl-2 pt-4">
          In each piece I attempt to take an empirical logical perspective on relevant, controversial human issues toward unintuitive conclusions.
          <br /> <br />
          Check it out:
        </p>
        <p className="font-roboto-slab font-extralight text-gray-200 text-left text-xs sm:text-sm pl-2 pt-10">
          <a
            href="https://medium.com/@steventen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-900 text-white px-6 py-3 rounded hover:bg-yellow-700 transition-colors"
          >
            Visit medium.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

/** Simple nav panel to link among pages */
const NavPanel = () => (
  <div className="max-w-screen-lg mx-auto pt-40 pb-20 px-10">
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
                layout="intrinsic"
              />
              <span className="mt-2 text-sm">{item.text}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/** Export default - the page component */
export default function BlogPage() {
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <BlogDesktop />
      <BlogMobile />
      <NavPanel />
      <Footer />
    </div>
  );
}
