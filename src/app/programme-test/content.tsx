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
import research from '@/images/Research_J-WAFS.png'
import funding from '@/images/Funding_J-WAFS.png'
import spinouts from '@/images/Spinouts_J-WAFS.png'
import fact from '@/images/FACT Alliance_J-WAFS.png'
import jameelIndex from '@/images/Jameel Index_J-WAFS.png'
import Header1 from '@/components/typography/Header1'
import Header2 from '@/components/typography/Header2'
import Header3 from '@/components/typography/Header3'
import Header4 from '@/components/typography/Header4'
import Header5 from '@/components/typography/Header5'
import Header6 from '@/components/typography/Header6'

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
      <div className="py-4">
            <Image
              className="object-fit w-24"
              src={logo}
              alt="Organization Logo"
            />
            <h1 className="costa-extra-bold py-4 text-xl font-bold lg:text-2xl">
              {repository.top.description}
            </h1>
          </div>
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
        <div>
          
          <div className="py_4">
            <CardHorizontal imageUrl={image} />
          </div>
         
          <p className="py-4">{repository.content.fullDescription}</p>

          <SocialMediaList
            instagram={socialMediaData.instagram}
            youtube={socialMediaData.youtube}
          />
        </div>
        <div>
        <div className="flex justify-between py-0 lg:grid lg:grid-cols-3">
            <ListSmall data={repository.content['key partners']?.data} />
            <ListSmall data={repository.content.established?.data} />
            <ListSmall data={repository.content.headquarters?.data} />
          </div>
          <div className="grid grid-cols-3 py-4">
            <ListSmall data={repository.content.leadership?.data} />
            <ListSmall data={repository.content['key initiatives']?.data} />
            <ListSmall data={repository.content['key partners']?.data} />
          </div>

          <div className="py-4">
            <div className="text-small font-bold uppercase pb-2">LATEST</div>
            <div className="block">
              <ListContent
                title="A new way to swiftly eliminate micropollutants from water "
                source="MIT News"
                date="9 January 2024"
              />
              <ListContent
                title="Mining is necessary for the green transition. Here’s why..."
                source="MIT News"
                date="23 December 2023"
              />
              <ListContent
                title="Lebanese MIT professor named winner of Great Arab Minds award "
                source="MIT News"
                date="14 November 2024"
              />
            </div>
            <div className="silent text-tiny uppercase">view all {'>'}</div>
          </div>
          
        </div>
      </div>
      <div className="mt-4 w-full border-t border-gray-300 py-2" />
      <SectionUnderline>
        <div>
          <div className="mb-4">
            <Header2>IMPACT</Header2></div>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {repository.content.stats.map((stat) => (
              <Stats
                key={stat.title}
                title={stat.title}
                content={stat.content}
              />
            ))}
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="mb-4">
          <Header2>FEATURES</Header2>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:flex lg:space-x-2 ">
            {[
              { text: 'Research', image: research },
              { text: 'Funding', image: funding },
              { text: 'Spinouts', image: spinouts },
              { text: 'FACT Alliance', image: fact },
              { text: 'Jameel Index', image: jameelIndex },
            ].map((item) => (
              <div key={item.text}>
                <CardSquared imageUrl={item.image} />
                <div className="text-base font-semibold">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="mb-4">
            <Header2>PRESS & NEWS</Header2></div>
          <div className="flex flex-row gap-3">
            <div>
            {[
              {
                title: 'Antibiotic identified by AI',
                source: 'Nature',
                date: '12 Dec 2023',
              },
              {
                title:
                  'Comparison of mammography AI algorithms with a clinical risk model for 5-year breast cancer risk prediction: An observational study',
                source: 'Nature',
                date: '2023',
              },
              {
                title: 'Conformal language modeling',
                source: 'Nature',
                date: '2023',
              },
              {
                title: 'Conformal language modeling',
                source: 'Arxiv',
                date: '2023',
              },
              {
                title:
                  'The new frontiers of AI: Funding challenges and potential solutions',
                source: 'Medriva',
                date: '16 February 2024',
              },
            ].map((item) => (
              <ListContent
                key={item.title}
                title={item.title}
                source={item.source}
                date={item.date}
              />
            ))}
          </div>
          <div>
            {[
              {
                title: 'Antibiotic identified by AI',
                source: 'Nature',
                date: '12 Dec 2023',
              },
              {
                title:
                  'Comparison of mammography AI algorithms with a clinical risk model for 5-year breast cancer risk prediction: An observational study',
                source: 'Nature',
                date: '2023',
              },
              {
                title: 'Conformal language modeling',
                source: 'Nature',
                date: '2023',
              },
              {
                title: 'Conformal language modeling',
                source: 'Arxiv',
                date: '2023',
              },
              {
                title:
                  'The new frontiers of AI: Funding challenges and potential solutions',
                source: 'Medriva',
                date: '16 February 2024',
              },
            ].map((item) => (
              <ListContent
                key={item.title}
                title={item.title}
                source={item.source}
                date={item.date}
              />
            ))}
          </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="mb-4"><Header2>EVENTS</Header2></div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
            <div className="block">
              <CardHorizontal imageUrl={image} />
              <div className="flex  w-full items-center">
                <ListContent
                  title="The new frontiers of AI: Funding challenges and potential solutions"
                  source="London, UK"
                  date="16 February 2024"
                />
              </div>
            </div>
            <div className="block">
              <CardHorizontal imageUrl={image} />
              <div className="flex  w-full items-center">
                <ListContent
                  title="The new frontiers of AI: Funding challenges and potential solutions"
                  source="Medriva "
                  date="16 February 2024"
                />
              </div>
            </div>
            <div className="block">
              <CardHorizontal imageUrl={image} />
              <div className="flex  w-full items-center">
                <ListContent
                  title="The new frontiers of AI: Funding challenges and potential solutions"
                  source="Medriva "
                  date="16 February 2024"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny font-bold uppercase ">Publications</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            {[
              {
                title: 'Antibiotic identified by AI',
                source: '{author_name}',
                date: '12 Dec 2023',
              },
              {
                title: 'Conformal language modeling',
                source: 'Arxiv',
                date: '2023',
              },
              {
                title:
                  'Comparison of mammography AI algorithms with a clinical risk model for 5-year breast cancer risk prediction: An observational study',
                source: 'Nature',
                date: '2023',
              },
            ].map((item) => (
              <ListContent
                key={item.title}
                title={item.title}
                source={item.source}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </SectionUnderline>
    </div>
  )
}
