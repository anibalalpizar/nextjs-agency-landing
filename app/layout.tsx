import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Nexcent - Modern Landing Page Template",
    template: "%s | Nexcent",
  },
  description:
    "A modern, responsive landing page template built with Next.js 15, Tailwind CSS, and TypeScript. Perfect for developers looking to quickly set up a professional web presence.",
  keywords: [
    "landing page",
    "next.js template",
    "react template",
    "tailwind template",
    "typescript template",
    "open source template",
  ],
  authors: [{ name: "Anibal Alpizar" }],
  creator: "Anibal Alpizar",
  publisher: "Anibal Alpizar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agency-landing-lime.vercel.app/",
    title: "Nexcent - Modern Landing Page Template",
    description:
      "A modern, responsive landing page template built with Next.js 15, Tailwind CSS, and TypeScript.",
    siteName: "Nexcent",
    images: [
      {
        url: "https://agency-landing-lime.vercel.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Nexcent Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexcent - Modern Landing Page Template",
    description:
      "A modern, responsive landing page template built with Next.js 15, Tailwind CSS, and TypeScript.",
    images: ["https://agency-landing-lime.vercel.app/images/preview.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
