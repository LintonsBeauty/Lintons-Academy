import { Footer } from '@/components/footer'
import { Home } from '@/components/home'
import { Menu } from '@/components/menu'
import { Programs } from '@/components/programs'
// import LogoBlackImages from 'assets/images/Beauty Academy Logo Black Cropped.png?w=480;640;1280;1980&format=webp'
import { FC } from 'react'

const Index: FC<object> = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        gtag('event', 'ads_conversion_Page_view_Page_load_htt_1',{' '}
        {
          // <event_parameters>
        }
        );`,
        }}
      />
      <div className="relative flex min-h-screen flex-col items-center">
        <Menu logo={false} />

        <Home />
        {/* <About /> */}
        <Programs />
        {/* <WhyUs />
        <Testimonials />
        <FAQ /> */}
        <Footer />
      </div>
    </>
  )
}

export default Index
