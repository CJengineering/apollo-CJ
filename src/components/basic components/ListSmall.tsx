import { ListSmallProps } from '@/interfaces'
import React from 'react'

export default function ListSmall({ data }: ListSmallProps) {
  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <h6 className="text-tiny font-bold uppercase">{key}</h6>

          <div>
       
            {data[key].map((item, index) => (
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
