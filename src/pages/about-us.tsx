import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Menu } from '@/components/menu'
import { FC } from 'react'

const AboutUs: FC<object> = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center">
        <Menu className="stroke-black" />

        <About />
        {/* <WhyUs />
        <Testimonials />
        <FAQ /> */}
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
