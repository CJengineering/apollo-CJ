import { storyblokEditable } from '@storyblok/react/rsc'
import { renderRichText } from "@storyblok/react";
import { BlokType } from './Page'

const CardBlok = ({ blok }: { blok: BlokType }) => {
    const renderedRichText = renderRichText(blok.content);
  

  return (
    <div className="bg-white py-24 sm:py-32"  {...storyblokEditable(blok)} >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
       
          <div>
            <h1>     {blok.title}</h1>
            <h2>{blok.subTitle}</h2>
            <div>
           
            <div dangerouslySetInnerHTML={{ __html: renderedRichText }} />
            </div>
       
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg"></div>
            <div className="mt-10 flex">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Learn more about our company{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBlok
