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
  title: "Développeur Web Freelance à Bourges | Paul Roy",
  description:
    "Développeur freelance spécialisé en sites vitrines et applications web sur-mesure à Bourges (Cher). Création de sites performants et modernes pour professionnels.",
  keywords: [
    "développeur web freelance Bourges",
    "création site vitrine Bourges",
    "développeur freelance Cher",
    "création site internet Cher",
    "développement application web Bourges",
    "site vitrine professionnel Bourges",
    "freelance Next.js Bourges",
    "développeur React freelance",
    "créateur site internet Bourges",
    "site internet sur-mesure Cher",
    "développeur web indépendant Bourges",
    "création application web Cher",
    "développeur web Centre-Val de Loire",
    "Paul Roy développeur web",
    "développement web sur-mesure Bourges",
    "freelance sites vitrines PME",
    "développeur portfolio Bourges",
    "site internet pour artisans Bourges",
    "freelance digital Bourges",
    "création site rapide et moderne",
  ],
  openGraph: {
    title: "Développeur Web Freelance à Bourges | Paul Roy",
    description:
      "Développeur freelance spécialisé en sites vitrines et applications web sur-mesure à Bourges (Cher).",
    url: "https://ton-site.com",
    siteName: "Paul Roy | Développeur Web Freelance",
    locale: "fr_FR",
    type: "website",
  },
  robots: "index, follow",
  authors: [{ name: "Paul Roy", url: "https://ton-site.com" }],
};

  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${figtree.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-deepblue flex justify-center scroll-smooth` }
      >
        <I18nProvider>
        {children}
        </I18nProvider>

      </body>
    </html>
  );
}
