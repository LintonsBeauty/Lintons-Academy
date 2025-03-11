import { join, map } from 'lodash-es'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

import CreativeMakeupCourseImages from 'assets/images/Creative makeup.png?w=480;640;1280;1980&format=webp'

import LashTechnologyImages from 'assets/images/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o.jpeg?w=480;640;1280;1980&format=webp'
import PersonalMakeupCourseImages from 'assets/images/Personal makeup.png?w=480;640;1280;1980&format=webp'
import BridalMakeupCourseImages from 'assets/images/Bridal makeup.png?w=480;640;1280;1980&format=webp'
import HairRemovalOperationsImages from 'assets/images/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o.jpeg?w=480;640;1280;1980&format=webp'
import ProstheticsImages from 'assets/images/Prosthetics_cropped.jpg?w=480;640;1280;1980&format=webp'
import MicroshadingImages from 'assets/images/shutterstock_2028358535.jpg?w=480;640;1280;1980&format=webp'

import CertificateInMakeupArtistryImages from 'assets/images/Certificate in Makeup.png?w=480;640;1280;1980&format=webp'
import CertificateInMassageTherapyImages from 'assets/images/Massage Therapy.jpg?w=480;640;1280;1980&format=webp'
import BeautyTherapyOperationsImages from 'assets/images/643851A0-E777-4D32-85BC-ECACD1F0E99A_1_102_o.jpeg?w=480;640;1280;1980&format=webp'
import CertificateInSkincareImages from 'assets/images/463A2423.png?w=480;640;1280;1980&format=webp'
import DiplomaInSkincareImages from 'assets/images/Diploma in Makeup & skincare.png?w=480;640;1280;1980&format=webp'
import CertificateInNailTechnologyImages from 'assets/images/Nail class.jpg?w=480;640;1280;1980&format=webp'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

const masterclassCourses = [
  {
    title: 'Creative Makeup Course & Special Effects Makeup (SFX)',
    duration: '1 Week',
    content:
      'This masterclass is designed for makeup artists looking to advance their skills in creative and special effects makeup. You’ll dive into face and body painting, editorial, theatrical, and runway makeup, mastering techniques that require imagination and precision. The SFX component focuses on creating realistic injuries, aging effects, and character transformations using industry-standard materials like latex and wax. By the end of this intensive course, you’ll be equipped to bring unreal characters to life, making it ideal for those pursuing a career in film, TV, or theater.',
    images: CreativeMakeupCourseImages,
  },
]

const shortTermCourses = [
  {
    title: 'Prosthetics',
    content:
      'This course is tailored for aspiring prosthetic makeup artists who want to learn the art of creating realistic three-dimensional character looks and effects. You’ll explore techniques such as casting, sculpting, and molding, which are essential in creating prosthetic appliances used in film, TV, and theater. The course also covers the application and coloring of prosthetics on the skin, enabling you to transform actors into a wide range of characters, from aged individuals to mythical creatures.',
    duration: '1 Month',
    images: ProstheticsImages,
  },
  {
    title: 'Bridal Makeup Course',
    content:
      'This focused course is perfect for makeup artists who want to specialize in the bridal industry, one of the most lucrative sectors in beauty. It covers everything from client consultation and skincare preparation to creating a variety of bridal looks, including natural, modern, and cultural-specific styles. The course also offers insights into running a successful bridal makeup business, making it ideal for those looking to expand their services or start their own business.',
    duration: '2 Weeks',
    images: BridalMakeupCourseImages,
  },
  {
    title: 'Personal Makeup Course',
    content:
      'Designed for individuals who wish to enhance their personal makeup skills, this course provides practical knowledge in makeup application tailored to your unique features. You’ll learn the essentials of skincare, foundation matching, and the art of applying eye makeup, including liner and lashes. By the end of this course, you’ll have the confidence to create professional-quality makeup looks on yourself for any occasion.',
    duration: '3 Days',
    images: PersonalMakeupCourseImages,
  },
  {
    title: 'Lash Technology',
    content:
      'This comprehensive course covers everything you need to become a certified lash technician. It begins with an understanding of lash growth cycles and client consultation, moving on to advanced lash mapping and application techniques. The course also emphasizes industry standards for hygiene and aftercare, ensuring you can provide top-notch services to your clients. Whether you’re looking to start your own lash business or work in a salon, this course gives you the skills to succeed.',
    duration: '2 Months',
    images: LashTechnologyImages,
  },
  {
    title: 'Micro shading/Micro blading',
    content:
      'This course teaches the precise art of microblading, a semi-permanent makeup technique that creates the illusion of fuller, natural-looking eyebrows. You’ll learn how to map and shape eyebrows, choose the correct pigments, and master the microblading process from start to finish. The course also covers essential topics like skin anatomy, sterilization procedures, and client aftercare, ensuring you deliver professional and safe services.',
    duration: '2 Months',
    images: MicroshadingImages,
  },

  {
    title: 'Hair Removal Operations',
    content:
      'Focused on teaching the various techniques of hair removal, this course equips you with the skills needed to offer professional hair removal services. You’ll learn about different methods such as waxing, threading, and laser treatments, and understand how to choose the best technique for each client. The course also emphasizes client safety and comfort, ensuring you can provide effective and pain-minimized hair removal experiences.',
    duration: '1 Month',
    images: HairRemovalOperationsImages,
  },
]

const longTermCourses = [
  {
    title: 'Beauty Therapy Operations',
    content:
      'This comprehensive course covers all aspects of beauty therapy, from skincare and facial treatments to makeup artistry, nail care, and body treatments like massage. You’ll gain a deep understanding of anatomy and physiology, which is crucial for performing treatments safely and effectively. The course also includes training in salon and spa operations, preparing you to manage or start your own beauty business. With a 2-month internship included, you’ll get hands-on experience in a real-world setting, making you job-ready upon graduation.',
    duration: '6 Months',
    internshipDuration: '2 Months',
    images: BeautyTherapyOperationsImages,
  },
  {
    title: 'Diploma in Skincare and Makeup Artistry',
    content:
      'This diploma program offers a deep dive into skincare and makeup artistry, providing you with both theoretical knowledge and practical skills. You’ll learn how to assess skin types, design personalized skincare routines, and create stunning makeup looks for all occasions. The course also includes vocational training in retail management, preparing you for a career as a skincare consultant, makeup artist, spa therapist, or beauty sales advisor. The 2-month internship ensures you gain valuable industry experience, enhancing your employability.',
    duration: '3 Months',
    internshipDuration: '2 Months',
    images: DiplomaInSkincareImages,
  },
  {
    title: 'Certificate in Makeup Artistry',
    content:
      'This course is ideal for those who wish to enter the beauty industry as a makeup artist. It covers both fundamental and advanced makeup techniques, including hygiene practices, color theory, and face preparation. The advanced modules delve into creative makeup styles for various occasions, such as bridal, evening, and editorial looks. Whether you’re aiming to work in salons, photographic studios, or as a freelance artist, this course provides the expertise needed to succeed.',
    duration: '3 Months',
    images: CertificateInMakeupArtistryImages,
  },
  {
    title: 'Certificate in Skincare',
    content:
      'This certificate course offers a thorough understanding of skincare, from the basics of skin histology and product application to advanced treatments for aging, acne, and environmentally damaged skin. You’ll learn how to perform consultations, design effective skincare routines, and use specialized tools and equipment. Graduates are well-prepared for careers as skin care therapists in spas, salons, or as independent consultants.',
    duration: '3 Months',
    images: CertificateInSkincareImages,
  },
  {
    title: 'Certificate in Nail Technology',
    content:
      'This course covers everything from basic nail care to advanced techniques in nail enhancement. You’ll learn how to perform manicures and pedicures, apply gel and acrylic nails, and create intricate nail art designs. The course also includes training in hand and arm massage, making you a well-rounded nail technician ready to work in salons or start your own nail business.',
    images: CertificateInNailTechnologyImages,
  },
  {
    title: 'Certificate in Massage Therapy',
    content:
      'Focused on various massage techniques, this course teaches you how to provide therapeutic massages that promote relaxation and well-being. You’ll learn Swedish massage, deep tissue techniques, aromatherapy, and more. The course also covers anatomy and physiology, ensuring you understand the physical benefits of each massage type. Graduates can pursue careers in spas, wellness centers, or as freelance massage therapists.',
    duration: '2 Months',
    images: CertificateInMassageTherapyImages,
  },
]

const widths = [480, 640, 1280, 1980]

export function BeautyAcademy() {
  return (
    <div
      id="courses"
      className="h-full min-h-screen w-full max-w-screen-lg items-center p-8 pt-40 2xl:max-w-screen-xl"
    >
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <h2 className="mb-8 flex w-full items-center justify-center text-center text-2xl uppercase">
          <span className="h-[3px] w-full bg-black"></span>
          <span className="shrink-0 px-16">Long Term Courses</span>
          <span className="h-[3px] w-full bg-black"></span>
        </h2>
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4">
          {map(longTermCourses, (course) => (
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
                    <CardTitle className="text-left align-text-top font-sans text-base font-bold opacity-50">
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
                </DialogDescription>
                {course.duration && (
                  <div className="text-center text-lg font-bold uppercase opacity-50">
                    Duration: {course.duration}{' '}
                    {course.internshipDuration &&
                      `+ ${course.internshipDuration} Internship`}
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
        <h2 className="mb-8 mt-16 flex w-full items-center justify-center text-center text-2xl uppercase">
          <span className="h-[3px] w-full bg-black"></span>
          <span className="shrink-0 px-16">Short Term Courses</span>
          <span className="h-[3px] w-full bg-black"></span>
        </h2>
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4">
          {map(shortTermCourses, (course) => (
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
                    <CardTitle className="text-left align-text-top font-sans text-base font-bold opacity-50">
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
        <h2 className="mb-8 mt-16 flex w-full items-center justify-center text-center text-2xl uppercase">
          <span className="h-[3px] w-full bg-black"></span>
          <span className="shrink-0 px-16">Masterclass Courses</span>
          <span className="h-[3px] w-full bg-black"></span>
        </h2>
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,_19rem))] items-start justify-center gap-4">
          {map(masterclassCourses, (course) => (
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
                    <CardTitle className="text-left align-text-top font-sans text-base font-bold opacity-50">
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

export function BeautyAcademyRaw() {
  return (
    <div
      id="courses"
      className="h-full min-h-screen w-full max-w-screen-lg items-center p-8 pt-40 md:px-0 2xl:max-w-screen-xl"
    >
      <h2 className="mb-16 text-center text-4xl text-primary-foreground">
        Lintons Beauty Academy
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,_20rem))] justify-center gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Beauty Therapy Operations
            </CardTitle>
          </CardHeader>
          <CardContent>
            Develop a combination of cosmetic techniques, skincare practices,
            and holistic therapies aimed at enhancing a person's physical
            appearance, promoting relaxation, and improving overall well-being.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Diploma in Skincare and Makeup Artistry
            </CardTitle>
          </CardHeader>
          <CardContent>
            Develop practical skills and theoretical knowledge in skincare and
            makeup art plus vocational skills in Retail Management.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Certificate in Makeup Artistry
            </CardTitle>
          </CardHeader>
          <CardContent>
            Develop a wide range of practical skill sthat will develop your
            knowledge of makeup artistry, while the Advanced Certificate course
            gives a deeper understanding of advanced makeup concepts and the
            latest trends
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Certificate in Skincare
            </CardTitle>
          </CardHeader>
          <CardContent>
            Develop a deeper understanding of advanced skincare concepts,
            enabling students to gain the expertise to be able to efficiently
            and effectively work as skin care therapists and perform treatments.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Certificate in Nail Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            The certificate course covers basic and advanced techniques in nail
            technology. It will prepare you to offer services in manicure and
            pedicures, acrylic & gel nails, nail art and hand and arm surface
            manipulation amongst many more.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Certificate in Massage Therapy
            </CardTitle>
          </CardHeader>
          <CardContent>
            Professional Massage Training Courses includes various types of
            massage to stimulate various areas of the body.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Lash Technology</CardTitle>
          </CardHeader>
          <CardContent>
            This course introduces the tools required, procedures and industry
            standards for hygiene in the work environment. You will also learn
            to select the best lashes suitable for the different natural lash
            lengths and discover how to choose the best shields to give the curl
            effect that is sure to satisfy your clients.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Micro shading/Micro blading
            </CardTitle>
          </CardHeader>
          <CardContent>
            Develop mastery in eye brow mapping, color theory, skin anatomy,
            sterilization procedures, and client consultation, ensuring safety,
            professionalism, and client satisfaction throughout the microblading
            process.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Prosthetics</CardTitle>
          </CardHeader>
          <CardContent>
            Learn realistic prosthetics make-up creation and application from
            start to finish. Students will have the opportunity to learn using
            the techniques and materials that are industry standards for film
            and TV.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Hair Removal Operations
            </CardTitle>
          </CardHeader>
          <CardContent>
            Develop a range of techniques designed to provide individuals with
            smooth and hair-free skin.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Creative Makeup Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            Are you already an MUA and you want to brush upon your skills and
            learn more advanced techniques? This 1 week course will teach you
            all about face & body painting, editorial, theatrical and runway
            makeup, that requires your imagination & creativity.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Special Effects Makeup (SFX)
            </CardTitle>
          </CardHeader>
          <CardContent>
            Are you already an MUA and you need to master the art of creating
            realistic burns, ageing, and open wounds for fun or film and TV?
            This 1 week course will teach you all about face & body painting,
            editorial, theatrical and runway makeup, that requires your
            imagination & creativity.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Bridal Makeup Course</CardTitle>
          </CardHeader>
          <CardContent>
            This 2-week course will focus on the lucrative world of wedding
            make-up and what is required to successfully run a bridal make- up
            business. This course is not suitable for beginners. You should have
            foundational makeup training or is a practicing makeup artist to
            take up this course.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Personal Makeup Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            Learn how to create a nice make up application on yourself with this
            3-day course. Discover the tools you need to enhance all types of
            features and recreate perfect make-up throughout the day.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/hair-by-loreal-courses">Apply Now</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
