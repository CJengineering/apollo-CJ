import CardHorizontal from '@/components/basic components/CardHorizontal'

export default async function Home() {
  return (
    <div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-4">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <CardHorizontal />
              </div>
              <div className="flex">
              
                <div>
                  <h4 className="text-lg font-bold text-red-600">Card Horizontal </h4>
                  <p className="mt-1">
                   All descriptions will be added here. If the title is red it means not finished 
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="w-[400px]">
              <CardHorizontal />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
