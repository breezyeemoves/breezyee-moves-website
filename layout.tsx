import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
  alternates: {
    canonical: "https://www.breezyeemoves.co.uk",
  },
  authors: [{ name: "BreeZyee Moves" }],
  openGraph: {
    type: "website",
    url: "https://www.breezyeemoves.co.uk",
    title: "BreeZyee Moves | Professional Removal Services in London",
    description:
      "Professional and reliable removal services, man and van hire, and self-drive van hire in London and surrounding area's.",
    siteName: "BreeZyee Moves",
    images: [
      {
        url: "https://www.breezyeemoves.co.uk/breezyee-logo.png",
        width: 1200,
        height: 630,
        alt: "BreeZyee Moves Logo",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "BreeZyee Moves | Professional Removal Services in London",
    description:
      "Professional and reliable removal services, man and van hire, and self-drive van hire in London and surrounding area's.",
    images: ["https://www.breezyeemoves.co.uk/breezyee-logo.png"],
    creator: "@breezyeemoves",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "verification_token", // Replace with your Google verification token
  },
    generator: 'v0.dev'
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
        <meta name="geo.region" content="GB-LDN" />
        <meta name="geo.placename" content="London" />
        <meta name="format-detection" content="telephone=yes" />
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

        {/* Structured Data for Local Business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BreeZyee Moves",
              image: "https://www.breezyeemoves.co.uk/breezyee-logo.png",
              url: "https://www.breezyeemoves.co.uk",
              telephone: "02036330464",
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressRegion: "London",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: -0.1278,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "00:00",
                  closes: "23:59",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/breezyeemoves",
                "https://www.instagram.com/breezyeemoves",
                "https://twitter.com/breezyeemoves",
              ],
              priceRange: "££",
              description:
                "BreeZyee Moves offers professional and reliable removal services, man and van hire, and self-drive van hire in London and surrounding area's.",
              email: "contactus@breezyeemoves.co.uk",
            }),
          }}
        />

        {/* Structured Data for Service */}
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Removal Services",
              provider: {
                "@type": "LocalBusiness",
                name: "BreeZyee Moves",
                url: "https://www.breezyeemoves.co.uk",
                email: "contactus@breezyeemoves.co.uk",
              },
              areaServed: {
                "@type": "City",
                name: "London",
              },
              description: "Professional home and office removal services in London and surrounding area's.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Structured Data for FAQs */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How far in advance should I book my move?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend booking at least 4-6 weeks in advance, especially during peak moving seasons (spring and summer). However, we can sometimes accommodate last-minute moves depending on availability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide packing materials?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide a full range of packing materials including boxes, bubble wrap, packing paper, tape, and specialized containers for delicate items. These can be purchased separately or included as part of our packing service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer storage solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer both short-term and long-term storage solutions in our secure, climate-controlled facilities. This is perfect if you need to bridge a gap between moving out and moving in.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}
