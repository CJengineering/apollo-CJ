'use client'
import Image from 'next/image'
import React from 'react'
import Header2 from '../typography/Header2'
import { Disclosure } from '@headlessui/react'
import SocialMediaList from '../basic components/SocialMediaList'
import CardSquaredImage from '../basic components/CardSquared'
import testImage from '@/images/test-image.jpg'
import jwafsImage from '@/images/J-WAFS_DARK_SHOT_PNG 1 (1).png'
import ListSmall from '../basic components/ListSmall'
import ListContent from '../basic components/ListContent'
import ButtonCJ from '../basic components/ButtonCJ'
import Stats from '../basic components/Stats'
import {
  CardHorizontalImageProps,
  ListContentProps,
  RowData,
  RowTopData,
  SocialMediaLinks,
  StatProps,
} from '@/interfaces'
import { rowDataExample } from '@/fake data/fakeProgrammes'

function TableRow({ repository }: RowData) {
  const data = { news: ['name one', 'name two'] }
  const socialMediaData: SocialMediaLinks = {
    instagram: {
      url: 'https://instagram.com/yourprofile',
      name: 'Instagram',
    },
    youtube: {
      url: 'https://youtube.com/yourchannel',
      name: 'YouTube',
    },
  }
  return (
    <div className="border-b-[1px]">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="grid  min-w-full grid-cols-5  border-gray-300">
              <div
                className={`py-3 text-left text-gray-600 ${open ? 'opacity-100' : 'opacity-100'}`}
              >
                <h2 className="costa-bold text-lg uppercase">
                  {repository.top.name}
                </h2>
                <h3 className="text-sm capitalize ">
                  {repository.top.description}
                </h3>
              </div>
              <div
                className={`py-3 text-left text-gray-600 ${open ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="d">{repository.top.mission}</div>
              </div>
              <div
                className={`flex items-center py-3 text-left text-gray-600 ${open ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="text-sm"> {repository.top.year}</div>
              </div>
              <div
                className={`flex items-center py-3 text-left text-gray-600 ${open ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="text-sm">
                  {repository.top.partners.join(', ')}
                </div>
              </div>
              <div className="flex items-center justify-end  py-3 text-right text-gray-600">
                <>
                  <Disclosure.Button className="">
                    <div
                      className={
                        open ? 'rotate-45 transform text-xl' : 'text-xl'
                      }
                    >
                      +
                    </div>
                  </Disclosure.Button>
                </>
              </div>
            </div>

            <Disclosure.Panel className="text-gray-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <div>
                    <Image
                      className=" object-fit w-24"
                      src={repository.content.logo.url}
                      alt=""
                      unoptimized
                    />
                  </div>
                  <div className="grid grid-cols-3">
                    <div>
                      <ListSmall data={repository.content.research?.data || {}}  />
                    </div>
                    <div>
                      <ListSmall data={repository.content.established?.data || {}}/>
                    </div>
                    <div>
                      <ListSmall data={repository.content.headquarters?.data || {}} />
                    </div>
                  </div>
                  <p>
                 {repository.content.fullDescription}
                  </p>

                  <SocialMediaList {...repository.content.socialMediaLinks} />
                  <ButtonCJ>Discover</ButtonCJ>
                </div>
                <div>
                  <div className="grid grid-cols-3">
                    <ListSmall data={repository.content.leadership?.data} />
                    <ListSmall data={repository.content['key initiatives']?.data} />
                    <ListSmall data={repository.content['key partners']?.data} />
                  </div>
                  <div>
                    <div className="text-tiny font-bold uppercase">impact</div>
                    <div className="grid grid-cols-3">
                    {repository.content.stats.map((stat: StatProps) => (
                      <Stats title={stat.title} content={stat.content} />
                    ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-tiny font-bold uppercase ">news</div>
                    <div className="block">
                      {repository.content.listContent.map((content: ListContentProps) => (
                        <ListContent title={content.title} source={content.source} date={content.date} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-small uppercase ">features</div>
                    <div className=" grid grid-cols-3 ">
                      {repository.content.features.map((feature) => (
                        <CardSquaredImage imageUrl={feature.image.imageUrl} />
                      ))}
                   
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default function TableCJ() {
  return (
    <div className="overflow-x-auto">
      <div className="text-small grid min-w-full grid-cols-5 border-y-[1px]  border-gray-300 bg-gray-100 ">
        {/* Header */}
        <div className=" py-3 text-left font-semibold uppercase tracking-wider text-gray-600">
          Name
        </div>
        <div className=" py-3 text-left font-semibold uppercase tracking-wider text-gray-600">
          Mission
        </div>
        <div className="py-3 text-left font-semibold uppercase tracking-wider text-gray-600">
          Established
        </div>
        <div className=" py-3 text-left font-semibold uppercase tracking-wider text-gray-600">
          Key Partners
        </div>
        <div className=" py-3 text-left font-semibold uppercase tracking-wider text-gray-600"></div>
      </div>
      {/* Row */}
      <TableRow {...rowDataExample} />
    </div>
  )
}
