import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "../components/ThemeProvider";
import './globals.css'

import * as React from "react"
import { Metadata } from "next";
import { siteConfig } from "../config/site"
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ui ux",
    "material ui",
    "tailwind css",
    "react js",
    "shadcn",
    "angular material",
    "react javascript",
    "react react native",
    "framer-motion",
  ],
  authors: [
    {
      name: "buou",
      url: "https://buouui.com",
    },
  ],
  creator: "buoooou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@buou",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url), 
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider          
          attribute="class"
          defaultTheme="system"
          enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
