import '@/styles/globals.css'
import type { Metadata } from 'next'
import { siteConfig } from '@/configs/site'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { Toaster } from '@/components/ui/toaster'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import TrpcProvider from '@/components/providers/trpc-provider'
import GoogleAnalytics from '@/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://codox.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - CoDox`,
  },
  description: siteConfig.description,
  verification: {
    google: "5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs"
  },
  keywords: [
    "modern web development",
    "modern tech stacks",
    "tech stacks",
    "nextjs 13",
    "nextjs with trpc",
    "clerk auth",
    "t3 stack",
    "typescript",
    "clerk with prisma",
    "trpc with prisma",
    "web development",
    "codox",
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.github,
    },
  ],
  creator: siteConfig.author.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@sujjeeee",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <TrpcProvider>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <GoogleAnalytics />
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </TrpcProvider>
    </ClerkProvider>
  )
}
