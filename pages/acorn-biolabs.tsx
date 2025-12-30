// pages/acorn-biolabs.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Optional: If you actually use react-h5-audio-player somewhere, keep it.
// Otherwise, you can remove these lines.
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

// Import your shared Footer component instead of redefining it here
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
  text-white, text-gray-300, text-gray-400, text-blue-400, text-blue-500

  Spacing scale (px/py/pt/pb/mt/mb/space-y/gap use the same scale)
  1  = 0.25rem (4px)
  2  = 0.5rem  (8px)
  3  = 0.75rem (12px)
  4  = 1rem    (16px)
  6  = 1.5rem  (24px)
  8  = 2rem    (32px)
  10 = 2.5rem  (40px)
  12 = 3rem    (48px)
  16 = 4rem    (64px)
  20 = 5rem    (80px)
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
  grid / grid-cols-1 / grid-cols-3
  col-span-* = number of columns to span in the current grid
*/

const acornHero = {
  titleLines: ["Should we be cryopreserving", "young cells for longevity?"],
  subtitlePrefix: "Back in 2015, I conceived of and co-founded",
  linkText: "Acorn Biolabs",
  subtitleSuffix: "to make young-cell cryopreservation a real service.",
  introLines: [
    "This page is intended to be a fun time-capsule of nostalgic moments that capture my story with Acorn from concept through execution.",
    "",
    "As a way to explain the philosophy behind why I believe cryopreserving young cells is a good idea, I wrote a short essay inspired by Blaise Pascal.",
  ],
  styles: {
    // Desktop Control
    desktop: {
      title: "font-unna italic text-4xl text-white text-left pb-4",
      subtitle: "font-roboto-slab font-extralight text-xs sm:text-sm text-gray-200 text-left pt-8 pb-2",
      intro: "font-roboto-slab font-extralight text-xs sm:text-sm text-gray-300 text-left pr-50 pt-8 pb-16",
      link: "text-blue-400 hover:text-blue-500",
    },
    // Mobile Control
    mobile: {
      title: "font-unna italic text-2xl text-white text-left pb-2 pt-0",
      subtitle: "font-roboto-slab font-extralight text-xs text-gray-100 text-left pt-2",
      intro: "font-roboto-slab text-xs font-extralight sm:text-sm text-gray-300 text-left pt-4 pb-12",
      link: "text-blue-500 hover:text-blue-600",
    },
  },
};

const Header = () => (
  <>
    {/* Desktop Control */}
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-32 pb-16 px-6 sm:px-10 border-b">
      <div className="grid grid-cols-3">
        <div className="col-span-3">
          <h2 className={acornHero.styles.desktop.title}>
            {acornHero.titleLines.map((line, index) => (
              <React.Fragment key={line}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>

        <div className="col-span-0">
          <div className="top-0 left-0 w-96 h-0">
            <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left"></h2>
          </div>
        </div>

        <div className="col-span-3">
          <h2 className={acornHero.styles.desktop.subtitle}>
            {acornHero.subtitlePrefix}{" "}
            <a
              href="https://acorn.me"
              target="_blank"
              rel="noopener noreferrer"
              className={acornHero.styles.desktop.link}
            >
              {acornHero.linkText}
            </a>
            <br />
            {acornHero.subtitleSuffix}
          </h2>
        </div>

        <div className="col-span-3 col-start-1 flex items-center pt-8">
          <Image
            src="/acorn_cryo_chamber.jpg"
            alt="Life"
            width={800}
            height={700}
            className="rounded-lg"
          />
        </div>

        <div className="col-span-3">
          <h2 className={acornHero.styles.desktop.intro}>
            {acornHero.introLines.map((line, index) => (
              <React.Fragment key={`${line}-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>
    </div>

    {/* Mobile Control */}
    <div className="sm:hidden max-w-screen-lg mx-auto pt-16 pb-8 px-6">
      <div className="grid grid-cols-3">
        <div className="col-span-3">
          <h2 className={acornHero.styles.mobile.title}>
            {acornHero.titleLines.map((line, index) => (
              <React.Fragment key={line}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>

        <div className="col-span-3">
          <h2 className={acornHero.styles.mobile.subtitle}>
            {acornHero.subtitlePrefix}{" "} <br/>
            <a
              href="https://acorn.me"
              target="_blank"
              rel="noopener noreferrer"
              className={acornHero.styles.mobile.link}
            >
              {acornHero.linkText}
            </a>{" "}
            {acornHero.subtitleSuffix}
          </h2>
        </div>

        <div className="col-span-3 col-start-1 flex items-center pt-8">
          <Image
            src="/acorn_cryo_chamber.jpg"
            alt="Life"
            width={800}
            height={700}
            className="rounded-lg"
          />
        </div>

        <div className="col-span-3">
          <h2 className={acornHero.styles.mobile.intro}>
            {acornHero.introLines.map((line, index) => (
              <React.Fragment key={`${line}-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>
    </div>
  </>
);

/**
 * "Pascal's Bioengineering Wager" essay for desktop 
 */
const logicStyles = {
  // Desktop Control
  desktop: {
    title: "font-unna italic text-left text-3xl text-white",
    subtitle: "font-roboto-slab font-extralight text-left text-xs sm:text-sm text-gray-400 pt-3",
    bodyWrap: "font-roboto-slab text-gray-300 font-extralight text-left text-xs sm:text-sm pr-20 pt-4 space-y-3",
    sectionTitle: "text-left font-bold text-xl text-white",
    sectionTitleSpaced: "text-left font-bold text-xl text-white pt-12",
    finalWrap: "font-roboto-slab text-gray-300 font-extralight text-left text-xs sm:text-sm pr-20 space-y-3 leading-relaxed",
  },
  // Mobile Control
  mobile: {
    title: "font-roboto-slab text-left font-bold text-xl text-white",
    subtitle: "font-roboto-slab font-extralight text-left text-sm text-gray-400 pt-3",
    bodyWrap: "font-roboto-slab text-gray-300 font-extralight text-left text-xs sm:text-sm pr-4 pt-0 space-y-3",
    sectionTitle: "text-left font-bold text-xl text-white",
    sectionTitleSpaced: "text-left font-bold text-xl text-white pt-8",
    finalWrap: "font-roboto-slab text-gray-300 font-extralight text-left text-xs sm:text-sm pr-4 space-y-3 leading-relaxed",
  },
};

const logicContent = {
  title: "Pascal's Bioengineering Wager",
  subtitle: "The logic behind modern young-cell cryopreservation.",
  images: {
    pascal: {
      src: "/pascal.png",
      alt: "Life",
      desktop: { width: 800, height: 700 },
      mobile: { width: 800, height: 700 },
    },
    longevity: {
      src: "/longevity_wager.png",
      alt: "Life",
      desktop: { width: 600, height: 700 },
      mobile: { width: 600, height: 700 },
    },
  },
  intro: [
    {
      title: "Have you heard of Pascal's Wager?",
      paragraphs: [
        "Blaise Pascal was a seventeenth-century philosopher and one of the few Christian thinkers to invent a purely logical reason to believe in the Christian God.",
        <>
          Pascal neither depended on evidence nor personal revelation. Instead,
          he noticed that an infinitely positive outcome -- eternity in heaven -- could be
          secured at the relatively small cost of <i>believing</i>.
          <br></br><br></br>
          While a skeptic may reasonably doubt the existence of God and heaven, no skeptic could reasonably be <i>certain</i>. 
          <br></br><br></br>
          God <i> might </i> exist.
          <br></br><br></br>
          Immortality in heaven <i> could </i> be at stake.
          <br></br><br></br>
          One hour of church once a week -- plus tithing --
          is a <i>very</i> reasonable price to pay to hedge one&apos;s bets -- to wager intelligently in the face of such important consequences.
        </>,
      ],
    },
    {
      title: "The case for young-cell cryopreservation",
      paragraphs: [
        "Whether or not Pascal&apos;s Wager is actually convincing, the structure of his argument applies perfectly to the question of young-cell cryopreservation.",
        <>
          There are compelling reasons to believe biotechnology is going to continue advancing tremendously 
          in the coming decades and that those advancements may lead to dramatic improvements in human health.
        </>,
        <>
          Many of the most promising therapies being developed rely on human cells <i>themselves</i> as the therapeutic.
          A good example is CAR T-cell therapy: a patient&apos;s own immune-system cells are harvested,
          engineered to be more effective against cancer cells, then reinjected back into the patient. 
          This has <i>actually</i> already been working in practice.
        </>,
        <>
          It&apos;s possible this trend will continue and that scientists will be able to use people&apos;s
          own cells to grow entirely new replacement organs. It&apos;s uncertain, but very much <i>possible</i>.
        </>,
        <>
          <b>There&apos;s a major problem, though.</b> 
        </>,
        <>
          <i>As you grow old, your cells grow old with you!</i>
        </>,
        <>
          Your own old cells picked off of your own old body will -- almost certainly -- not work well. 
        </>,
        <>
          Your own young cells <i>would</i> work very well, but how can you access your own young 
          cells after you&apos;ve already grown old?
        </>,
        <>
          <b>The answer is young-cell cryopreservation.</b> 
        </>,
        <>
          If only people were in the habit of cryopreserving their own young cells while they were still (relatively) young,
          they&apos;d retain the <i> opportunity </i> to use their own young cells on their own older selves.
        </>,
        <>
          What a mouthful, but I&apos;m sure you get it. 
        </>,
        <>
        The final piece to consider is cost. 
        </>,
        <>
        Ultimately the variables that matter are <b>the cost of participating</b>, <b>the magnitude of the possible upside</b>, 
        and <b> the perceived likelihood of the upside even materializing at all. </b>
        </>,
        <>
        In Pascal&apos;s Wager the cost is church-time (and tithing, presumably), the magnitude of the upside is heaven, and
        the perceived likelihood of heaven materializing is uncertain but possible. Given how incredible the upside
        of immortality in heaven is, even if the cost is high and the perceived likelihood low, <i>it could still be worth it</i>. 
        </>,
        <>
        In my young-cell cryopreservation version, the cost to cryopreserve your own young cells with Acorn Biolabs 
        (as of me writing this, Dec 30th, 2025) is $900 upfront + $190 / year,
        the magnitude of the upside sits anywhere between &quot;possibly saving your life one day&quot; all the way through the possibility of 
        &quot;significantly extending your maximum lifespan&quot; (if biotechnological advancements go really well),
        and the perceived likelihood of young cells helping you in the future is good but speculative!
        </>,

      ],
    },
  ],
  finale: [
    {
      title: "So, Acorn Biolabs",
      paragraphs: [
        <>
         Is my young-cell cryopreservation version of Pascal&apos;s Wager more or less convincing than the original? 
         It becomes personal to each of us to look at the facts, wrestle with what we believe, prioritize what we want out of life, 
         and assess how much we feel there&apos;s a real opportunity for scientific progress to achieve great things with cell-based 
         therapeutics within our lifetimes.
        </>,
        <>
          Personally, I&apos;m very convinced it&apos;s worth it!
        </>,
        <>
          I co-founded Acorn Biolabs with Drew Taylor and Patrick Pumputis back in 2017 to offer young-cell
          cryopreservation as a real service that has existed out in the real world for about 6 years now.
        </>,
        <>
          Do I have my own cells banked? You bet! I was one of the first.
        </>,

      ],
    },
  ],
};

const TheLogicSection = () => (
  <>
    {/* Desktop Control */}
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
      <div className="grid grid-cols-3">
        <div className="col-span-3">
          <div className="pt-4">
            <h2 className={logicStyles.desktop.title}>
              {logicContent.title}
            </h2>
            <h2 className={logicStyles.desktop.subtitle}>
              {logicContent.subtitle}
            </h2>
          </div>

          <div className="flex items-center pt-8 pb-4">
            <Image
              src={logicContent.images.pascal.src}
              alt={logicContent.images.pascal.alt}
              width={logicContent.images.pascal.desktop.width}
              height={logicContent.images.pascal.desktop.height}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="col-span-3 flex flex-col justify-center pt-8 pb-2">
          <div className={logicStyles.desktop.bodyWrap}>
            {logicContent.intro.map((section, sectionIndex) => (
              <React.Fragment key={section.title}>
                <h3
                  className={
                    sectionIndex === 0
                      ? logicStyles.desktop.sectionTitle
                      : logicStyles.desktop.sectionTitleSpaced
                  }
                >
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center pt-16 pb-16">
            <Image
              src={logicContent.images.longevity.src}
              alt={logicContent.images.longevity.alt}
              width={logicContent.images.longevity.desktop.width}
              height={logicContent.images.longevity.desktop.height}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="col-span-3 flex flex-col justify-center pt-0 pb-16">
          <div className={logicStyles.desktop.finalWrap}>
            {logicContent.finale.map((section, sectionIndex) => (
              <React.Fragment key={section.title}>
                <h3
                  className={
                    sectionIndex === 0
                      ? logicStyles.desktop.sectionTitle
                      : logicStyles.desktop.sectionTitleSpaced
                  }
                >
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Control */}
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-12 px-6 border-t">
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <div className="pt-4">
            <h2 className={logicStyles.mobile.title}>
              {logicContent.title}
            </h2>
            <h2 className={logicStyles.mobile.subtitle}>
              {logicContent.subtitle}
            </h2>
          </div>

          <div className="flex items-center pt-8 pb-4">
            <Image
              src={logicContent.images.pascal.src}
              alt={logicContent.images.pascal.alt}
              width={logicContent.images.pascal.mobile.width}
              height={logicContent.images.pascal.mobile.height}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-center pt-8 pb-2">
          <div className={logicStyles.mobile.bodyWrap}>
            {logicContent.intro.map((section, sectionIndex) => (
              <React.Fragment key={section.title}>
                <h3
                  className={
                    sectionIndex === 0
                      ? logicStyles.mobile.sectionTitle
                      : logicStyles.mobile.sectionTitleSpaced
                  }
                >
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center pt-12 pb-12">
            <Image
              src={logicContent.images.longevity.src}
              alt={logicContent.images.longevity.alt}
              width={logicContent.images.longevity.mobile.width}
              height={logicContent.images.longevity.mobile.height}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-center pt-0 pb-12">
          <div className={logicStyles.mobile.finalWrap}>
            {logicContent.finale.map((section, sectionIndex) => (
              <React.Fragment key={section.title}>
                <h3
                  className={
                    sectionIndex === 0
                      ? logicStyles.mobile.sectionTitle
                      : logicStyles.mobile.sectionTitleSpaced
                  }
                >
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);
  


const archiveSectionStyles = {
  // Desktop Control
  desktop: {
    title: "font-roboto-slab font-bold text-left text-xl text-white",
    body: "text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-0 text-left",
    subtitle: "text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pt-2 text-left",
  },
  // Mobile Control
  mobile: {
    title: "font-roboto-slab font-bold text-left text-base text-white",
    body: "text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left",
    subtitle: "text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left",
  },
};

const featureStyles = {
  // Desktop Control
  desktop: {
    title: "font-roboto-slab font-bold text-left text-xl text-white",
    body: "text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-2 text-left",
    note: "font-roboto-slab text-xs sm:text-sm text-gray-300 text-left pt-4",
  },
  // Mobile Control
  mobile: {
    title: "font-roboto-slab font-bold text-left text-base text-white",
    body: "text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left",
    note: "font-roboto-slab font-extralight text-xs text-gray-300 text-left pt-4",
  },
};

const archiveSection1Content = {
  section0: {
    desktopTitle: "Digital Memoribilia",
    mobileTitle: "Digital Memoribilia",
    subtitle: "Here, nostalgic bits of content from my years working on Acorn:",
    titleClassDesktop: "font-unna italic text-left text-4xl text-white",
    titleClassMobile: "font-unna italic text-left text-4xl text-white",
    body: "",
  },
  section1: {
    desktopTitle: "Pitching Justin Trudeau in Waterloo, 2016",
    mobileTitle: "Pitching Justin Trudeau in Waterloo, 2016",
    body:
      "Trudeau was doing a tour of the Waterloo innovation ecosystem, shortly after winning Waterloo&apos;s big $25k pitch competition.",
    videoSrc: "https://www.youtube.com/embed/jg0Hb8whXKY",
  },
  section2: {
    desktopTitle: "Acorn as an incubating startup in Waterloo, 2017",
    mobileTitle: "Acorn in the Velocity Garage, 2017",
    body:
      "I gave an interview for a university review podcast (Ten with Ken) on the Velocity startup ecosystem at the University of Waterloo back when I was the CEO of Acorn.",
    imageSrc: "/v_garage.jpg",
    imageAlt: "Velocity Garage",
    audioSrc: "audio/ten_with_ken_Steven_interview.mp3",
  },
  section3: {
    desktopTitle: "Acorn as post-launch startup in Toronto, 2018",
    mobileTitle: "Acorn post-launch startup in Toronto, 2018",
    body:
      "I gave an interview for the podcast &quot;Spotlight on the Six&quot; (Akash Pasricha) on Acorn, bioengineering, the Toronto startup ecosystem, and my transition from CEO to COO of Acorn Biolabs in 2017.",
    imageSrc: "/jlabs.jpg",
    imageAlt: "JLABS",
    audioSrc: "audio/spotlight_on_the_six_interview.mp3",
  },
};

const archiveSection2Content = {
  desktopTitle: "Discussing Acorn with a TKS student in Vancouver, 2020",
  mobileTitle: "TKS student interview, Vancouver, 2020",
  body:
    "I gave an interview for a TKS student podcast &quot;The Daily Experiment&quot; (by Mikey and Mukundh) on Acorn as a concept, bioengineering principles, the philosophy of personality, and more back in 2020.",
  mobileBody:
    "I gave an interview for a TKS student podcast &quot;The Daily Experiment&quot; (by Mikey and Mukundh) on Acorn as a concept, bioengineering principles, the philosophy of personality, and more back in 2020.",
  imageSrc: "/vancouver_skyline.jpg",
  imageAlt: "Vancouver skyline",
  audioSrc: "audio/TDE_interview_small.mp3",
};

const disruptFeatureContent = {
  title: "Featured in Disrupt Magazine, 2019",
  body:
    "We attended a Singularity University event in Calgary, Alberta where we caught the attention of Disrupt Magazine writers.",
  noteDesktop: "(Click image to Enlarge)",
  noteMobile: "(Tap image to enlarge and explore)",
  image: {
    src: "/disrupt_mag.jpg",
    alt: "Disrupt Magazine feature",
    desktop: { width: 600, height: 600 },
    mobile: { width: 300, height: 300 },
    modalDesktop: { width: 2000, height: 2000 },
    modalMobile: { width: 1000, height: 1000 },
  },
};

const patentFeatureContent = {
  title: "Patent Publication of Transport Kit, 2022",
  body:
    "I worked really hard to bring an at-home version of the cell collection process into reality. I led the design and created all of the images you see in the patent. Believe it or not, I used Blender to create all of these! After a few years of design and movement through the patent process, the worldwide patent (WO 2022/094714 A1) was finally awarded to us in 2022.",
  noteDesktop: "(Click image to Enlarge)",
  noteMobile: "(Tap image to enlarge and explore)",
  image: {
    src: "/kit_patent_full.jpg",
    alt: "full kit patent",
    desktop: { width: 600, height: 600 },
    mobile: { width: 400, height: 400 },
    modalDesktop: { width: 2000, height: 2000 },
    modalMobile: { width: 1000, height: 1000 },
  },
};


const ArchiveSection1Section = () => (
  <>
    {/* Desktop Control */}
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
      <div className="grid grid-cols-3">
        {/* Section 0 */}
        <div className="col-span-3 pt-4">
          <h2 className={archiveSection1Content.section0.titleClassDesktop}>
            {archiveSection1Content.section0.desktopTitle}
          </h2>
          <p className={archiveSectionStyles.desktop.subtitle}>
            {archiveSection1Content.section0.subtitle}
          </p>
          {archiveSection1Content.section0.body && (
            <p className={`col-span-3 ${archiveSectionStyles.desktop.body}`}>
              {archiveSection1Content.section0.body}
            </p>
          )}
        </div>

        {/* Section 1 */}
        <div className="col-span-3 pt-12">
        <h2 className={archiveSectionStyles.desktop.title}>
            {archiveSection1Content.section1.desktopTitle}
          </h2>
          <p className={`col-span-3 ${archiveSectionStyles.desktop.body}`}>
            {archiveSection1Content.section1.body}
          </p>
        </div>
        <div className="col-span-3 flex flex-col justify-right mt-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-1/2 h-full"
              src={archiveSection1Content.section1.videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="col-span-3 pt-28">
        <h2 className={archiveSectionStyles.desktop.title}>
            {archiveSection1Content.section2.desktopTitle}
          </h2>
        </div>
        <div className="col-span-3">
        <p className={archiveSectionStyles.desktop.body}>
            {archiveSection1Content.section2.body}
          </p>
        </div>
        {/* Shared Row for Audio Player and Image */}
        <div className="col-span-3 flex flex-row pt-4">
          <div className="flex-1 flex justify-start">
            <Image
              src={archiveSection1Content.section2.imageSrc}
              alt={archiveSection1Content.section2.imageAlt}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 pl-8 flex items-center justify-center">
            <audio controls className="w-full">
            <source src={archiveSection1Content.section2.audioSrc} type="audio/mpeg" />
            </audio>
          </div>
        </div>

        {/* Section 3 */}
        <div className="col-span-3 pt-28">
        <h2 className={archiveSectionStyles.desktop.title}>
            {archiveSection1Content.section3.desktopTitle}
          </h2>
        </div>
        <div className="col-span-3">
        <p className={archiveSectionStyles.desktop.body}>
            {archiveSection1Content.section3.body}
          </p>
        </div>
        {/* Shared Row for Audio Player and Image */}
        <div className="col-span-3 flex flex-row pt-4">
          <div className="flex-1 flex justify-start">
            <Image
              src={archiveSection1Content.section3.imageSrc}
              alt={archiveSection1Content.section3.imageAlt}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 pl-8 flex items-center justify-center">
            <audio controls className="w-full">
            <source src={archiveSection1Content.section3.audioSrc} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Control */}
    <div className="sm:hidden max-w-screen-lg mx-auto pt-4 pb-2 px-6">
      <div className="grid grid-cols-1 gap-y-10">
        {/* Section 0 */}
        <div className="pt-8">
          <h2 className={archiveSection1Content.section0.titleClassMobile}>
            {archiveSection1Content.section0.mobileTitle}
          </h2>
          <p className={archiveSectionStyles.mobile.subtitle}>
            {archiveSection1Content.section0.subtitle}
          </p>
          {archiveSection1Content.section0.body && (
            <p className={archiveSectionStyles.mobile.body}>
              {archiveSection1Content.section0.body}
            </p>
          )}
        </div>

        {/* Section 1 */}
        <div className="pt-8">
        <h2 className={archiveSectionStyles.mobile.title}>
            {archiveSection1Content.section1.mobileTitle}
          </h2>
        <p className={archiveSectionStyles.mobile.body}>
            {archiveSection1Content.section1.body}
          </p>
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe
              className="w-full h-full"
              src={archiveSection1Content.section1.videoSrc}
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="pt-8">
        <h2 className={archiveSectionStyles.mobile.title}>
            {archiveSection1Content.section2.mobileTitle}
          </h2>
        <p className={archiveSectionStyles.mobile.body}>
            {archiveSection1Content.section2.body}
          </p>
          <div className="flex flex-col items-center justify-center mt-4">
          <Image
            src={archiveSection1Content.section2.imageSrc}
            alt={archiveSection1Content.section2.imageAlt}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <audio controls className="w-full mt-4">
            <source src={archiveSection1Content.section2.audioSrc} type="audio/mpeg" />
          </audio>
          </div>
        </div>

        {/* Section 3 */}
        <div className="pt-8">
        <h2 className={archiveSectionStyles.mobile.title}>
            {archiveSection1Content.section3.mobileTitle}
          </h2>
        <p className={archiveSectionStyles.mobile.body}>
            {archiveSection1Content.section3.body}
          </p>
          <div className="flex flex-col items-center justify-center mt-4">
          <Image
            src={archiveSection1Content.section3.imageSrc}
            alt={archiveSection1Content.section3.imageAlt}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <audio controls className="w-full mt-4">
            <source src={archiveSection1Content.section3.audioSrc} type="audio/mpeg" />
          </audio>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ClickEnlarge1Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Desktop Control */}
      <div className="hidden sm:block max-w-screen-lg mx-auto pt-20 pb-2 px-6 sm:px-10">
        <div className="grid grid-cols-3">
          <div className="col-span-3 pt-10">
          <h2 className={featureStyles.desktop.title}>
              {disruptFeatureContent.title}
            </h2>
          </div>
          <div className="col-span-1">
            <div className="top-0 left-0 w-96 h-0">
              <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
            </div>
          </div>
          <div className="col-span-3">
            <p className={featureStyles.desktop.body}>
              {disruptFeatureContent.body}
            </p>
            <h2 className={featureStyles.desktop.note}>
              <i>{disruptFeatureContent.noteDesktop}</i>
            </h2>
          </div>
        </div>

        <div className="col-span-3 mt-6 flex flex-col items-left justify-start">
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image
              src={disruptFeatureContent.image.src}
              alt={disruptFeatureContent.image.alt}
              width={disruptFeatureContent.image.desktop.width}
              height={disruptFeatureContent.image.desktop.height}
              className="rounded-lg mb-4"
            />
          </div>
        </div>
      </div>

      {/* Mobile Control */}
      <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-2 px-6">
        <div className="grid grid-cols-1">
          <div className="pt-4">
          <h2 className={featureStyles.mobile.title}>
              {disruptFeatureContent.title}
            </h2>
            <p className={featureStyles.mobile.body}>
              {disruptFeatureContent.body}
            </p>
            <h2 className={featureStyles.mobile.note}>
              <i>{disruptFeatureContent.noteMobile}</i>
            </h2>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <Image
                src={disruptFeatureContent.image.src}
                alt={disruptFeatureContent.image.alt}
                width={disruptFeatureContent.image.mobile.width}
                height={disruptFeatureContent.image.mobile.height}
                className="rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          {/* Desktop Control */}
          <div className="hidden sm:flex fixed inset-0 bg-black bg-opacity-50 z-50 justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-7xl max-h-full overflow-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
              <Image
                src={disruptFeatureContent.image.src}
                alt="Enlarged Image"
                width={disruptFeatureContent.image.modalDesktop.width}
                height={disruptFeatureContent.image.modalDesktop.height}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>

          {/* Mobile Control */}
          <div className="sm:hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
            <div className="bg-white overflow-auto max-h-full w-full max-w-3xl rounded-lg">
              <div className="flex justify-between items-center p-4">
                <span className="text-xl font-bold">Disrupt Magazine Feature</span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-lg font-semibold bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={disruptFeatureContent.image.src}
                  alt="Enlarged Image"
                  width={disruptFeatureContent.image.modalMobile.width}
                  height={disruptFeatureContent.image.modalMobile.height}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const ArchiveSection2Section = () => (
  <>
    {/* Desktop Control */}
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
      <div className="grid grid-cols-3">
        {/* Section 4 */}
        <div className="col-span-3 pt-28">
        <h2 className={archiveSectionStyles.desktop.title}>
            {archiveSection2Content.desktopTitle}
          </h2>
        </div>
        <div className="col-span-3">
        <p className={archiveSectionStyles.desktop.body}>
            {archiveSection2Content.body}
          </p>
        </div>
        {/* Shared Row for Audio Player and Image */}
        <div className="col-span-3 flex flex-row pt-4">
          <div className="flex-1 flex justify-start">
            <Image
              src={archiveSection2Content.imageSrc}
              alt={archiveSection2Content.imageAlt}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 pl-8 flex items-center justify-center">
            <audio controls className="w-full">
            <source src={archiveSection2Content.audioSrc} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Control */}
    <div className="sm:hidden max-w-screen-lg mx-auto pt-4 pb-2 px-6">
      <div className="grid grid-cols-1 gap-y-10">
        <div className="pt-8">
        <h2 className={archiveSectionStyles.mobile.title}>
            {archiveSection2Content.mobileTitle}
          </h2>
        <p className={archiveSectionStyles.mobile.body}>
            {archiveSection2Content.mobileBody}
          </p>
          <div className="flex flex-col items-center justify-center mt-4">
            <Image
              src={archiveSection2Content.imageSrc}
              alt={archiveSection2Content.imageAlt}
              width={400}
              height={400}
              className="rounded-lg"
            />
            <audio controls className="w-full mt-4">
            <source src={archiveSection2Content.audioSrc} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ClickEnlarge2Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Desktop Control */}
      <div className="hidden sm:block max-w-screen-lg mx-auto pt-16 pb-2 px-6 sm:px-10">
        <div className="grid grid-cols-3">
          <div className="col-span-3 pt-10">
          <h2 className={featureStyles.desktop.title}>
              {patentFeatureContent.title}
            </h2>
          </div>
          <div className="col-span-1">
            <div className="top-0 left-0 w-96 h-0">
              <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
            </div>
          </div>
          <div className="col-span-3">
            <p className={featureStyles.desktop.body}>
              {patentFeatureContent.body}
            </p>
            <h2 className={featureStyles.desktop.note}>
              <i>{patentFeatureContent.noteDesktop}</i>
            </h2>
          </div>
        </div>

        <div className="col-span-3 mt-4 flex flex-col items-left justify-start">
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image
              src={patentFeatureContent.image.src}
              alt={patentFeatureContent.image.alt}
              width={patentFeatureContent.image.desktop.width}
              height={patentFeatureContent.image.desktop.height}
              className="rounded-lg mb-4"
            />
          </div>
        </div>
      </div>

      {/* Mobile Control */}
      <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-2 px-6">
        <div className="grid grid-cols-1">
          <div className="pt-4">
          <h2 className={featureStyles.mobile.title}>
              {patentFeatureContent.title}
            </h2>
            <p className={featureStyles.mobile.body}>
              {patentFeatureContent.body}
            </p>
            <h2 className={featureStyles.mobile.note}>
              <i>{patentFeatureContent.noteMobile}</i>
            </h2>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <Image
                src={patentFeatureContent.image.src}
                alt={patentFeatureContent.image.alt}
                width={patentFeatureContent.image.mobile.width}
                height={patentFeatureContent.image.mobile.height}
                className="rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          {/* Desktop Control */}
          <div className="hidden sm:flex fixed inset-0 bg-black bg-opacity-50 z-50 justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-7xl max-h-full overflow-auto">
              <Image
                src={patentFeatureContent.image.src}
                alt="Enlarged Image"
                width={patentFeatureContent.image.modalDesktop.width}
                height={patentFeatureContent.image.modalDesktop.height}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>

          {/* Mobile Control */}
          <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-xs max-h-full overflow-auto">
              <Image
                src={patentFeatureContent.image.src}
                alt="Enlarged Image"
                width={patentFeatureContent.image.modalMobile.width}
                height={patentFeatureContent.image.modalMobile.height}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

/** 
 * NavPanel - inline for this page. 
 * You could move this to components/NavPanel.tsx, but it’s fine here. 
 */
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
              />
              <span className="mt-2 text-sm">{item.text}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/** 
 * The main component (default export) 
 * Renamed to "AcornBiolabs" to match the file name. 
 */
export default function AcornBiolabs() {
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <Header />

      <TheLogicSection />

      <div className="w-full max-w-screen-lg mx-auto border-t border-white opacity-60 my-6 sm:my-10" />

      <ArchiveSection1Section />

      <ClickEnlarge1Section />

      <ArchiveSection2Section />

      <ClickEnlarge2Section />

      <NavPanel />
      <Footer />
    </div>
  );
}
