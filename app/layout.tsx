import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { STUDIO_NAME } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: `${STUDIO_NAME} — AI-Powered Ads for Brands`,
  description:
    "A creative studio making story-led brand films, product ads, creator-style UGC and VFX videos for brands of every kind — beauty, fashion, food, jewellery, tech and more.",
  openGraph: {
    title: `${STUDIO_NAME} — AI-Powered Ads for Brands`,
    description:
      "AI ads that make people stop scrolling and start buying. Story-led brand films, product ads, UGC and VFX videos, scripted, directed and edited for Instagram, Meta, YouTube and the web.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400;1,14..32,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-text-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
