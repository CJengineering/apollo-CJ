import React from 'react'
import { HeaderProps } from './Header1'
import { ibm_plex_mono } from '@/app/fonts'

export default function Header2({children}:HeaderProps) {
  return (
    <h2 className={`${ibm_plex_mono.className} text-[2.25rem] leading-[120%] lg:text-[3rem]`}>{children}</h2>
  )
}
