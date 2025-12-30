// pages/index.tsx
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import ImageLink from "../components/ImageLink";

const heroContent = {
  greeting: "Hello, I'm",
  name: "Steven ten Holder",
  subheadDesktop: "I believe bioengineering will help civilization thrive.",
  subheadMobile: ["I believe engineering biology", "will help civilization thrive."],
  bodyDesktop: [
    "Human longevity first. Intelligence next.",
    "Currently I'm exploring how LLMs can empower bio-engineering with a new startup called zeroshotbio.",
    "I also have fun creating music, cinematography, podcasting, skateboarding and snowboarding in Vancouver, BC.",
  ],
  bodyMobile: [
    "Human longevity first. Intelligence next.",
    "Currently I'm exploring how LLMs can empower bio-engineering with a new startup called zeroshotbio.",
    "I also enjoy creating music, cinematography, and podcasting.",
  ],
  contact: "If you'd like to chat: steve.tenholder@gmail.com",
  styles: {
    // Desktop Control
    desktop: {
      greeting: "font-roboto-slab text-xl text-gray-300 -mt-10 mb-2",
      name: "font-unna italic text-4xl text-white -mt-4 mb-2",
      subhead: "font-unna italic text-lg text-gray-300 mb-6 pt-4",
      body: "font-roboto-slab text-gray-400 text-left text-xs sm:text-sm",
      contact: "font-roboto-slab text-gray-500 text-left text-xs sm:text-xsm",
    },
    // Mobile Control
    mobile: {
      greetingWrap: "font-unna italic text-4xl text-white -mt-6 mb-2",
      greeting: "text-2xl text-gray-400 leading-tight",
      name: "font-unna italic text-4xl text-white -mt-6 pb-8",
      subhead: "font-unna italic text-lg leading-tight text-gray-400 mb-8",
      body: "font-roboto-slab text-gray-400 text-left text-xs sm:text-sm",
      contact: "font-roboto-slab text-gray-500 text-left text-xs sm:text-xsm",
    },
  },
};

const imagePanels = [
  {
    href: "/bioeng",
    imgSrc: "/bio_eng.jpg",
    text: "Why Bioengineering?",
    gridClass: "col-span-2 sm:col-span-1",
    styles: {
      // Desktop Control
      desktop: { textSize: "text-xl", textWeight: "font-small" },
      // Mobile Control
      mobile: { textSize: "text-xl", textWeight: "font-small" },
    },
  },
  {
    href: "/acorn-biolabs",
    imgSrc: "/acorn_biolabs_1950.jpg",
    text: "Acorn Biolabs",
    gridClass: "col-span-2 sm:col-span-1",
    styles: {
      // Desktop Control
      desktop: { textSize: "text-xl", textWeight: "font-small" },
      // Mobile Control
      mobile: { textSize: "text-xl", textWeight: "font-small" },
    },
  },
  {
    href: "/podcast",
    imgSrc: "/podcast_conversations.jpg",
    text: "Podcast",
    gridClass: "col-span-2 sm:col-span-1",
    styles: {
      // Desktop Control
      desktop: { textSize: "text-xl", textWeight: "font-small" },
      // Mobile Control
      mobile: { textSize: "text-lg", textWeight: "font-small" },
    },
  },
  {
    href: "/blog",
    imgSrc: "/blog.jpg",
    text: "Blog",
    gridClass: "col-span-2 sm:col-span-1",
    styles: {
      // Desktop Control
      desktop: { textSize: "text-xl", textWeight: "font-small" },
      // Mobile Control
      mobile: { textSize: "text-lg", textWeight: "font-small" },
    },
  },
];

const HeroDesktop = () => (
  <div className="hidden sm:block text-left px-10 mt-20">
    <Image
      src="/steven.png"
      alt="Steven ten Holder"
      width={600}
      height={600}
      className="rounded-lg"
    />
    <h2 className={heroContent.styles.desktop.greeting}>
      {heroContent.greeting}
    </h2>
    <h2 className={heroContent.styles.desktop.name}>
      {heroContent.name}
    </h2>
    <div style={{ maxWidth: "450px" }}>
      <h2 className={heroContent.styles.desktop.subhead}>
        {heroContent.subheadDesktop}
      </h2>
      <p className={heroContent.styles.desktop.body}>
        {heroContent.bodyDesktop.map((line) => (
          <React.Fragment key={line}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
        <span className={heroContent.styles.desktop.contact}>
          <i>{heroContent.contact}</i>
        </span>
      </p>
    </div>
  </div>
);

const HeroMobile = () => (
  <div className="sm:hidden text-left px-10 pt-20">
    <Image
      src="/steven.png"
      alt="Steven ten Holder"
      width={600}
      height={600}
      className="rounded-lg"
    />
    <h2 className={heroContent.styles.mobile.greetingWrap}>
      <span className={heroContent.styles.mobile.greeting}>
        {heroContent.greeting}
      </span>
    </h2>
    <h2 className={heroContent.styles.mobile.name}>
      {heroContent.name}
    </h2>
    <div style={{ maxWidth: "450px" }}>
      <h2 className={heroContent.styles.mobile.subhead}>
        {heroContent.subheadMobile.map((line) => (
          <React.Fragment key={line}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      <p className={heroContent.styles.mobile.body}>
        {heroContent.bodyMobile.map((line) => (
          <React.Fragment key={line}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
        <span className={heroContent.styles.mobile.contact}>
          <i>{heroContent.contact}</i>
        </span>
      </p>
    </div>
  </div>
);



/** First row of clickable images with custom text styling */
const ImagePanelFirstRow = () => (
  <div className="max-w-screen-lg mx-auto py-10">
    <ul className="grid grid-rows-1 grid-cols-2 gap-8 sm:gap-20 mx-4 sm:mx-10 mb-0">
      {imagePanels.slice(0, 2).map((item) => (
        <ImageLink
          key={item.href}
          href={item.href}
          imgSrc={item.imgSrc}
          text={item.text}
          gridClass={item.gridClass}
          textSize={`${item.styles.mobile.textSize} sm:${item.styles.desktop.textSize}`}
          textWeight={item.styles.mobile.textWeight}
          textColor="text-white"
        />
      ))}
    </ul>
  </div>
);

/** Second row of clickable images with custom text styling */
const ImagePanelSecondRow = () => (
  <div className="max-w-screen-lg mx-auto py-4">
    <ul className="grid grid-rows-1 grid-cols-2 gap-8 sm:gap-20 mx-4 sm:mx-10 mt-2">
      {imagePanels.slice(2).map((item) => (
        <ImageLink
          key={item.href}
          href={item.href}
          imgSrc={item.imgSrc}
          text={item.text}
          gridClass={item.gridClass}
          textSize={`${item.styles.mobile.textSize} sm:${item.styles.desktop.textSize}`}
          textWeight={item.styles.mobile.textWeight}
          textColor="text-white"
        />
      ))}
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
