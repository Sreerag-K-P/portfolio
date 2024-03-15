import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const opensans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ajithdev C",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
