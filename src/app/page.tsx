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
import Accordion from '@/components/basic components/Accordion'
import Caroussel from '@/components/basic components/Caroussel'
import CarousselForComponents from '@/components/basic components/CarousselForComponents'
import CarousselMIT from '@/components/basic components/CarousselMIT'

const data = { news: ['name one', 'name two'] }
const imageLinks = [
  'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
  'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
  'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
  'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
  'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
  'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
  'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
]

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
const components = [
  <CardProgramme
    imageUrl={testImage}
    programmeTitle="J-PAL"
    programmeType="abdul latif jameel poverty action lab"
  />,
  <CardProgramme
    imageUrl={testImage}
    programmeTitle="J-PAL"
    programmeType="abdul latif jameel poverty action lab"
  />,
  <CardProgramme
    imageUrl={testImage}
    programmeTitle="J-PAL"
    programmeType="abdul latif jameel poverty action lab"
  />,
  <CardProgramme
    imageUrl={testImage}
    programmeTitle="J-PAL"
    programmeType="abdul latif jameel poverty action lab"
  />,
  <CardProgramme
    imageUrl={testImage}
    programmeTitle="J-PAL"
    programmeType="abdul latif jameel poverty action lab"
  />,
  <CardProgramme
  imageUrl={testImage}
  programmeTitle="J-PAL"
  programmeType="abdul latif jameel poverty action lab"
/>,
  <CardProgramme
  imageUrl={testImage}
  programmeTitle="J-PAL"
  programmeType="abdul latif jameel poverty action lab"
/>,
]
export default async function Home() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-9 sm:px-6 lg:px-8">
        <h1 className={`font-ibmMono text-4xl`}>Basic icons</h1>
        <ul role="list" className="">
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className="mb-3 font-ibmMono text-2xl text-red-600 ">
                    Programme Card
                  </h2>
                  <p className="mb-6">
                    The Programme Card component has an aspect ratio of 1:1 and
                    has a width that adadpts to the contraints of its parent
                    wrapper. It{' '}
                  </p>
                </div>
                <div className="">
                  <CardProgramme
                    imageUrl={testImage}
                    programmeTitle="J-PAL"
                    programmeType="abdul latif jameel poverty action lab"
                  />
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </li>
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card 16:9
                  </h2>
                  <p className="mb-6">
                    The Card 16:9 component has an aspect ratio of 16:9 and has
                    a width that adapts to the constraints of its parent
                    wrapper. It also has an icon at the top right which can be
                    changed dynamically based on the type of content it relates
                    to.
                  </p>
                </div>
                <div className="">
                  <CardHorizontal imageUrl={testImage} />
                </div>
              </div>
              <div className=""></div>
            </div>
          </li>

          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card 1:1
                  </h2>
                  <p className="mb-6">
                    The Card 1:1 component has an aspect ratio of 1:1 and has a
                    width that adapts to the constraints of its parent wrapper.
                    It also has an icon at the top right which can be changed
                    dynamically based on the type of content it relates to.
                  </p>
                </div>
                <div className="">
                  <CardSquaredImage imageUrl={testImage} />
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </li>
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
              <div className="flex"></div>
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
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  List item (text only)
                </h2>
                <p className="mb-6 ">
                  The List item (text only) component contains a title and
                  subtext which can contain one or more pieces of dynamic data
                  from the content type from which the list item s data is
                  pulled.
                </p>
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
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
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
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <Accordion
                    panelContent={<div>SOME ELEMMENTS</div>}
                    topElement={<h1>Title or Component</h1>}
                    bgColor="bg-gray-200"
                  ></Accordion>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className=" w-full md:w-2/3">
                <div className="">
                  <CarousselMIT content={components} widthMobile='200' width='300'/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
