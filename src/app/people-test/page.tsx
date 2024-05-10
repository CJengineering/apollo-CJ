import LayoutMain from '@/components/layout/LayoutMain'
import React from 'react'
import ContentPeople from './content'
import TocComponent from '@/components/basic components/TocComponent'

export default function People() {
  return (
    <>
    <LayoutMain
      mainContent={<ContentPeople />}
      tocContent={''}
    />
  </>
  )
}
