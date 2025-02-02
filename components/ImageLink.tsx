// components/ImageLink.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageLinkProps {
  href: string;
  imgSrc: string;
  text: string;
  gridClass?: string;
  // New optional text styling props
  textSize?: string;
  textFont?: string;
  textWeight?: string;
  textColor?: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({
  href,
  imgSrc,
  text,
  gridClass = "",
  // Default values for text styling
  textSize = "text-base",
  textFont = "font-roboto-slab",
  textWeight = "font-normal",
  textColor = "text-white",
}) => (
  <li className={`flex-none ${gridClass} w-full sm:w-auto`}>
    <Link href={href}>
      <div className="block">
        <Image
          src={imgSrc}
          alt={text}
          width={500}
          height={300}
          className="rounded-lg"
        />
        <span className={`block text-center mt-2 ${textSize} ${textFont} ${textWeight} ${textColor}`}>
          {text}
        </span>
      </div>
    </Link>
  </li>
);

export default ImageLink;