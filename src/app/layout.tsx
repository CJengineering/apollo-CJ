import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import StoryblokProvider from '@/components/StoryblokProvider';
storyblokInit({
  accessToken: "931fmRZyXrz47Xz9fJHU5gtt",
  use: [apiPlugin],
});
export const metadata: Metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
    </StoryblokProvider>
  )
}
