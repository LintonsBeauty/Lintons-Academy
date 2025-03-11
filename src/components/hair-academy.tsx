import { join, map } from 'lodash-es'
import { Card, CardHeader, CardTitle } from './ui/card'

import HairdressingDiplomaImages from 'assets/images/Hairdressing Diploma.png?w=480;640;1280;1980&format=webp'
import UpskillingCertificatesImages from 'assets/images/Upskilling.jpg?w=480;640;1280;1980&format=webp'
import AdvancedMasterclassesImages from 'assets/images/Masterclass.jpg?w=480;640;1280;1980&format=webp'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

const courses = [
  {
    title: 'Hairdressing Diploma',
    content: `The course is divided into 6 in depth modules covering all the subjects needed to provide you with a fast-track to hairdressing success.`,
    duration: '6 Months',
    units: [
      'Intro - Social & Digital 101 Instagram and Tik Tok',
      'Fundamentals of Shampooing & Haircare',
      'Fundamentals of Styling',
      'Fundamentals of Chemical Reformation',
      'Fundamentals of Hair Cutting',
      'Fundamentals of  Coloring',
    ],
    images: HairdressingDiplomaImages,
  },
  {
    title: 'Upskilling Certificates',
    content: `For qualified and experienced stylists who want to perfect their technical knowledge and skills we offer short 3 day courses on the following;`,
    duration: '3 Days',
    units: [
      'Foundation coloration',
      'Advanced coloration',
      'Master colorist',
      'Total texture: a complete guide to natural hair',
      'Keys to cutting and styling',
    ],
    images: UpskillingCertificatesImages,
  },
  {
    title: 'Advanced Masterclasses',
    content: `For experienced stylists who want to gain specialist expertise in color and entrepreneurship.`,
    duration: '1 Week',
    units: ['Entrepreneurship', 'Expert colorist'],
    images: AdvancedMasterclassesImages,
  },
]

const widths = [480, 640, 1280, 1980]

export function HairAcademy() {
  return (
    <div
      id="courses"
      className="flex h-full min-h-screen w-full max-w-screen-lg flex-col items-center p-8 pt-40 2xl:max-w-screen-xl"
    >
      {/* <h2 className="mb-16 text-center text-2xl text-primary-foreground">
        Lintons Hair Academy by L’Oréal
      </h2> */}

      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4">
          {map(courses, (course) => (
            <Dialog>
              <DialogTrigger className="rounded-xl">
                <Card className="border-none shadow-none">
                  <CardHeader className="p-2">
                    <picture className="mb-2 w-full rounded-xl bg-black/20">
                      <source
                        srcSet={join(
                          map(
                            course.images as string[],
                            (image, index) => `${image} ${widths[index]}w`
                          ),
                          ', '
                        )}
                      />
                      <img
                        src={`${course.images[0]}`}
                        className="aspect-[350/430] h-full w-full rounded-xl rounded-b-none object-cover brightness-50"
                      />
                      {/* {course.duration && (
								<Badge className="absolute right-0 top-0 m-2 bg-[#44559D] text-sm text-white hover:bg-white">
								  {course.duration}
								</Badge>
							  )} */}
                    </picture>
                    <CardTitle className="text-left align-text-top font-sans text-base font-bold uppercase opacity-50">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="mt-4">
                  <DialogTitle className="mb-1 text-center font-sans uppercase opacity-50">
                    {course.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base">
                  {course.content}
                  <ul className="list-disc p-4">
                    {map(course.units, (unit) => (
                      <li>{unit}</li>
                    ))}
                  </ul>
                </DialogDescription>
                {course.duration && (
                  <div className="text-center text-lg font-bold uppercase opacity-50">
                    Duration: {course.duration}
                  </div>
                )}
                <div className="mt-2 flex w-full items-center justify-center">
                  <Button
                    asChild
                    className="h-auto rounded-b-none rounded-t-xl px-8 py-3 text-lg font-bold uppercase"
                  >
                    <a
                      target="_blank"
                      href="https://cloud.lintonsacademy.com/admissions"
                    >
                      Apply Now
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-8 pt-12">
        <a
          target="_blank"
          href="https://cloud.lintonsacademy.com/admissions"
          className="rounded-t-xl border-[1px] px-8 py-4 text-xl font-semibold uppercase"
        >
          <span className="opacity-50">Apply Now</span>
        </a>
      </div>
    </div>
  )
}

export function HairAcademyRaw() {
  return (
    <div
      id="courses"
      className="h-full min-h-screen w-full max-w-screen-lg items-center p-8 pt-40 2xl:max-w-screen-xl"
    >
      <h2 className="mb-16 text-center text-2xl text-primary-foreground">
        Lintons Hair Academy by L’Oréal
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] justify-center gap-4">
        {map(courses, (course) => (
          <Card>
            <CardHeader className="p-4">
              <div className="aspect-square w-full rounded-md bg-black/20"></div>
              <CardTitle className="h-14 text-center align-text-top text-xl">
                {course.title}
              </CardTitle>
            </CardHeader>
            {/* <CardContent>
            The course is divided into six in-depth modules covering all of the
            subjects needed to provide you with a fast track to hairdressing
            success.
            <br />
            <br />
            No experience needed. Just passion for Hair!
          </CardContent> */}
            {/* <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter> */}
          </Card>
        ))}
        <Card>
          <CardHeader className="p-4">
            <div className="aspect-square w-full rounded-md bg-black/20"></div>
            <CardTitle className="h-14 text-center align-text-top text-xl">
              Hairdressing Diploma
            </CardTitle>
          </CardHeader>
          {/* <CardContent>
            The course is divided into six in-depth modules covering all of the
            subjects needed to provide you with a fast track to hairdressing
            success.
            <br />
            <br />
            No experience needed. Just passion for Hair!
          </CardContent> */}
          {/* <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter> */}
        </Card>
        <Card>
          <CardHeader className="p-4">
            <div className="aspect-square w-full rounded-md bg-black/20"></div>
            <CardTitle className="h-14 text-center align-text-top text-xl">
              Upskilling Certificates
            </CardTitle>
          </CardHeader>
          {/* <CardContent>
            For qualified & experienced hair stylists who want to perfect their
            technical skills in
            <ul>
              <li>Foundation Coloration</li> <li>Advanced Coloration</li>
              <li>Master Colorist</li>
              <li>Total Texture: A complete guide to Natural Hair</li>
              <li>Keys to Cutting & Styling</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter> */}
        </Card>
        <Card>
          <CardHeader className="p-4">
            <div className="aspect-square w-full rounded-md bg-black/20"></div>
            <CardTitle className="h-14 text-center align-text-top text-xl">
              Advanced Masterclasses
            </CardTitle>
          </CardHeader>
          {/* <CardContent>
            For experienced stylists who want to train in specialist expertise
            in Color and Entrepreneurship.
            <br />
            <br />
            Hands on learning with our educators and guest artists to emerge
            with a highly sought technical and business certification.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  )
}
