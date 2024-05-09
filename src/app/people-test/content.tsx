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
import profile from '@/images/Regina rounded.png'
import paysage1 from '@/images/ReginaPaysage 1.png'
import paysage2 from '@/images/Reginapaysage2.png'
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
        <div className=" grid w-[100%] grid-cols-1 gap-3 md:grid-cols-3 ">
          <div className="col-span-1 ">
            <div className="my-4 hidden h-48 w-48 md:block">
              <Image
                className="h-full w-full rounded-full object-cover"
                src={profile}
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
          <div className="col-span-2 ">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="py-4">
                <CardHorizontal imageUrl={paysage1} />
                <ListContent
                  title="The MIT Jameel Clinic's Regina Barzilay discusses AI's role in cancer detection on PBS Nova"
                  source="PBS Nova"
                  date="6 April 2024"
                />
              </div>
              <div className="py-4">
                <CardHorizontal imageUrl={paysage2} />
                <ListContent
                  title="MIT Jameel Clinic's Regina Barzilay comments on Biden's new executive order"
                  source="PBS Nova"
                  date="6 April 2024"
                />
              </div>
            </div>
            <div className=" col-span-3">
              <div className="py-4">
                <div className="spacer" id="BIOGRAPHY" />
                <h2 className="text-tiny font-bold uppercase ">biography</h2>
                <p className="py-4">
                  Regina Barzilay is the AI faculty lead of the Abdul Latif
                  Jameel Clinic for Machine Learning in Health (Jameel Clinic),
                  the epicentre of artificial intelligence (AI) and healthcare
                  at the Massachusetts Institute of Technology (MIT). She is
                  also a School of Engineering Distinguished Professor for AI
                  and health in the department of electrical engineering and
                  computer science and a member of the Computer Science and
                  Artificial Intelligence Laboratory.
                </p>
                <p>
                  Regina’s research interest focuses on machine learning models
                  for molecular modelling with applications to drug discovery
                  and clinical AI. She also concentrates on natural language
                  processing and oncology, developing algorithms that can learn
                  from cancer patient data to improve models of disease
                  progression, treatment and potential cures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionUnderline>
      <SectionUnderline>
        <div>
          <div className="text-tiny font-bold uppercase ">PRESS & NEWS</div>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-6">
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
      </SectionUnderline>
      <SectionUnderline tag="IMPACT">
        <div>
          <h2 className="text-tiny mb-4 font-bold uppercase">Features</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
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
          <div className="text-tiny mb-4 font-bold uppercase">multimedia</div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
