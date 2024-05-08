import React from 'react'
import Image from 'next/image'
import image from '@/images/cancer institute.jpg'
import ListSmall from '@/components/basic components/ListSmall'
import SocialMediaList from '@/components/basic components/SocialMediaList'
import ButtonCJ from '@/components/basic components/ButtonCJ'
import { RowData, SocialMediaLinks } from '@/interfaces'
import Stats from '@/components/basic components/Stats'
import ListContent from '@/components/basic components/ListContent'
import CardSquaredImage from '@/components/basic components/CardSquared'
import SectionUnderline from '@/components/layout/SectionUnderline'
import CardHorizontal from '@/components/basic components/CardHorizontal'
import CardSquared from '@/components/basic components/CardSquared'
import logo from '@/images/J-WAFS_DARK_SHOT_PNG 1 (1).png'

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
export default function ContentProgramme({ repository }: RowData) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="costa-extra-bold py-4 text-2xl font-bold">
            {repository.top.name}
          </h1>
          <div className="py-4">
            <Image
              className="object-fit w-24"
              src={logo}
              alt="Organization Logo"
            />
          </div>
          <div className="grid grid-cols-3 py-4">
            <ListSmall data={repository.content['key partners']?.data} />
          </div>
          <p className="py-4">
           {repository.top.description}
          </p>

          <SocialMediaList
            instagram={socialMediaData.instagram}
            youtube={socialMediaData.youtube}
          />
        </div>
        <div>
          <div className="grid grid-cols-3 py-4">
            <ListSmall data={repository.content.headquarters?.data} />
            <ListSmall
              data={{ 'Key Initiatives': ['Climate Change', 'Education'] }}
            />
            <ListSmall data={{ 'Key Partners': ['UN', 'WHO'] }} />
          </div>

          <div className="py-4">
            <div className="text-tiny font-bold uppercase ">news</div>
            <div className="block py-4">
              <ListContent
                title="New Research Initiative"
                source="Global News"
                date="2024-05-06"
              />
              <ListContent
                title="Partnership with WHO"
                source="Health Daily"
                date="2024-04-28"
              />
              <ListContent
                title="Education Drive"
                source="Education Today"
                date="2024-03-14"
              />
            </div>
          </div>
        </div>
      </div>
      <SectionUnderline>
        <div>
          <div className="text-tiny mb-4 font-bold uppercase">impact</div>
          <div className="grid grid-cols-3">
            <Stats title="21M" content="Beneficiaries" />
            <Stats title=" 50+" content="Countries" />
            <Stats title=" 200+" content="Projects" />
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny mb-4 font-bold uppercase">features</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <CardHorizontal imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
            <div>
              <CardHorizontal imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
            <div>
              <CardHorizontal imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny font-bold uppercase ">news</div>
          <div className="grid grid-cols-2 gap-6">
            <div className="block">
              <ListContent
                title="New Research Initiative"
                source="Global News"
                date="2024-05-06"
              />
              <ListContent
                title="Partnership with WHO"
                source="Health Daily"
                date="2024-04-28"
              />
              <ListContent
                title="Education Drive"
                source="Education Today"
                date="2024-03-14"
              />
            </div>
            <div className="block">
              <ListContent
                title="New Research Initiative"
                source="Global News"
                date="2024-05-06"
              />
              <ListContent
                title="Partnership with WHO"
                source="Health Daily"
                date="2024-04-28"
              />
              <ListContent
                title="Education Drive"
                source="Education Today"
                date="2024-03-14"
              />
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny mb-4 font-bold uppercase">impact</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex gap-3">
              <CardSquared imageUrl={image} />
              <div className="flex  w-full items-center">
                <ListContent
                  title="New Research Initiative"
                  source="Global News"
                  date="2024 05 06"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <CardSquared imageUrl={image} />
              <div className="flex  w-full items-center">
                <ListContent
                  title="New Research Initiative"
                  source="Global News"
                  date="2024-05-06"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <CardSquared imageUrl={image} />
              <div className="flex  w-full items-center">
                <ListContent
                  title="New Research Initiative"
                  source="Global News"
                  date="2024-05-06"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny mb-4 font-bold uppercase">events</div>
          <div className=" w-[100px] 2xl:w-[400px]">
            <CardSquared imageUrl={image} />
            <div className="flex  w-full items-center">
              <ListContent
                title="New Research Initiative"
                source="Global News"
                date="2024-05-06"
              />
            </div>
          </div>
        </div>
      </SectionUnderline>
    </div>
  )
}
