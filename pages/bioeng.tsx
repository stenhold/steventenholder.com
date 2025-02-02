// pages/bioeng.tsx

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Import shared components (Footer and possibly NavPanel) to avoid inline duplicates
import Footer from "../components/Footer";
// If you have a shared NavPanel in components, import it instead of defining it inline.
// import NavPanel from "../components/NavPanel";

// Custom hook to detect if the viewport is less than 640px (Tailwind's "sm" breakpoint)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
}

/** Desktop hero/intro content */
const HeaderDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-32 pb-16 px-6 sm:px-10">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab  font-bold text-4xl text-white text-left">
          Engineering biology will <br /> revolutionize the human condition.
        </h2>
      </div>
      <div className="col-span-0">
        <div className="top-0 left-0 w-96 h-0">
          <h2 className="font-roboto-slab font-bold italic text-3xl text-white text-left" />
        </div>
      </div>
    </div>
  </div>
);

/** Mobile hero/intro content */
const HeaderMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-10 pb-4 px-6">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab font-bold text-2xl text-white text-left">
          Engineering biology will revolutionize the human condition.
        </h2>
      </div>
    </div>
  </div>
);

/** Desktop panel content */
const PanelDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-4 pb-4 px-6 sm:px-10 border-t">
    <div className="grid grid-cols-12 gap-y-8 gap-x-4">
      {/* Introduction */}
      <div className="col-span-12">
        <h2 className="font-roboto-slab font-bold text-lg text-gray-400 text-left">
          A few first principles toward my North Star:
        </h2>
      </div>
      {/* Section 1 */}
      <div className="col-span-5">
        <Image
          src="/origin_of_life_2.jpg"
          alt="Life"
          height={400}
          width={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-center">
        <span className="font-roboto-slab font-bold text-2xl text-white">
          Life started itself
        </span>
        <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
          Earth-life emerged spontaneously from the primordial earth ~4 billion years ago and evolved itself into brand new phenomenal categories.
        </p>
      </div>
      {/* Section 2 */}
      <div className="col-span-5">
        <Image
          src="/neurons_background.jpg"
          alt="Life"
          height={400}
          width={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-center">
        <span className="font-roboto-slab font-bold text-2xl text-white">
          Evolved within the limit
        </span>
        <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
          That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena — including consciousness itself — strongly suggests our universe is capable of hosting other undiscovered phenomena.
        </p>
      </div>
      {/* Section 3 */}
      <div className="col-span-5">
        <Image
          src="/intelligent_design_4.jpg"
          alt="Life"
          height={400}
          width={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-center">
        <span className="font-roboto-slab font-bold text-2xl text-white">
          Has potential beyond the limit
        </span>
        <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
          Natural selection was the only game in town, but isn’t the only way. An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.
        </p>
      </div>
      {/* Section 4 */}
      <div className="col-span-5">
        <Image
          src="/brain_1.jpg"
          alt="Life"
          height={400}
          width={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-center">
        <span className="font-roboto-slab font-bold text-2xl text-white">
          We too are engineerable biology
        </span>
        <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm">
          We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, human-experience-altering exploration.
        </p>
      </div>
    </div>
  </div>
);

/** Mobile panel content – each section now has its title on its own row with image and text side‐by‐side */
const PanelMobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-6 pb-16 px-6 sm:px-10 border-t">
    {/* Heading for the mobile panel */}
    <div className="w-full pb-16">
      <h2 className="font-roboto-slab font-light text-sm text-gray-300 text-left">
        Here, a few first principles <br /> toward my current North Star:
      </h2>
    </div>
    <div className="space-y-8">
      {/* Section 1 */}
      <div className="grid grid-cols-12 gap-y-2 gap-x-2">
        {/* Title row */}
        <div className="col-span-12">
          <h3 className="font-roboto-slab font-bold text-xl text-white text-left py-1">
            Life started itself
          </h3>
        </div>
        {/* Image */}
        <div className="col-span-5">
          <Image
            src="/origin_of_life_2.jpg"
            alt="Life"
            height={320}
            width={320}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="col-span-7 flex flex-col justify-center px-2">
          <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm mt-1">
            Earth-life emerged spontaneously from the primordial earth ~4 billion years ago and evolved itself into brand new phenomenal categories.
          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="grid grid-cols-12 gap-y-2 gap-x-2">
        <div className="col-span-12">
          <h3 className="font-roboto-slab font-bold text-xl text-white text-left py-1">
            Evolved within the limit
          </h3>
        </div>
        <div className="col-span-5">
          <Image
            src="/diversity_of_life_3.jpg"
            alt="Life"
            height={320}
            width={320}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center px-2">
          <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm mt-1">
            That a purely self-emergent, resource-constrained process could generate entirely novel categories of phenomena — including consciousness itself — strongly suggests our universe is capable of hosting other undiscovered phenomena.
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className="grid grid-cols-12 gap-y-2 gap-x-2">
        <div className="col-span-12">
          <h3 className="font-roboto-slab font-bold text-xl text-white text-left py-1">
            Has potential beyond the limit
          </h3>
        </div>
        <div className="col-span-5">
          <Image
            src="/intelligent_design_4.jpg"
            alt="Life"
            height={320}
            width={320}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center px-2">
          <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm mt-1">
            Natural selection was the only game in town, but isn’t the only way. An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className="grid grid-cols-12 gap-y-2 gap-x-2">
        <div className="col-span-12">
          <h3 className="font-roboto-slab font-bold text-xl text-white text-left py-1">
            We too are engineerable biology
          </h3>
        </div>
        <div className="col-span-5">
          <Image
            src="/brain_1.jpg"
            alt="Life"
            height={320}
            width={320}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center px-2">
          <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm mt-1">
            We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, human-experience-altering exploration.
          </p>
        </div>
      </div>
    </div>
  </div>
);

/** Desktop simulation section */
const ComingSoonDesktop = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-12 pb-40 px-6 sm:px-10 border-t">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <h2 className="font-roboto-slab text-center font-bold italic text-3xl text-white">
          I’ll upload progress here as I go.
        </h2>
        <p className="font-roboto-slab font-extralight text-center text-xs sm:text-sm pl-4 pt-4 pb-8">
          Javascript model of the origin of life here to kick things off!<br /><br /><br />
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

/** Mobile simulation section */
const ComingSoonMobile = () => {
    const isMobile = useIsMobile();
    
    return (
      <div className="sm:hidden max-w-screen-lg mx-auto pt-24 px-6 pb-28">
        <div className="grid grid-cols-8 gap-4 border-t border-white border-b pb-0">
          <div className="col-span-8 flex flex-col justify-center pt-10 pb-8">
            <h2 className="font-roboto-slab font-bold text-2xl text-white">
              I&#39;ll upload more ideas <br /> here as I go.
            </h2>
            <p className="font-roboto-slab font-extralight text-xs sm:text-sm pt-4">
              Javascript model of the origin of life — as imagined by Freeman Dyson in the 1980s — to kick things off!
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
  };

/** Desktop summary section */
const TextSummary1 = () => (
  <div className="hidden sm:block max-w-screen-lg mx-auto pt-8 px-6">
    <div className="grid grid-cols-8 gap-4 border-white">
      <div className="col-span-3 col-start-1 flex items-center pt-12">
        <Image
          src="/great_tree_iceberg.jpg"
          alt="Life"
          width={500}
          height={900}
          className="rounded-lg"
          layout="intrinsic"
        />
      </div>
      <div className="col-span-5 flex flex-col justify-center">
        <h2 className="font-roboto-slab font-bold italic text-2xl pl-2 text-white">
          So, let’s accelerate bioengineering.
        </h2>
        <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm pl-2 pt-4">
          We’re at the tip of the <i>genetic hyperspace iceberg</i>.<br /><br />
          The kinds and scales of mechanical and phenomenological entities possible is unimaginable.
        </p>
      </div>
    </div>
  </div>
);

/** Mobile summary section */
const TextSummary1Mobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-8 px-6">
    <div className="flex flex-col items-center">
      <div className="pb-8">
        <h2 className="font-roboto-slab font-bold text-xl text-white">
          So, let’s accelerate bioengineering.
        </h2>
        <p className="font-roboto-slab text-gray-200 text-sm pt-4">
          <i>We’re at the tip of the genetic hyperspace iceberg</i>.<br />
        </p>
        <p className="font-roboto-slab font-light text-gray-400 text-sm pt-4">
          The kinds and scales of mechanical and phenomenological entities possible is unimaginable.
        </p>
      </div>
      {/* Left-align the image */}
      <div className="pb-8 self-start">
        <Image
          src="/great_tree_iceberg.jpg"
          alt="Life"
          width={300}
          height={540}
          className="rounded-lg"
          layout="intrinsic"
        />
      </div>
    </div>
  </div>
);

/** Desktop summary section for TextSummary2 */
const TextSummary2 = () => (
  <div className="hidden sm:block">
    <div className="grid grid-cols-8 gap-4 max-w-screen-lg mx-auto px-6 pb-40">
      <div className="col-span-3 flex flex-col justify-center">
        <h2 className="font-roboto-slab font-bold italic text-right text-2xl pr-2 text-white">
          Powerfully, with AI
        </h2>
        <p className="font-roboto-slab font-extralight text-gray-400 text-left text-xs sm:text-sm pr-2 pt-4 text-right">
          The chaos of biological complexity will almost certainly become best understood by AI.
          <br /><br />
          The emergence of LLMs and their success with human language hints at the possiblity for new understandings of biology.
        </p>
      </div>
      <div className="col-span-5 flex items-center">
        <Image
          src="/wizard_bird.jpg"
          alt="Life"
          width={700}
          height={800}
          className="rounded-lg"
          layout="intrinsic"
        />
      </div>
    </div>
  </div>
);

/** Mobile summary section for TextSummary2 */
const TextSummary2Mobile = () => (
  <div className="sm:hidden max-w-screen-lg mx-auto pt-8 px-6">
    <div className="flex flex-col items-center">
      <div className="pb-8">
        <h2 className="font-roboto-slab font-bold italic text-xl text-white">
          Powerfully, with AI
        </h2>
        <p className="font-roboto-slab font-extralight text-gray-400 text-sm pt-4">
          The chaos of biological complexity will almost certainly become best understood by AI.
          <br /><br />
          The emergence of LLMs and their success with human language hints at the possibility for new understandings of biology.
        </p>
      </div>
      {/* Left-align the image */}
      <div className="pb-8 self-start">
        <Image
          src="/wizard_bird.jpg"
          alt="Life"
          width={350}
          height={400}
          className="rounded-lg"
          layout="intrinsic"
        />
      </div>
    </div>
  </div>
);

/** NavPanel – using the original style for "BioEng Ideas" */
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

/** The main BioEng page export */
export default function BioEng() {
  // Optionally use the custom hook here if needed
  const isMobile = useIsMobile();
  return (
    <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
      <HeaderDesktop />
      <HeaderMobile />

      <PanelDesktop />
      <PanelMobile />

      <TextSummary1 />
      <TextSummary1Mobile />

      <TextSummary2 />
      <TextSummary2Mobile />

      <ComingSoonDesktop />
      <ComingSoonMobile />

      <NavPanel />
      <Footer />
    </div>
  );
}
