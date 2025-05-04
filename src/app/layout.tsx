import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

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
    <html lang="en">
      <body className={inter.className}>
        <Header />

        
        {children}
      </body>
    </html>
  );
}


