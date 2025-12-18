import { Poppins } from "next/font/google";
import "./globals.css";
import LoaderMain from "@/components/loader/page";

export const metadata = {
  title: "Faiq – MERN Stack Web Developer | React, Next.js",
  description:
    "Faiq is a MERN Stack Web Developer specializing in React, Next.js and  JavaScript. View projects, skills, and contact information.",
  keywords: [
    "Faiq",
    "Faiq developer",
    "MERN Stack Developer",
    "Web Developer Pakistan",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "Portfolio Faiq"
  ],
  authors: [{ name: "Faiq" }],
  openGraph: {
    title: "Faiq – MERN Stack Web Developer",
    description:
      "Portfolio of Faiq presenting my profile and projects built with React and Next.js",
    url: "https://portfolio-faiq.netlify.app",
    siteName: "Faiq Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faiq Portfolio",
      },
    ],
    type: "website",
  },
};

const poppin = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppin.variable}>
        <LoaderMain />
        {children}
      </body>
    </html>
  );
}
