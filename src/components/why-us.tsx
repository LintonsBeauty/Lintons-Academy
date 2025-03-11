export function WhyUs() {
  return (
    <div
      id="why-us"
      className="flex w-full max-w-[96rem] flex-col items-center p-8"
    >
      <h2 className="mb-12 mt-10 text-center text-2xl">Why Choose Us</h2>
      <div className="mb-12 w-full max-w-screen-lg space-y-6 px-8 text-center text-lg">
        <p>
          Choosing us means stepping into a world of limitless opportunities. We
          connect you with <span>multinational beauty brands</span>, ensuring
          you gain <span>real-world experience and exposure.</span>
        </p>{' '}
        <p>
          Our placement services help you{' '}
          <span>seamlessly transition from student to professional</span>,
          bridging the gap between learning and working.
        </p>
        <p>
          Enjoy lifelong benefits with a{' '}
          <span>15% discount on all our products.</span> Take advantage of our{' '}
          <span>flexible, customized classes</span> designed to fit your busy
          schedule.
        </p>
        <p>
          Enroll with us and start your journey to becoming a{' '}
          <span>top-tier</span> beauty professional.
        </p>
      </div>
      <div className="grid h-auto grid-cols-1 divide-y divide-[#E51629] md:h-60 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
        <div className="flex items-center justify-center">
          <div className="max-w-96 space-y-5 px-4 py-6 md:py-4">
            <h3 className="text-center text-xl">Experienced Instructors</h3>
            <p className="text-balance text-center text-lg font-light">
              Learn from industry professionals with years of experience.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-96 space-y-5 px-4 py-6 md:py-4">
            <h3 className="text-center text-xl">State-of-the-Art Facilities</h3>
            <p className="text-balance text-center text-lg font-light">
              Train with the latest tools and technologies.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-96 space-y-5 px-4 py-6 md:py-4">
            <h3 className="text-center text-xl">Hands-On Training</h3>
            <p className="text-balance text-center text-lg font-light">
              Gain practical experience through real-world scenarios.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-96 space-y-5 px-4 py-6 md:py-4">
            <h3 className="text-center text-xl">Job Placement Assistance</h3>
            <p className="text-balance text-center text-lg font-light">
              We help our graduates find rewarding careers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
