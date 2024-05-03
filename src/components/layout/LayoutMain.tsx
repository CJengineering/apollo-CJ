import React from 'react'
import SidebarDummy from '../test components/SidebarDummy'
import TestSidebar from '../test components/TestSidebar'
import SideBarWrapper from '../custom components/SideBarWrapper'

export default function LayoutMain({
  mainContent,
  tocContent,
}: {
  mainContent: React.ReactNode
  tocContent: React.ReactNode
}) {
  return (
    <div className=" flex h-full   ">
      <div className="">
        <SideBarWrapper />
      </div>

      <div className="relative mx-auto flex h-full ">
        <main className="w-[320px] max-w-[1200px] flex-auto sm:w-[600px] md:w-[720px] lg:w-[720px] xl:w-[980px] 2xl:w-[1200px] ">
          <div className=" w-100 flex h-full flex-col   md:flex-row">
            <div className={` w-100 ${tocContent ? 'md:w-[25%]' : 'hidden'}} md:hidden `}>{tocContent}</div>
            <div className={`w-100 ${tocContent ? 'md:w-[75%]' : 'w-full'}}`}>{mainContent}</div>

            <div className={`hidden  md:block ${tocContent ? 'md:w-[25%]' : 'hidden'}} `} >{tocContent}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
