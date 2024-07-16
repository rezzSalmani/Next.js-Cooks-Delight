import type { Metadata } from "next";
import { Roboto, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  style: ["normal"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-montserrat",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Cooks Delight",
  description: "Recipes Cooking blog ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${lato.variable} ${montserrat.variable} ${roboto.variable} container w-full font-roboto text-primary-dark `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
