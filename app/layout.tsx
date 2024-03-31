import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use a regular div or a semantic HTML element suitable for your layout.
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
