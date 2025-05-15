export default function Home() {
  return (
    <div>
      <h1>Welcome to BreeZyee Moves</h1>
      <p>Website coming soon</p>
    </div>
  )
}
import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BreeZyee Moves | Professional Removal Services in London",
  description:
    "BreeZyee Moves offers professional and reliable removal services, man and van hire, and self-drive van hire in London and surrounding area's. A Day's Move in a Breeze!",
  keywords:
    "removal company london, moving services, home removals, office relocations, man and van, van hire, packing services, storage solutions, furniture removals, house moving, flat moving, self drive van hire, london removals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.breezyeemoves.co.uk" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#20B2AA" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <Suspense>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
