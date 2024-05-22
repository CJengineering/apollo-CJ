import CardHorizontal from '@/components/basic components/CardHorizontal'
import React from 'react'
import testImage from '@/images/test_01.webp'
import CardProgramme from '@/components/basic components/CardProgramme'
import CardSquaredImage from '@/components/basic components/CardSquared'
import SectionUnderline from '@/components/layout/SectionUnderline'
import SourceContainer from '@/components/layout/SourceContainer'
import Header1 from '@/components/typography/Header1'
import Header2 from '@/components/typography/Header2'
import Header3 from '@/components/typography/Header3'
import Header4 from '@/components/typography/Header4'
import Header5 from '@/components/typography/Header5'
import Header6 from '@/components/typography/Header6'
import ButtonCJ from '@/components/basic components/ButtonCJ'
import Stats from '@/components/basic components/Stats'
import TabsCJ from '@/components/custom components/TabsCJ'
import TableCJ from '@/components/custom components/TableCJ'
import ListContent from '@/components/basic components/ListContent'
import ListSmall from '@/components/basic components/ListSmall'
import SocialMediaList from '@/components/basic components/SocialMediaList'
import { ibm_plex_mono } from './fonts'

const data = { news: ['name one', 'name two'] }
const socialMediaLinks = {
  instagram: {
    url: 'https://instagram.com/yourprofile',
    name: 'Instagram',
  },
  youtube: {
    url: 'https://youtube.com/yourchannel',
    name: 'YouTube',
  },
}
export default async function Home() {
  return (
    <div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-9">
        <h1 className={`text-4xl font-ibmMono`}>Basic icons</h1>
        <ul role="list" className="">
        <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
              <div>
                  <h2 className="text-2xl font-ibmMono text-red-600 mb-3 ">
                    Programme Card
                  </h2>
                  <p className="mb-6">The Programme Card component has an aspect ratio of 1:1 and has a width that adadpts to the contraints of its parent wrapper. It </p>
                </div>
                <div className="">
                  <CardProgramme
                    imageUrl={testImage}
                    programmeTitle="J-PAL"
                    programmeType="abdul latif jameel poverty action lab"
                  />
          
                </div>
              </div>
              <div className="flex">

              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
              <div>
              <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                    Card 16:9
                  </h2>
                  <p className="mb-6">
                    The Card 16:9 component has an aspect ratio of 16:9 and has a width that adapts to the constraints of its parent wrapper. It also has an icon at the top right which can be changed dynamically based on the type of content it relates to.  
                  </p>
                </div>
                <div className="">
                  <CardHorizontal imageUrl={testImage} />
             
                </div>
              </div>
              <div className="">
              </div>
            </div>
          </li>

          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
              <div>
                <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                    Card 1:1
                  </h2>
                  <p className="mb-6">The Card 1:1 component has an aspect ratio of 1:1 and has a width that adapts to the constraints of its parent wrapper. It also has an icon at the top right which can be changed dynamically based on the type of content it relates to.</p>
                </div>
                <div className="">
                  <CardSquaredImage imageUrl={testImage} />
             
                </div>
              </div>
              <div className="flex">
               
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                    Card 1:1 + text on right
                  </h2>
                  <Header4>Text</Header4>
                </div>
                <div className="">
                  <SectionUnderline>
                    <CardSquaredImage imageUrl={testImage} />
                    <h1 className="text-3xl">Section Underline</h1>
                  </SectionUnderline>
                </div>
              </div>
              <div className="flex">

              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="">
                  <SourceContainer
                    source="New York Times"
                    date={new Date(2024, 1, 16)}
                  />
                  <SourceContainer source="BBC News" date="16 February 2024" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                    Card programme
                  </h2>
                  <p className="mb-6 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="">
                  <ButtonCJ>Click Me</ButtonCJ>
                </div>
              </div>
              <div className="flex">
                <div>
                  <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                    Card programme
                  </h2>
                  <p className="mb-6 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="">
                  <Stats title="$21M" content="research grants" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                    Card programme
                  </h2>
                  <p className="mb-6 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className="gap-5">
              <div className="w-full">
                <div className="">
                  <TableCJ />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div className="w-[400px]">
                <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                  List item (text only)
                </h2>
                <p className="mb-6 ">The List item (text only) component contains a title and subtext which can contain one or more pieces of dynamic data from the content type from which the list item s data is pulled.</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-[400px]">
                <div className="">
                  <ListContent
                    title="Comparison of mammography AI algorithms with a clinical risk model for 5-year breast cancer risk prediction: An observational study"
                    source="Nature"
                    date="2023"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <ListSmall data={data} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <SocialMediaList {...socialMediaLinks} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`text-2xl font-ibmMono text-red-600 mb-3 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <TabsCJ />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
