'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Key } from 'react'
// content for the sidebar
const navigation = [
  {
    name: 'About',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Family', href: '#' },
    ],
  },
  { name: 'Community', href: '#', current: false },

  {
    name: 'Programmes',
    current: false,
    children: [
      {
        name: 'J-PAL',
        children: [
          { name: 'Overview', href: '#', current: false },
          { name: 'J-PAL MENA', href: '#', current: false },
          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
          {
            name: 'People',
            children: [
              { name: 'people 1', href: '#' },
              { name: 'people 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
        ],
      },
      {
        name: 'J-WAFS',
        children: [
          { name: 'Overview', href: '#', current: false },
          { name: 'FACT Alliance', href: '#', current: false },
          { name: 'Spinouts', href: '#', current: false },
          { name: 'Funding', href: '#', current: false },
          { name: 'Jameel Index', href: '#', current: false },
          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
          {
            name: 'People',
            children: [
              { name: 'people 1', href: '#' },
              { name: 'people 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
        ],
      },
      { name: 'J-WEL', href: '#', current: false },
      {
        name: 'Jameel-Clinic',
        children: [
          { name: 'Overview', href: '#', current: false },
          { name: 'Press', href: '#', current: false },
          { name: 'AI/ML tools', href: '#', current: false },
          { name: 'Hospital Network', href: '#', current: false },
          { name: 'MIT-Takeda Programme', href: '#', current: false },
          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
          {
            name: 'People',
            children: [
              { name: 'people 1', href: '#' },
              { name: 'people 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
        ],
      },
      {
        name: 'Jameel Institute',
        children: [
          { name: 'Overview', href: '#', current: false },
          { name: 'Kenneth C. Griffin Initiative', href: '#', current: false },
          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
          {
            name: 'People',
            children: [
              { name: 'people 1', href: '#' },
              { name: 'people 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
        ],
      },
      {
        name: 'Jameel Observatory',
        children: [
          { name: 'Overview', href: '#', current: false },
          {
            name: 'Jameel Observatory for Food Security Early Action',
            children: [
              { name: 'Overview', href: '#', current: false },
              { name: 'Reports', href: '#', current: false },
              {
                name: 'Events',
                children: [
                  { name: 'event 1', href: '#' },
                  { name: 'event 2', href: '#' },
                  { name: 'view all', href: '#' },
                ],
              },
              {
                name: 'People',
                children: [
                  { name: 'people 1', href: '#' },
                  { name: 'people 2', href: '#' },
                  { name: 'view all', href: '#' },
                ],
              },
            ],
          },
          { name: 'Jameel Observatory CREWSNET', href: '#', current: false },
        ],
      },
      {
        name: 'Jameel Arts & Health Lab',
        children: [
          { name: 'Overview', href: '#', current: false },

          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
        ],
      },
      {
        name: 'Climavore x Jameel at RCA',
        children: [
          { name: 'Overview', href: '#', current: false },

          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
        ],
      },

      {
        name: 'Jameel House of Traditional Arts in Cairo',
        children: [
          { name: 'Overview', href: '#', current: false },

          {
            name: 'Events',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
          { name: 'Gallery', href: '#', current: false },
          { name: 'Graduates', href: '#', current: false },
        ],
      },
      {
        name: 'Pratham Jameel Second Chance',
        children: [{ name: 'Overview', href: '#', current: false }],
      },
      {
        name: 'Climate Labs',
        children: [
          { name: 'Overview', href: '#', current: false },
          { name: 'J-PAL Air, Water & Energy Lab', href: '#', current: false },
          { name: 'Jameel C40 Urban Climate Lab', href: '#', current: false },
        ],
      },
      { name: 'Ejada', href: '#', current: false },
      {
        name: 'Funds',
        children: [
          { name: 'Jameel Fund', href: '#', current: false },
          { name: 'Iraq Cultural Health Fund', href: '#', current: false },
          { name: 'Covid-19-Excellence Fund', href: '#', current: false },
        ],
      },
      { name: 'Jameel Toyota Scholarship', href: '#', current: false },
      {
        name: 'Bocelli-Jameel Scholarship',
        children: [
          { name: 'Overview', href: '#', current: false },
          {
            name: 'Scholars',
            children: [
              {
                name: 'Clara Barbier Serrano (2020)',
                href: '#',
                current: false,
              },
              { name: 'Laura Mekhail (2021)', href: '#', current: false },
              { name: 'Seonwoo Lee (2022)', href: '#', current: false },
              { name: 'Anastasia Koorn (2023)', href: '#', current: false },
              { name: 'Henna Mun (2023)', href: '#', current: false },
            ],
          },
          {
            name: 'Performances',
            children: [
              { name: 'event 1', href: '#' },
              { name: 'event 2', href: '#' },
              { name: 'view all', href: '#' },
            ],
          },
          { name: 'Gallery', href: '#', current: false },
        ],
      },
      { name: 'Voxel Lab', href: '#', current: false },
    ],
  },
  { name: 'News', href: '#', current: false },
  { name: 'Press', href: '#', current: false },
  { name: 'Events', href: '#', current: false },
  {
    name: 'Stories',
    current: false,
    children: [
      { name: 'A Cairo Cornerstone', href: '#' },
      { name: 'GCC Climate and Liveability', href: '#' },
      { name: 'GCC Heat Tracker', href: '#' },
      { name: 'Harvesting Hope', href: '#' },
      { name: 'A History of Healthcare in Saudi Arabia', href: '#' },
    ],
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
// logic for UI NAVIGATION
function NavigationLink({ item }: { item: any }) {
  if (!item.children) {
    return (
      <a
        href={item.href}
        className={classNames(
          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
          'block rounded-md py-2 pl-10 pr-2 text-sm  leading-6 text-gray-700',
        )}
      >
        {item.name}
      </a>
    )
  }
  // Logic For UI DROPDOWNS
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
              'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700',
            )}
          >
            <ChevronRightIcon
              className={classNames(
                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                'h-5 w-5 shrink-0',
              )}
              aria-hidden="true"
            />
            {item.name}
          </Disclosure.Button>
          <Disclosure.Panel as="ul" className="mt-1 px-2">
            {item.children.map((subItem: { name: Key | null | undefined }) => (
              <li key={subItem.name}>
                <NavigationLink item={subItem} />
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default function SideBarCustom() {
  return (
    <div className=" fixed  z-20 flex h-full max-w-[250px]  grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className=" flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavigationLink item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
