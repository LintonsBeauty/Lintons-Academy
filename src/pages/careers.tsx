import { JobList } from '@/components/jobs'
import { Footer } from '@/components/footer'
import { Menu } from '@/components/menu'
import { FC } from 'react'

const Careers: FC<object> = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center">
        <Menu className="stroke-black" />

        <JobList />
        {/* <WhyUs />
        <Testimonials />
        <FAQ /> */}
        <Footer />
      </div>
    </>
  )
}

export default Careers
