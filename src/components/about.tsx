import AlumniStoriesImages from 'assets/images/LGP-10 (1).jpg?w=480;640;1280;1980&format=webp'
import CollageImage from 'assets/images/0B9A0026 (1).png?w=480;640;1280;1980&format=webp'
import { join, map } from 'lodash-es'
import { FiEye, FiTarget } from 'react-icons/fi'

const widths = [480, 640, 1280, 1980]

export function About() {
  return (
    <div
      id="about"
      className="mt-28 flex min-h-screen w-full flex-col items-center justify-center pb-10"
    >
      {/* <div className="flex h-full flex-col items-center justify-around md:flex-row"> */}
      {/* <picture className="mt-10 h-60 w-full md:mt-20 md:h-4/5 md:w-[32%]">
          <source
            srcSet={join(
              map(
                AboutImages1 as string[],
                (image, index) => `${image} ${widths[index]}w`
              ),
              ', '
            )}
          />
          <img
            src={AboutImages1[0]}
            className="h-full w-full object-cover object-[23%]"
          />
        </picture>
        <picture className="mt-10 h-60 w-full md:my-0 md:h-4/5 md:w-[32%]">
          <source
            srcSet={join(
              map(
                AboutImages2 as string[],
                (image, index) => `${image} ${widths[index]}w`
              ),
              ', '
            )}
          />
          <img src={AboutImages2[0]} className="h-full w-full object-cover" />
        </picture>
        <picture className="mt-10 h-60 w-full md:mt-20 md:h-4/5 md:w-[32%]">
          <source
            srcSet={join(
              map(
                AboutImages3 as string[],
                (image, index) => `${image} ${widths[index]}w`
              ),
              ', '
            )}
          />
          <img src={AboutImages3[0]} className="h-full w-full object-cover" />
        </picture> */}
      {/* <img
          src={AboutImages1[0]}
          className="mt-10 h-60 w-full object-cover object-[23%] md:mt-20 md:h-4/5 md:w-[32%]"
        />
        <img
          src={AboutImages2[0]}
          className="mt-10 h-60 w-full object-cover md:my-0 md:h-4/5 md:w-[32%]"
        />
        <img
          src={AboutImages3[0]}
          className="mt-10 h-60 w-full object-cover md:mt-20 md:h-4/5 md:w-[32%]"
        /> */}
      {/* </div> */}
      <div className="mt-10 max-w-screen-lg items-center px-8 2xl:max-w-screen-xl">
        {/* <h2 className="mb-5 text-center text-2xl">About Us</h2> */}
        <picture className="h-auto w-full">
          <source
            srcSet={join(
              map(
                AlumniStoriesImages as string[],
                (image, index) => `${image} ${widths[index]}w`
              ),
              ', '
            )}
          />
          <img
            src={AlumniStoriesImages[0]}
            className="mb-10 aspect-[1128/575] h-full w-full object-cover"
          />
        </picture>
        <p className="text-lg">
          At Lintons Academy, we began with a clear vision: to elevate Kenya’s
          beauty industry to global standards. Driven by a passion for
          excellence, we recognized the need to nurture and develop the immense
          talent within our country. Our mission is to transform the lives of
          youth by equipping them with the skills and knowledge to thrive in the
          beauty industry, while promoting authentic Afro beauty.
          <br />
          <br />
          As a leading Beauty and Hair School, Lintons Academy offers more than
          just courses; we provide a gateway to opportunity. With campuses in
          Nairobi and Mombasa, our students are future industry leaders, trained
          by experienced professionals in state-of-the-art facilities. Our
          hands-on approach ensures that every student is prepared for
          real-world success from day one.
          <br />
          <picture className="h-auto w-full">
            <source
              srcSet={join(
                map(
                  CollageImage as string[],
                  (image, index) => `${image} ${widths[index]}w`
                ),
                ', '
              )}
            />
            <img
              src={CollageImage[0]}
              className="my-10 aspect-[1128/575] h-full w-full object-cover"
            />
          </picture>
          {/* <br /> */}
          Our expansion to the vibrant coastal region with our Mombasa Campus
          reflects our commitment to inclusivity and excellence. This campus
          honors coastal culture and Islamic values, particularly in Makeup and
          Bridal Makeup classes, offering tailored education that celebrates
          cultural heritage.
          <br />
          <br />
          We take immense pride in partnering with global beauty leader L'Oréal,
          a brand synonymous with innovation and excellence in hair care.
          Through this collaboration, our Hair School students gain access to
          the highest quality products and industry expertise, ensuring they are
          equipped with the best tools and knowledge for success. Beyond the
          classroom, we connect our students with prestigious spas, salons, and
          cosmetic retailers, providing them with invaluable opportunities to
          launch thriving careers in the beauty industry.
          <br />
          <br />
          Enrolling at Lintons Academy means joining a prestigious community
          that’s making a real difference in the beauty industry. We invite you
          to be part of this journey—where your passion for beauty meets
          professional excellence, and your dreams of a rewarding career become
          reality.
        </p>
      </div>
      <div className="mt-10 flex w-full max-w-screen-lg flex-col items-center gap-8 p-8 text-center md:flex-row md:gap-0 lg:justify-around 2xl:max-w-screen-xl">
        <div className="flex flex-col items-center">
          <h2 className="mb-2 flex shrink-0 items-center gap-1 whitespace-nowrap text-center text-2xl">
            <FiTarget />
            our mission
          </h2>
          <p className="max-w-md text-balance text-lg">
            To elevate the standards and reputation of hair & beauty
            professionals across Africa.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-2 flex shrink-0 items-center gap-1 whitespace-nowrap text-center text-2xl">
            <FiEye />
            our vision
          </h2>
          <p className="max-w-md text-balance text-lg">
            To transform the lives & livelihoods of youth across the world with
            authentic Afro Beauty.
          </p>
        </div>
      </div>
    </div>
  )
}
