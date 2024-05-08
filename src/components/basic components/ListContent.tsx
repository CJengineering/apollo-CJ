import React from 'react'
import SourceContainer from '../layout/SourceContainer'
import { ListContentProps } from '@/interfaces'


export default function ListContent({ title, source, date }: ListContentProps) {
  return (
    <div className='py-2'>
      <div className="text-small font-bold">{title}</div>
      <SourceContainer source={source} date={date} />
    </div>
  )
}
