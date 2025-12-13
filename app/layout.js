import { Poppins } from "next/font/google";
import "./globals.css";
import LoaderMain from "@/components/loader/page";

export const metadata = {
  title: "Protfolio-Faiq",
  description: "This is my personal portfolio website showcasing my skills and projects.",
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
