import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';

import { BeakerIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import { CardHorizontalImageProps } from '@/interfaces';


export default function CardSquaredImage({ imageUrl}: CardHorizontalImageProps) {

  return (
    <div className="relative w-full">
      <div className="aspect-square overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={imageUrl}
          alt=""
          unoptimized
        />

        <div className="absolute inset-0 bg-gray-600 opacity-80"></div>

        <div className="absolute left-4 top-4 h-4 w-4 text-white"><VideoCameraIcon></VideoCameraIcon></div>
      </div>
    </div>
  )
}
