'use client'

import React from 'react'
import { ButtonCJProps } from '@/interfaces'

const ButtonCJ: React.FC<ButtonCJProps> = ({ children }) => {
  return (
    <button className="text-tiny rounded-lg border-2 border-blue-500 bg-transparent px-8 py-2 font-bold uppercase text-blue-500 transition duration-150 ease-in-out hover:border-orange-500 hover:text-orange-500">
      {children}
    </button>
  )
}

export default ButtonCJ
