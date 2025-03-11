import { BeautyAcademy } from '@/components/beauty-academy'
import { Menu } from '@/components/menu'
import { FC } from 'react'

const BeautyCourses: FC<object> = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
      gtag('event', 'ads_conversion_Page_view_Beauty_School_1',{' '}
      {
        // <event_parameters>
      }
      );`,
      }}
    />
    <div className="relative flex min-h-screen flex-col items-center bg-repeat-round">
      <Menu className="stroke-black" />

      <BeautyAcademy />
    </div>
    <div className="flex w-full items-center justify-center pb-10">
      <div className="mt-8 text-center text-sm md:mt-12 md:text-base">
        © Lintons Academy, 2024. All Rights Reserved
      </div>
    </div>
    {/* <Footer /> */}
  </>
)

export default BeautyCourses
