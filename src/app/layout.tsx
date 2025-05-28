import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "This is a clone of IMDb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-bg dark:bg-gray-900">
      <body className={inter.className} >
        <Providers>
        <Header />
        <NavBar /> 
        <SearchBox />      
        {children}
        </Providers>
        
      </body>
    </html>
  );
}


