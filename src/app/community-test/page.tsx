import LayoutMain from '@/components/layout/LayoutMain'
import TocDummy from '@/components/test components/TocDummy'
import ContentCommunity from './content'

export default async function CommunityTest() {
  return (
    <>
      <LayoutMain
        mainContent={<ContentCommunity />}
        tocContent={''}
      />
    </>
  )
}
