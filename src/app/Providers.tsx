"use client";

import { ThemeProvider } from "next-themes";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <div className="">
        {children}
        </div>
    </ThemeProvider>
  );
}
