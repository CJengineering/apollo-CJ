import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionUnderline({ children }: Props) {
  return (
    <div className="">
      <div className="py-[2rem] ">{children}</div>
      <div className="w-full border-t border-gray-300" />
    </div>
  )
}
