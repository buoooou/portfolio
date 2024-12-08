import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "../components/ThemeProvider";
import './globals.css'
import { Viewport } from "next";

import * as React from "react"


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}
export const metadata = {
  title: 'My Personal Blog',
  description: 'Welcome to my personal blog and portfolio',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}