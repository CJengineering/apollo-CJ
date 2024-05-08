'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import SidebarDummy from '../test components/SidebarDummy'
import TestSidebar from '../test components/TestSidebar'
import SideBarCustom from '../basic components/SideBarCustom'

export default function SideBarWrapper() {
  const [isShowing, setIsShowing] = useState(true)

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition show={isShowing}>
        <SideBarCustom />
      </Transition>
    </>
  )
}
