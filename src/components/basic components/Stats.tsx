import { StatProps } from '@/interfaces'
import React from 'react'



export default function Stats({ title, content }: StatProps) {
  return (
    <div>
      <div className="font-ibmSans text-2xl md:text-2xl lg:text-3xl font-extrabold ">{title}</div>
      <div className=" text-tiny md:text-regular  lg:text-medium  font-bold uppercase">
       {content}
      </div>
    </div>
  )
}
