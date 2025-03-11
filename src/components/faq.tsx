import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export function FAQ() {
  return (
    <div className="h-full min-h-screen w-full max-w-screen-lg items-center p-8 2xl:max-w-screen-xl">
      <h2 className="mb-16 text-center text-2xl">
        Frequently Asked Questions (FAQ) - Lintons Hair and Beauty Academy
      </h2>

      <div className="flex items-center justify-center">
        <Accordion
          type="single"
          className="w-full max-w-3xl space-y-4 text-white"
          collapsible
        >
          <AccordionItem
            value="item-1"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                What courses does Lintons Academy School offer?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Lintons Academy offers courses in Beauty Therapy, Diploma in
              Skincare & Make-up Artistry, Certificate in Make-up Artistry,
              Certificate in Skincare, Certificate in Nail Technology,
              Certificate in Massage Therapy, Hair removal, Lash technology,
              microblading and microshading. Our courses are categorized as Long
              Term Courses, Short Term Courses and Masterclass.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                How can I apply for a course at Lintons Academy?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              It is easy to apply to any of our courses online through our
              website by filling out the online application form. If you wish to
              have a physical consultation, you can always visit our campus at
              Kenrail Tower, 3rd Floor, Nairobi - Kenya or in Mombasa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                What are the admission requirements?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Admission requirements are a copy of one’s ID, highest level of
              education certificate and 2 passport photos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                How long do the courses take to complete?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              The duration of each course varies as attached Lintons Academy
              Catalog 2023.pdf Lintons Academy Hair by L’oreal HAIR SCHOOL
              BROCHURE (3).pdf
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                Are the courses accredited?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Yes, all our courses are accredited by TVET and ICM which is an
              International Examining body based in the UK, ensuring that your
              qualifications are recognized both locally and internationally.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                Do you offer part-time or evening classes?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Yes, we offer flexible learning options including part-time,
              evening, and weekend classes to accommodate different schedules.
              This depends on the course.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-7"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                What is the cost of the courses?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Course fees vary depending on the program. Detailed fee structures
              are available on our website. We also offer payment plans to make
              it easier for students to manage their finances.
              <br />
              (Refer on catalog)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-8"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                Are there any scholarships or financial aid options available?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              We do offer scholarships and financial aid for eligible students.
              Please contact our admissions office for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-9"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                What career opportunities are available after completing a
                course?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Graduates from Lintons BeautyAcademy and Lintons Academy Hair by
              L’oreal can pursue careers as professional hairdressers,
              beauticians, makeup artists, nail technicians, or even start their
              own beauty business. We also provide job placements to help you
              get started in your career.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-10"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                Do you provide hands-on training?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Absolutely! Our courses are designed to be highly practical, with
              hands-on training in our state-of-the-art facilities. You will
              work on real clients under the supervision of our experienced
              instructors.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-11"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                Where is Lintons Hair and Beauty Academy located?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              We are located in Westlands, Kenrail Towers ,northern wing 3rd
              floor. (Opposite Sarit center, next to 9 west), easily accessible
              by public transportation. Directions and a map can be found on our
              contact page.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-12"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                How can I contact Lintons Hair and Beauty Academy?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              You can reach us via phone at{' '}
              <a href="tel:+254714870037">0714-870-037</a>, email at
              <a href="mailto:academy@lintonsbeauty.com">
                academy@lintonsbeauty.com
              </a>
              , or by filling out the contact form on our website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-13"
            className="rounded-xl border-b-0 bg-primary"
          >
            <AccordionTrigger className="p-6 font-sans">
              <div className="w-full text-center">
                Do you offer online courses?
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 px-8 pb-8">
              Not at the moment as most of our programs are very technical hence
              require hands on training.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
