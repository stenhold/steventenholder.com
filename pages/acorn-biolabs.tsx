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

/** 
 * Large-screen hero/intro content 
 */
const HeaderDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-16 pb-16 px-6 sm:px-10 border-b">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab font-bold text-4xl text-white text-left pb-4">
          Should we be cryopreserving <br /> young cells for longevity?
        </h2>
      </div>

      <div className="col-span-0">
        <div className="top-0 left-0 w-96 h-0">
          <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left"></h2>
        </div>
      </div>

      <div className="col-span-3">
        <h2 className="font-roboto-slab text-lg text-gray-200 text-left pt-8 pb-0">
          Back in 2015, I conceived of and co-founded{" "}
          <a
            href="https://acorn.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            Acorn Biolabs
          </a>
          <br />
          to make young-cell-cryopreservation-as-a-service real.
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
        <h2 className="font-roboto-slab text-md text-gray-200 text-left pr-50 pt-8">
          This page is intended to be a fun time-capsule of nostalgic moments that
          <br />
          capture my story with Acorn from concept through execution.
          <br />
          <br />
          But first, a short essay on the core logic that I believe makes
          <br />
          young-cell cryopreservation a logical no-brainer.
        </h2>
      </div>
    </div>
  </div>
);

/** 
 * Mobile hero/intro content 
 */
const HeaderMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-8 px-6">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab text-4xl text-white text-left pb-16 pt-8">
          Should we all be cryopreserving <br /> our own young cells for longevity?
        </h2>
      </div>

      <div className="col-span-3">
        <h2 className="font-roboto-slab text-lg text-gray-300 text-left pt-2">
          Back in 2015, I conceived of and co-founded{" "}
          <a
            href="https://acorn.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Acorn Biolabs
          </a>{" "}
          to make that idea real.
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
        <h2 className="font-roboto-slab text-md text-gray-300 text-left pt-8">
          This page is meant as fun time-capsule of nostalgic moments that capture my story with
          Acorn from concept to launched company.
          <br />
          <br />
          But first, a short essay on the core logic that I believe makes young-cell
          cryopreservation a no-brainer.
        </h2>
      </div>
    </div>
  </div>
);

/** 
 * “Pascal's Bioengineering Wager” essay for desktop 
 */
const TheLogic = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <div className="pt-4">
          <h2 className="font-roboto-slab text-left font-bold text-3xl text-white">
            Pascal&#39;s Bioengineering Wager
          </h2>
          <h2 className="font-roboto-slab text-left italic text-md text-gray-200 pt-3">
            The logic behind modern young-cell cryopreservation.
          </h2>
        </div>

        <div className="flex items-center pt-8 pb-4">
          <Image
            src="/pascal.png"
            alt="Life"
            width={800}
            height={700}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="col-span-3 flex flex-col justify-center pt-0 pb-2">
        <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm pr-20 pt-4">
          <span className="text-left font-bold text-xl text-white">
            Have you heard of Pascal&#39;s Wager?
          </span>
          <br />
          <br />
          It&#39;s a very simple, statistically reliable reason to believe in the Christian God.
          <br />
          <br />
          Neither does Pascal depend on evidence nor personal revelation for his argument. Instead,
          he merely emphasizes the relatively insignificant cost to secure{" "}
          <i>the possibility</i> of an infinitely positive outcome: eternity in heaven. While a
          reasonable thinker may doubt heaven&#39;s existence on any number of gounrds, there will
          always remain an inescapable uncertanty. One hour of church once a week (plus tithing)
          isn&#39;t an irrational price to pay to hedge one&#39;s bets.
          <br />
          <br />
          Wether or not Pascal&#39;s Wager is actually convincing, his argument&#39;s underlying
          rationalle apply neatly today to human longevity.
          <br />
          <br />
          <br />
          <span className="text-left font-bold text-xl text-white">
            My modern bioengineering-longevity-version goes like this:
          </span>{" "}
          <br /> <br />
          There are compelling reasons to believe biotechnology is going to continue advancing
          tremendously in the coming decades and those advancements may lead to radical
          life-extension therapeutics.
          <br />
          <br />
          Imagine, for example, using your own cells in a 3D-bioprinter to create a fresh new liver
          that could save your life. Or modifying the embryological process to generate new organs
          from individual stem cells for transplant.
          <br />
          <br />
          Both are real strategies already in preliminary proof-of-concept that could lead to
          substantial health and life-extension improvements.
          <br />
          <br />
          If we can manage to live decades or centuries longer we can bear witness to human
          civilizational progress over millennial time-scales, upgrade our own intelligence, and
          join humanity&#39;s incredibly rich technological future into the stars and beyond.
          Basically, <i>real</i> heaven.
          <br />
          <br />
        </p>

        <div className="flex items-center pt-4 pb-0">
          <Image
            src="/longevity_wager.png"
            alt="Life"
            width={800}
            height={700}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="col-span-3 flex flex-col justify-center pt-0 pb-20">
        <p className="font-roboto-slab font-extralight text-left text-xs sm:text-sm pr-20 pt-4">
          <span className="text-left font-bold text-xl font-white">
            Longevity is &#39;heaven&#39; in Pascal&#39;s Bioengineering Wager.
          </span>
          <br />
          <br />
          So, what&#39;s the &#39;church&#39;? What&#39;s the low-cost thing we should each be doing to
          get secure our spot in this possible heaven?
          <br />
          <br />
          Well, there&#39;s trouble in paradise - an original sin, of sorts.
          <br />
          <br />
          The quality of the cells you start with might matter a lot and we&#39;re all getting old,
          fast.
          <br />
          <br />
          Imagine yourself decades from now as an old fart donating your stem cells to be grown and
          used in 3D-bioprinting to create your new liver, or heart, or skin, or kidney, or neurons.
          Your stem cells suck because you&#39;re old. Your granddaughter is happy to donate her
          healthy young stem cells, but the doctors tell you that your immune system won&#39;t accept.
          If only you had… BANKED YOUR OWN STEM CELLS FOR YOURSELF WHEN YOU WERE YOUNG.
          <br />
          <br />
          This is &#39;church&#39; in my bio version of Pascal&#39;s Wager.
          <br />
          <br />
          <br />
          <span className="font-roboto-slab font-bold text-lg">The cost of cryopreservation is low.</span>
          <br />
          <br />
          It&#39;s called Acorn Biolabs and it&#39;s the startup I started and co-created with
          Drew Taylor and Patrick Pumputis In our lifetimes scientists will have created
          bio-engineering solutions powerful enough to improve our lifespans using preserved young
          cellular material. It really matters whether you preserved your cells or not because
          you&#39;re risking the worst possible outcome: missing out on the opportunity to continue
          doing the things you love indefinitely. That&#39;s pretty powerful. Is it more or less
          convincing than the original wager? It becomes personal to each of us to look at the
          facts, what we believe in, what we want out of life, and how much we feel there&#39;s a
          real opportunity for bio-engineering to achieve something.
        </p>
      </div>
    </div>
  </div>
);

/** 
 * Same essay for mobile screens 
 */
const TheLogicMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-28 px-6 border-t">
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        <div className="pt-4">
          <h2 className="font-roboto-slab text-left font-bold italic text-2xl text-white">
            Pascal&#39;s Bioengineering Wager
          </h2>
          <h2 className="font-roboto-slab text-left font-bold italic text-sm text-gray-500">
            The logic behind modern young-cell cryopreservation.
          </h2>
        </div>

        <div className="flex items-center pt-8 pb-4">
          <Image
            src="/pascal.png"
            alt="Pascal"
            width={800}
            height={700}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-center pt-0 pb-2">
        <p className="font-roboto-slab font-extralight text-left text-xs pr-4 pt-4">
          <span className="font-roboto-slab text-lg">Have you heard of Pascal&#39;s Wager?</span>
          <br />
          <br />
          It&#39;s about as mathematical a reason to believe in God as any. Pascal didn&#39;t rely on
          evidence or revelation for his argument. Instead, he stressed the relatively insignificant
          cost to secure the possibility of an infinitely positive outcome; when the enormities of
          heaven and hell are at stake, disbelief becomes illogical.
          <br />
          <br />
          In basic terms, Pascal&#39;s argument is that logically you might as well believe in God.
          <br />
          <br />
          When the benefit is infinitely positive and the consequence infinitely negative - heaven &
          hell. Even in the face of uncertainty about the reality of heaven or hell, if the cost to
          play it safe is low enough, you might as well go through the motions and believe! One hour
          of church once a week isn&#39;t so bad when an infinity of good or bad after death are at
          stake.
          <br />
          <br />
          Whether or not Pascal&#39;s Wager is actually convincing, his argument&#39;s underlying
          logic can apply neatly today to human longevity.
          <br />
          <br />
          My bioengineering longevity version goes like this:
          <br />
          <br />
          There are compelling reasons to believe biotechnology is going to continue advancing
          tremendously in the coming decades and result in radical life-extension. Imagine, for
          example, using your own cells in a 3D-bioprinter to create a fresh new liver that could
          save your life. Or modifying the embryological process to generate new organs from
          individual stem cells for transplant. Both are real strategies already in preliminary
          proof-of-concept that could lead to substantial health and life-extension improvements.
          <br />
          <br />
          If we can manage to live decades or centuries longer, we can bear witness to human
          civilizational progress over millennial time-scales, upgrade our own intelligence, and
          join humanity&#39;s incredibly rich technological future into the stars and beyond.
          <br />
          <br />
        </p>

        <div className="flex items-center pt-4 pb-0">
          <Image
            src="/longevity_wager.png"
            alt="Life"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>

        <p className="font-roboto-slab font-extralight text-left text-xs pr-4 pt-4">
        <div className="pb-2 pt-8">
          <span className="font-roboto-slab text-lg">
            Longevity is &#39;heaven&#39; in Pascal&#39;s Bioengineering Wager..
          </span>
        </div>
          <br />
          So, what&#39;s the &#39;church&#39;? What&#39;s the low-cost thing we should each be doing
          to secure our spot in this possible heaven?
          <br />
          <br />
          Well, there&#39;s trouble in paradise - an original sin, of sorts. The quality of the cells
          you start with might matter a lot, and we&#39;re all getting old, fast.
          <br />
          <br />
          Imagine yourself decades from now as an old fart donating your stem cells to be grown and
          used in 3D-bioprinting to create your new liver, or heart, or skin, or kidney, or neurons.
          Your stem cells suck because you&#39;re old. Your granddaughter is happy to donate her
          healthy young stem cells, but the doctors tell you that your immune system won&#39;t accept.
          If only you had… BANKED YOUR OWN STEM CELLS FOR YOURSELF WHEN YOU WERE YOUNG.
          <br />
          <br />
          This is &#39;church&#39; in my bio version of Pascal&#39;s Wager.
          <br />
          <br />
          <div className="pb-0 pt-8">
          <span className="font-roboto-slab text-lg">
            The cost of cryopreservation is low and the possible benefits are high.
          </span>
          </div>
          <br />
          <br />
          It&#39;s called Acorn Biolabs and it&#39;s the startup I started and co-created with Drew
          Taylor and Patrick Pumputis In our lifetimes scientists will have created
          bio-engineering solutions powerful enough to improve our lifespans using preserved young
          cellular material. It really matters whether you preserved your cells or not because
          you&#39;re risking the worst possible outcome: missing out on the opportunity to continue
          doing the things you love indefinitely. That&#39;s pretty powerful. Is it more or less
          convincing than the original wager? It becomes personal to each of us to look at the
          facts, what we believe in, what we want out of life, and how much we feel there&#39;s a
          real opportunity for bio-engineering to achieve something.
        </p>
      </div>
    </div>
  </div>
);

/** 
 * “Digital Memorabilia” heading for large screens 
 */
const MemorabiliaDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-20 pb-2 px-6 sm:px-10 border-t border-white">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab text-5xl text-gray-200 text-left">
          Digital Memorabilia
        </h2>
      </div>

      <div className="col-span-0">
        <div className="top-0 left-0 w-96 h-0">
          <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
        </div>
      </div>

      <div className="col-span-3">
        <h2 className="font-roboto-slab text-lg text-gray-300 text-left pt-2">
          Nostalgic bits of content from my years working on Acorn.
        </h2>
      </div>
    </div>
  </div>
);

/** 
 * “Digital Memorabilia” heading for mobile 
 */
const MemorabiliaMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-12 pb-2 px-6 border-t">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab text-4xl text-white text-left">
          Digital Memorabilia
        </h2>
      </div>

      <div className="col-span-3">
        <h2 className="font-roboto-slab text-lg text-gray-300 text-left pt-2">
          Nostalgic bits of content from my years working on Acorn.
        </h2>
      </div>
    </div>
  </div>
);

/** 
 * ArchiveSection1 for desktop 
 */
const ArchiveSection1 = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
    <div className="grid grid-cols-3">
      {/* Section 1 */}
      <div className="col-span-3 pt-4">
        <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
          Pitching Justin Trudeau in Waterloo, 2016
        </h2>
        <p className="col-span-3 text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-0 text-left">
          Trudeau was doing a tour of the Waterloo innovation ecosystem. Shortly after winning
          Waterloo&#39;s big $25k pitch competition.
        </p>
      </div>
      <div className="col-span-3 flex flex-col justify-right mt-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-1/2 h-full"
            src="https://www.youtube.com/embed/jg0Hb8whXKY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="col-span-3 pt-28">
        <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
          Acorn as an incubating startup in Waterloo, 2017
        </h2>
      </div>
      <div className="col-span-3">
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-0 text-left">
          I gave an interview for a university review podcast (Ten with Ken) on the Velocity startup
          ecosystem at the University of Waterloo back when I was the CEO of Acorn.
        </p>
      </div>
      {/* Shared Row for Audio Player and Image */}
      <div className="col-span-3 flex flex-row pt-4">
        <div className="flex-1 flex justify-start">
          <Image
            src="/v_garage.jpg"
            alt="Life"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 pl-8 flex items-center justify-center">
          <audio controls className="w-full">
            <source src="audio/ten_with_ken_Steven_interview.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>

      {/* Section 3 */}
      <div className="col-span-3 pt-28">
        <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
          Acorn as post-launch startup in Toronto, 2018
        </h2>
      </div>
      <div className="col-span-3">
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-0 text-left">
          I gave an interview for podcast &#39;Spotlight on the Six&#39; (Akash Pasricha) on Acorn,
          bioengineering, the Toronto startup ecosystem, and my transition from CEO to COO of Acorn
          Biolabs in 2017.
        </p>
      </div>
      {/* Shared Row for Audio Player and Image */}
      <div className="col-span-3 flex flex-row pt-4">
        <div className="flex-1 flex justify-start">
          <Image
            src="/jlabs.jpg"
            alt="Life"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 pl-8 flex items-center justify-center">
          <audio controls className="w-full">
            <source src="audio/spotlight_on_the_six_interview.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  </div>
);

/** 
 * ArchiveSection1 for mobile 
 */
const ArchiveSection1Mobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-4 pb-2 px-6">
    <div className="grid grid-cols-1 gap-y-10">
      {/* Section 1 */}
      <div className="pt-8">
        <h2 className="font-roboto-slab font-bold italic text-left text-xl text-yellow-600">
          Pitching Justin Trudeau in Waterloo, 2016
        </h2>
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left">
          Trudeau was doing a tour of the Waterloo innovation ecosystem. Shortly after winning
          Waterloo&#39;s big $25k pitch competition.
        </p>
        <div className="aspect-w-16 aspect-h-9 mt-4">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/jg0Hb8whXKY"
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="pt-8">
        <h2 className="font-roboto-slab font-bold italic text-left text-xl text-yellow-600">
          Acorn in the Velocity Garage, 2017
        </h2>
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left">
          I gave an interview for a university review podcast (Ten with Ken) on the Velocity startup
          ecosystem at the University of Waterloo back when I was the CEO of Acorn.
        </p>
        <div className="flex flex-col items-center justify-center mt-4">
          <Image
            src="/v_garage.jpg"
            alt="Velocity Garage"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <audio controls className="w-full mt-4">
            <source src="audio/ten_with_ken_Steven_interview.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>

      {/* Section 3 */}
      <div className="pt-8">
        <h2 className="font-roboto-slab font-bold italic text-left text-xl text-yellow-600">
          Acorn post-launch startup in Toronto, 2018
        </h2>
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left">
          I gave an interview for podcast &#39;Spotlight on the Six&#39; (Akash Pasricha) on Acorn,
          bioengineering, the Toronto startup ecosystem, and my transition from CEO to COO of Acorn
          Biolabs in 2017.
        </p>
        <div className="flex flex-col items-center justify-center mt-4">
          <Image
            src="/jlabs.jpg"
            alt="JLABS"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <audio controls className="w-full mt-4">
            <source src="audio/spotlight_on_the_six_interview.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  </div>
);

/** 
 * “Featured in Disrupt Magazine” for desktop 
 */
const ClickEnlarge1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-20 pb-2 px-6 sm:px-10">
      <div className="grid grid-cols-3">
        <div className="col-span-3 pt-10">
          <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
            Featured in Disrupt Magazine, 2019
          </h2>
        </div>
        <div className="col-span-1">
          <div className="top-0 left-0 w-96 h-0">
            <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-2 text-left">
            We attended a Singularity University event in Calgary, Alberta where we caught the
            attention of Disrupt Magazine writers.
          </p>
          <h2 className="font-roboto-slab text-md text-gray-300 text-left pt-4">
            <i>(Click image to Enlarge)</i>
          </h2>
        </div>
      </div>

      <div className="col-span-3 mt-6 flex flex-col items-left justify-start">
        <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <Image
            src="/disrupt_mag.jpg"
            alt="full kit patent"
            width={600}
            height={600}
            className="rounded-lg mb-4"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg max-w-7xl max-h-full overflow-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
            <Image src="/disrupt_mag.jpg" alt="Enlarged Image" width={2000} height={2000} />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/** 
 * “Featured in Disrupt Magazine” for mobile 
 */
const ClickEnlarge1Mobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-2 px-6">
      <div className="grid grid-cols-1">
        <div className="pt-4">
          <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
            Featured in Disrupt Magazine, 2019
          </h2>
          <p className="text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left">
            We attended a Singularity University event in Calgary, Alberta where we caught the
            attention of Disrupt Magazine writers.
          </p>
          <h2 className="font-roboto-slab font-extralight text-xs text-gray-300 text-left pt-4">
            <i>(Tap image to enlarge and explore)</i>
          </h2>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image
              src="/disrupt_mag.jpg"
              alt="Disrupt Magazine feature"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
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
                  src="/disrupt_mag.jpg"
                  alt="Enlarged Image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/** 
 * ArchiveSection2 for desktop 
 */
const ArchiveSection2 = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-10 pb-2 px-6 sm:px-10">
    <div className="grid grid-cols-3">
      {/* Section 4 */}
      <div className="col-span-3 pt-28">
        <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
          Discussing Acorn with a TKS students in Vancouver, 2020
        </h2>
      </div>
      <div className="col-span-3">
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-0 text-left">
          I gave an interview for a TKS student podcast &#39;The Daily Experiment&#39; (by Mikey and
          Mukundh) on Acorn as a concept, bioengineering principles, the philosophy of personality
          and more back in 2020.
        </p>
      </div>
      {/* Shared Row for Audio Player and Image */}
      <div className="col-span-3 flex flex-row pt-4">
        <div className="flex-1 flex justify-start">
          <Image
            src="/vancouver_skyline.jpg"
            alt="Life"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 pl-8 flex items-center justify-center">
          <audio controls className="w-full">
            <source src="audio/TDE_interview_small.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  </div>
);

/** 
 * ArchiveSection2 for mobile 
 */
const ArchiveSection2Mobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-4 pb-2 px-6">
    <div className="grid grid-cols-1 gap-y-10">
      <div className="pt-8">
        <h2 className="font-roboto-slab font-bold italic text-left text-xl text-yellow-600">
          TKS student interview Vancouver, 2020
        </h2>
        <p className="text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left">
          I gave an interview for a TKS student podcast &#39;The Daily Experiment&#39; (by Mikey and
          Mukundh) on Acorn as a concept, bioengineering principles, the philosophy of personality,
          and more back in 2020.
        </p>
        <div className="flex flex-col items-center justify-center mt-4">
          <Image
            src="/vancouver_skyline.jpg"
            alt="Velocity Garage"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <audio controls className="w-full mt-4">
            <source src="audio/TDE_interview_small.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  </div>
);

/** 
 * "Patent Publication" click-enlarge feature for desktop 
 */
const ClickEnlarge2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hidden sm:block max-w-screen-lg mx-auto pt-16 pb-2 px-6 sm:px-10">
      <div className="grid grid-cols-3">
        <div className="col-span-3 pt-10">
          <h2 className="font-roboto-slab font-bold text-left text-xl text-yellow-600">
            Patent Publication of Transport Kit, 2022
          </h2>
        </div>
        <div className="col-span-1">
          <div className="top-0 left-0 w-96 h-0">
            <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-gray-400 font-roboto-slab font-extralight text-xs sm:text-sm pr-48 pt-2 text-left">
            I worked really hard to bring an at-home version of the cell collection process into
            reality. I lead the design and created all of the images you see in the patent. Believe
            it or not, I used Blender to create all of these!
            <br />
            <br />
            After a few years of design and movement through the patent process, the world-wide
            patent (WO 2022/094714 A1) was finally awarded to us in 2022.
          </p>
          <h2 className="font-roboto-slab text-md text-gray-300 text-left pt-4">
            <i>(Click image to Enlarge)</i>
          </h2>
        </div>
      </div>

      <div className="col-span-3 mt-4 flex flex-col items-left justify-start">
        <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <Image
            src="/kit_patent_full.jpg"
            alt="full kit patent"
            width={600}
            height={600}
            className="rounded-lg mb-4"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg max-w-7xl max-h-full overflow-auto">
            <Image
              src="/kit_patent_full.jpg"
              alt="Enlarged Image"
              width={2000}
              height={2000}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/** 
 * "Patent Publication" click-enlarge feature for mobile 
 */
const ClickEnlarge2Mobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-2 px-6">
      <div className="grid grid-cols-1">
        <div className="pt-4">
          <h2 className="font-roboto-slab font-bold italic text-left text-xl text-yellow-600">
            Patent Publication of Transport Kit, 2022
          </h2>
          <p className="text-gray-400 font-roboto-slab font-extralight text-xs pt-2 text-left">
            I worked really hard to bring an at-home version of the cell collection process into
            reality. I lead the design and created all of the images you see in the patent. Believe
            it or not, I used Blender to create all of these!
            <br />
            <br />
            After a few years of design and movement through the patent process, the world-wide
            patent (WO 2022/094714 A1) was finally awarded to us in 2022.
          </p>
          <h2 className="font-roboto-slab text-xs text-gray-300 text-left pt-4">
            <i>(Tap image to enlarge and explore)</i>
          </h2>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image
              src="/kit_patent_full.jpg"
              alt="full kit patent"
              width={400}
              height={400}
              className="rounded-lg mb-4"
            />
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-xs max-h-full overflow-auto">
              <Image
                src="/kit_patent_full.jpg"
                alt="Enlarged Image"
                width={1000}
                height={1000}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
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
      <HeaderDesktop />
      <HeaderMobile />

      <TheLogic />
      <TheLogicMobile />

      <MemorabiliaDesktop />
      <MemorabiliaMobile />

      <ArchiveSection1 />
      <ArchiveSection1Mobile />

      <ClickEnlarge1 />
      <ClickEnlarge1Mobile />

      <ArchiveSection2 />
      <ArchiveSection2Mobile />

      <ClickEnlarge2 />
      <ClickEnlarge2Mobile />

      <NavPanel />
      <Footer />
    </div>
  );
}
