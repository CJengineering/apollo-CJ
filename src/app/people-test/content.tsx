import React from 'react'
import Image from 'next/image'
import image from '@/images/cancer institute.jpg'
import regina from '@/images/regina.jpg'
import { SocialMediaLinks } from '@/interfaces'
import SocialMediaList from '@/components/basic components/SocialMediaList'
import ListSmall from '@/components/basic components/ListSmall'
import CardHorizontal from '@/components/basic components/CardHorizontal'
import SectionUnderline from '@/components/layout/SectionUnderline'
import ListContent from '@/components/basic components/ListContent'
import CardSquaredImage from '@/components/basic components/CardSquared'
import CardSquared from '@/components/basic components/CardSquared'
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
export default function ContentPeople() {
  return (
    <div className="">
      <SectionUnderline>
        <div className="grid w-[100%] grid-cols-3 gap-3">
          <div className="">
            <div className="my-4 h-48 w-48">
              <Image
                className="h-full w-full rounded-full object-cover"
                src={regina}
                alt=""
              />
            </div>
            <div className="py-4">
              <h1 className=" costa-demi py-4">Regina Barzalay</h1>
              <div className="text-tiny font-semibold">MIT JAMEEL CLINIC</div>
              <div className="text-tiny ">
                Faculty lead for artificial inteligence
              </div>
            </div>
            <div className="py-4">
              <SocialMediaList
                instagram={socialMediaData.instagram}
                youtube={socialMediaData.youtube}
              />
            </div>
            <div className="py-4">
              <ListSmall
                data={{
                  'Reasearch areas': [
                    'Artificial Intelligence / Machine Learning',
                    'Oncology',
                    'Machine learning drug discovery',
                  ],
                }}
              />
            </div>
            <div className="py-4">
              <ListSmall
                data={{
                  Achivements: [
                    'National Academy of Medicine 2023',
                    'National Academy of Engineering 2023',
                    'Top 100 AI Leader in Drug Discovery & Advanced Health Care 2019',
                    'MacArthur Fellowship 2017',
                  ],
                }}
              />
            </div>
          </div>
          <div className="cols-span-2">
            <div className="py-4">
              <CardHorizontal imageUrl={image} />
              <div className="text-small font-bold"> Xibux Systems</div>
            </div>
            <div className="py-4">
            <div className="spacer" id="BIOGRAPHY" />
              < h2 className="text-tiny font-bold uppercase " >biography</h2>
              <p className="py-4">
                Regina Barzilay is the AI faculty lead of the Abdul Latif Jameel
                Clinic for Machine Learning in Health (Jameel Clinic), the
                epicentre of artificial intelligence (AI) and healthcare at the
                Massachusetts Institute of Technology (MIT). She is also a
                School of Engineering Distinguished Professor for AI and health
                in the department of electrical engineering and computer science
                and a member of the Computer Science and Artificial Intelligence
                Laboratory. Regina’s research interest focuses on machine
                learning models for molecular modelling with applications to
                drug discovery and clinical AI. She also concentrates on natural
                language processing and oncology, developing algorithms that can
                learn from cancer patient data to improve models of disease
                progression, treatment and potential cures.
              </p>
            </div>
          </div>
          <div className="cols-span-2">
            <div className="py-4">
              <CardHorizontal imageUrl={image} />
              <div className="text-small font-bold"> Xibux Systems</div>
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline tag='NEWS'>
        <div>
          <h2 className="text-tiny font-bold uppercase ">news</h2>
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
      <SectionUnderline tag='IMPACT'>
        <div>
          <h2 className="text-tiny mb-4 font-bold uppercase" >impact</h2>
          <div className="grid grid-cols-6 gap-3">
            <div>
              <CardSquared imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
            <div>
              <CardSquared imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
            <div>
              <CardSquared imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
            <div>
              <CardSquared imageUrl={image} />
              <div className="text-small font-bold"> What is J-WAFS ?</div>
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny mb-4 font-bold uppercase">impact</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="w-50 flex gap-3 ">
      
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
    </div>
  )
}
