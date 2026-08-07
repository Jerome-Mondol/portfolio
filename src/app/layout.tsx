import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "lenis/dist/lenis.css";
import { profile } from "@/data/profile";
import { DirectionContract } from "@/components/ui/DirectionContract";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = profile.siteUrl.replace(/\/$/, "");

/** Everywhere online you can be verified under your own name. */
const sameAs = [
  profile.links.github,
  profile.links.linkedin,
  profile.links.x,
].filter(Boolean) as string[];

const sharedImage = {
  url: `${siteUrl}/profile/profile.webp`,
  alt: profile.name,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.bio,
  applicationName: `${profile.name} — ${profile.role}`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    profile.name,
    profile.role,
    "web developer portfolio",
    "full-stack engineer",
    "react developer",
    "node.js developer",
    "freelance developer",
    "Khulna Bangladesh developer",
  ],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    locale: "en_US",
    images: [{ ...sharedImage, width: 472, height: 591 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    images: [sharedImage],
  },
  category: "Portfolio",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}/profile/profile.webp`,
      jobTitle: profile.role,
      description: profile.bio,
      email: profile.email,
      ...(profile.location
        ? { address: { "@type": "PostalAddress", addressLocality: profile.location } }
        : {}),
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      description: profile.bio,
      inLanguage: "en",
      about: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      mainEntity: { "@id": `${siteUrl}/#person` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('site-loading');",
          }}
        />
        <SiteLoader />
        <ScrollProgress />
        <DirectionContract />
        <SmoothScroll>{children}</SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </body>
    </html>
  );
}
