import React from 'react'
import Image from 'next/image'
import backgroundImage from '@/images/background-call-to-action.jpg'
export default function CardHorizontal() {
  const imageUrl = '@/images/background-auth.jpg'
  return (
    <div className="relative w-full">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={backgroundImage}
          alt=""
          unoptimized
        />

        <div className="absolute inset-0 bg-gray-700 opacity-90"></div>

        <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-white"></div>
      </div>
    </div>
  )
}
