import { HairAcademy } from '@/components/hair-academy'
import { Menu } from '@/components/menu'
import { FC } from 'react'

const HairSchool: FC<object> = () => (
  <>
    <div className="relative flex min-h-screen flex-col items-center bg-repeat-round">
      <Menu className="stroke-black" />

      <HairAcademy />
    </div>
    <div className="flex w-full items-center justify-center pb-10">
      <div className="mt-8 text-center text-sm md:mt-12 md:text-base">
        © Lintons Academy, 2024. All Rights Reserved
      </div>
    </div>
    {/* <Footer /> */}
  </>
)

export default HairSchool
