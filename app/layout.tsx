import type { Metadata } from "next";
import "./globals.css";
import { SettingsProvider } from "@/contexts/SettingsContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SUPPORTED_FONT_STYLES as fonts } from "@/lib/fonts";
import Providers from "@/contexts/Providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ShareMeCode",
  description: "Share Your Code With ShareMeCode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        // fonts..variable,
        fonts[0].variable,
        fonts[1].variable,
        fonts[2].variable
      )}
    >
      <body
        className={cn(
          "grid min-h-screen grid-rows-[auto,1fr] text-sm",
          "bg-almost-black text-greyish caret-fuchsia-500 selection:bg-fuchsia-500 selection:text-amlost-white"
        )}
      >
        <Providers>
          <Header/>
          <main className={cn("grid place-items-center")}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
