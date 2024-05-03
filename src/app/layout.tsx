import { Inter, Lexend, Patrick_Hand } from 'next/font/google'
import clsx from 'clsx'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import StoryblokProvider from '@/components/StoryblokProvider';
import { ibm_plex_mono, ibm_plex_sans } from './fonts';
storyblokInit({
  accessToken: "931fmRZyXrz47Xz9fJHU5gtt",
  use: [apiPlugin],
});
export const metadata: Metadata = {
  title: {
    template: 'TaxPal',
    default: 'Apollo - Community Jameel',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 const PatrickHand = Patrick_Hand({
subsets: ['latin'],
weight: ['400'],
variable: '--font-patrick-hand',

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
  
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
       

      )}
    >
      <body className={`${ibm_plex_mono.variable} ${ibm_plex_sans.variable} ${PatrickHand.variable}`}>{children}</body>
    </html>

  )
}
