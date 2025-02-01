// pages/index.tsx
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import ImageLink from "../components/ImageLink";

/** Desktop hero */
const HeroDesktop = () => (
  <div className="hidden sm:block text-left px-10 mt-20">
    <Image
      src="/steven.png"
      alt="Steven ten Holder"
      width={600}
      height={600}
      className="rounded-lg"
    />
    <h2 className="font-roboto-slab text-xl text-gray-300 -mt-10 mb-2">
      Hello, I&apos;m
    </h2>
    <h2 className="font-unna italic text-4xl text-white -mt-4 mb-2">
      Steven ten Holder
    </h2>
    <div style={{ maxWidth: "450px" }}>
      <h2 className="font-roboto-slab text-lg text-gray-300 mb-6 pt-4">
        I believe bioengineering will help civilization thrive.
      </h2>
      <p className="font-roboto-slab text-gray-400 text-left text-xs sm:text-sm">
        Human longevity first. Intelligence next.
        <br />
        Currently I&apos;m exploring how LLMs can empower bio-engineering.
        <br />
        <br />
        I also have fun creating music, cinematography, podcasting,
        skateboarding and snowboarding in Vancouver, BC.
        <br />
        <br />
        <br />
        <span className="font-roboto-slab text-gray-500 text-left text-xs sm:text-xsm">
          <i>If you&apos;d like to chat: steve.tenholder@gmail.com</i>
        </span>
      </p>
    </div>
  </div>
);

/** Mobile hero */
const HeroMobile = () => (
  <div className="sm:hidden text-left px-10 pt-12">
    <Image
      src="/steven.png"
      alt="Steven ten Holder"
      width={600}
      height={600}
      className="rounded-lg"
    />
    <h2 className="font-unna italic text-4xl text-white -mt-6 mb-2">
      <span className="text-2xl text-gray-400 leading-tight">
        Hello, I&apos;m
      </span>
    </h2>
    <h2 className="font-unna italic text-4xl text-white -mt-6 pb-8">
      Steven ten Holder
    </h2>
    <div style={{ maxWidth: "450px" }}>
      <h2 className="font-unna italic text-lg leading-tight text-gray-400 mb-8">
        I believe engineering biology <br /> will help civilization thrive.
      </h2>
      <p className="font-roboto-slab text-gray-400 text-left text-xs sm:text-sm">
        Human longevity first. Intelligence next.
        <br />
        Currently I&apos;m exploring how LLMs can empower bio-engineering.
        <br />
        <br />
        I also enjoy creating music, cinematography, and podcasting.
        <br />
        <br />
        <span className="font-roboto-slab text-gray-500 text-left text-xs sm:text-xsm">
          <i>If you&apos;d like to chat: steve.tenholder@gmail.com</i>
        </span>
      </p>
    </div>
  </div>
);

/** First row of clickable images */
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

/** Second row of clickable images */
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

export default function Home() {
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <HeroDesktop />
      <HeroMobile />
      <ImagePanelFirstRow />
      <ImagePanelSecondRow />
      <Footer />
    </div>
  );
}
