import { StatProps } from '@/interfaces'
import React from 'react'



export default function Stats({ title, content }: StatProps) {
  return (
    <div>
      <div className="font-ibmSans text-5xl font-extrabold ">{title}</div>
      <div className="text-small small font-bold uppercase">
       {content}
      </div>
    </div>
  )
}
