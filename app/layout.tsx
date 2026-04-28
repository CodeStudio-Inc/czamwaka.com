import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Czamwaka | Mwaka Caesar – KwonKalture Creatives",
  description:
    "Mwaka Caesar is the founder of KwonKalture Creatives, blending culture, strategy, and storytelling to shape bold African brand narratives.",
  keywords: [
    "Mwaka Caesar",
    "KwonKalture Creatives",
    "creative director",
    "brand storytelling",
    "cultural strategy",
    "African creative studio"
  ],
  metadataBase: new URL("https://czamwaka.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Czamwaka | Mwaka Caesar – KwonKalture Creatives",
    description:
      "Culture-forward creative direction, storytelling, and brand strategy by Mwaka Caesar.",
    url: "https://czamwaka.com",
    siteName: "Czamwaka",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382296/IMAGINE_pw0lmd.png",
        width: 1200,
        height: 630,
        alt: "Czamwaka portfolio hero image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Czamwaka | Mwaka Caesar – KwonKalture Creatives",
    description:
      "Culture-forward creative direction, storytelling, and brand strategy by Mwaka Caesar.",
    images: [
      "https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382296/IMAGINE_pw0lmd.png"
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
