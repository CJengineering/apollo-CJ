import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import LayoutMain from '@/components/layout/LayoutMain'
import MainContentDummy from '@/components/test components/MainContentDummy'
import TocDummy from '@/components/test components/TocDummy'
import React from 'react'
import TestPageComp from './test'

export default function TestPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutMain
        mainContent={<TestPageComp/>}
        tocContent={<TocDummy />}
      />
    </>
  )
}
