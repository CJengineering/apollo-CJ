import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { roboto_mono, inter, ibm_plex_mono } from '../../app/fonts'
import { CardProgrammeProps } from '@/interfaces'

export default function CardProgramme({
  imageUrl,
  programmeTitle,
  programmeType,
}: CardProgrammeProps) {
  return (
    <div className="relative w-full">
      <div className="aspect-square overflow-hidden">
        <Image className="h-full w-full object-cover" src={imageUrl} alt="" />

        <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="costa-extra-bold text-5xl uppercase">
            {programmeTitle}
          </div>
          <div className={`text-xl uppercase ${ibm_plex_mono.className}`}>
            {programmeType}
          </div>
        </div>
      </div>
    </div>
  )
}
