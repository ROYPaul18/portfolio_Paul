import { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./providers/i18nProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Paul Roy",
  description: "Mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background flex justify-center ` }
      >
        {/* <I18nProvider>
        {children}
        </I18nProvider> */}
        <h1 className="flex justify-center items-center text-center">
           En cours de construction 🏗️
        </h1>
      </body>
    </html>
  );
}
