import { StatProps } from '@/interfaces'
import React from 'react'



export default function Stats({ title, content }: StatProps) {
  return (
    <div>
      <div className="font-ibmSans text-xl md:text-2xl lg:text-3xl font-extrabold ">{title}</div>
      <div className="text-small small font-bold uppercase">
       {content}
      </div>
    </div>
  )
}
