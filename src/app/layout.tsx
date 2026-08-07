import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { profile } from "@/data/profile";
import { DirectionContract } from "@/components/ui/DirectionContract";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SiteLoader } from "@/components/layout/SiteLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
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
        {children}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </body>
    </html>
  );
}
