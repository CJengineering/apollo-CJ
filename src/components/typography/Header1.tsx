import React, { ReactNode } from 'react'
import { roboto_mono, inter, ibm_plex_mono, ibm_plex_sans } from '../../app/fonts'
export interface HeaderProps {
 children: ReactNode
}

export default function Header1({ children}: HeaderProps) {
  return (
    <h1 className={`${ibm_plex_sans.className} text-[2.5rem] leading-[120%] lg:text-[3.5rem]`}>{children}</h1>
  )
}
