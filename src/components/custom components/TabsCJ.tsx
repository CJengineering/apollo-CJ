'use client'
import { Tab } from '@headlessui/react'

export default function TabsCJ() {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-between gap-2" >
        <Tab className="w-full focus:outline-none hover:  border-[1px] border-solid border-gray-600 py-4 uppercase ui-selected:bg-orange-600 ">
          labs
        </Tab>
        <Tab className="w-full focus:outline-none border-[1px]  border-solid border-gray-600 py-4 uppercase ui-selected:bg-orange-600 ">
          all
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
