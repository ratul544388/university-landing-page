import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fandomia University",
  description: "Get your admission now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background")}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
