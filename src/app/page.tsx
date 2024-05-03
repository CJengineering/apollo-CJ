import CardHorizontal from '@/components/basic components/CardHorizontal'
import React from 'react'
import testImage from '@/images/test-image.jpg'
import CardProgramme from '@/components/basic components/CardProgramme'
import CardSquaredImage from '@/components/basic components/CardSquared'
import SectionUnderline from '@/components/layout/SectionUnderline'
import SourceContainer from '@/components/layout/SourceContainer'
import Header4 from '@/components/typography/Header4'
import ButtonCJ from '@/components/basic components/ButtonCJ'

import { handleClick } from '@/api/getDataWebflow'
import Stats from '@/components/basic components/Stats'
import TabsCJ from '@/components/custom components/TabsCJ'
import TableCJ from '@/components/custom components/TableCJ'
import ListContent from '@/components/basic components/ListContent'
import ListSmall from '@/components/basic components/ListSmall'
import SocialMediaList from '@/components/basic components/SocialMediaList'

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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <CardHorizontal imageUrl={testImage} />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w text-lg font-bold text-red-600">
                    Card Horizontal
                  </h4>
                  <p className="mt-1">
                    All descriptions will be added here. If the title is red it
                    means not finished
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <CardProgramme
                    imageUrl={testImage}
                    programmeTitle="J-Pal"
                    programmeType="abdul latif jameel poverty action lab"
                  />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w costa-extra-bold text-lg font-bold text-red-600 ">
                    Card programme
                  </h4>
                  <p className="mt-1">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <CardSquaredImage imageUrl={testImage} />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w costa-extra-bold text-lg font-bold text-red-600 ">
                    Card programme
                  </h4>
                  <p className="mt-1">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <SectionUnderline>
                    <CardSquaredImage imageUrl={testImage} />
                    <h1 className="text-3xl">Section Underline</h1>
                  </SectionUnderline>
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w costa-extra-bold text-lg font-bold text-red-600 ">
                    Card programme
                  </h4>
                  <Header4>Text</Header4>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <SourceContainer
                    source="New York Times"
                    date={new Date(2024, 1, 16)}
                  />
                  <SourceContainer source="BBC News" date="16 February 2024" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                    Card programme
                  </h4>
                  <p className="mt-1 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <ButtonCJ>Click Me</ButtonCJ>
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                    Card programme
                  </h4>
                  <p className="mt-1 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <Stats title="$21M" content="research grants" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                    Card programme
                  </h4>
                  <p className="mt-1 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex">
              <div>
                <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                  Card programme
                </h4>
                <p className="mt-1 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <TableCJ />
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex">
              <div>
                <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                  Card programme
                </h4>
                <p className="mt-1 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <ListContent
                    title="Comparison of mammography AI algorithms with a clinical risk model for 5-year breast cancer risk prediction: An observational study"
                    source="Nature"
                    date="2023"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex">
              <div>
                <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                  Card programme
                </h4>
                <p className="mt-1 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <ListSmall data={data} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex">
              <div>
                <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                  Card programme
                </h4>
                <p className="mt-1 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
                  <SocialMediaList {...socialMediaLinks} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex">
              <div>
                <h4 className="w costa-extra-bold text-lg font-bold  text-red-600 ">
                  Card programme
                </h4>
                <p className="mt-1 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="w-full border-2 border-dotted border-gray-800 p-4 ">
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
