import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-10">
      <nav>
        <ul className="space-y-4 w-full px-4 flex flex-wrap justify-center">
          {[
            { href: "/", imgSrc: "/steven.png", text: "Hello, I'm Steven ten Holder" },
            { href: "/bioengineering-ideas", imgSrc: "/davinci.jpg", text: "New Bioengineering Ideas" },
            { href: "/bioengineering-ideas", imgSrc: "/acorn_biolabs.jpg", text: "Acorn Biolabs" },
            { href: "/bioengineering-ideas", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
            { href: "/bioengineering-ideas", imgSrc: "/blog.jpg", text: "Blog" },
          ].map((item, index) => (
            <li key={index} className="relative flex flex-col items-center text-center font-roboto">
              <Link href={item.href} passHref>
                <div className="cursor-pointer">
                  <Image
                    src={item.imgSrc}
                    alt={item.text}
                    width={500} // Adjust based on your needs
                    height={300} // Adjust based on your needs
                    className="rounded-lg shadow-md"
                    layout="intrinsic"
                  />
                  <span className="absolute bottom-1/4 w-full text-3xl font-bold text-white leading-tight">{item.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="p-4 mt-10 bg-black w-full text-center text-white">
        © 2024 - Steven ten Holder
      </footer>
    </div>
  );
}
