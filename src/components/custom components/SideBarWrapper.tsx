'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import SidebarDummy from '../test components/SidebarDummy'
import TestSidebar from '../test components/TestSidebar'

export default function SideBarWrapper() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        show={isShowing}
  
      >
        <TestSidebar />
      </Transition>
    </>
  )
}
