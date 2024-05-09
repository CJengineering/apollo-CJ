import { ListSmallProps } from '@/interfaces'
import React from 'react'

export default function ListSmall({ data }: ListSmallProps) {
  if (!data ) {
    return <div></div>;
  }
  return (
    
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <h6 className="text-tiny font-bold py-2 uppercase">{key}</h6>

          <div>
       
            {data[key] &&  data[key]?.map((item, index) => (
              <div className="text-tiny" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
