<<<<<<< HEAD
import { Hero } from '@/components/Hero'
import LayoutMain from '@/components/layout/LayoutMain'
import TocDummy from '@/components/test components/TocDummy'

export default async function About() {
  return (
    <>
      <LayoutMain mainContent={<Hero />} tocContent={<TocDummy />} />
    </>
=======
export default function AboutPage() {
  return (
    <div className='mx-auto grid grid-cols-3 gap-12'>
    </div>
>>>>>>> origin/sitemap
  )
}