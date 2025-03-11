import HairAcademyImages from 'assets/images/Main photo to represent hair.png?w=480;640;1280;1980&format=webp'
import BeautyAcademyImages from 'assets/images/0B9A0032.png?w=480;640;1280;1980&format=webp'
// import AlumniStoriesImages from 'assets/images/LGP-10 (1).jpg?w=480;640;1280;1980&format=webp'
import { join, map } from 'lodash-es'
import { NavLink } from 'react-router'

const widths = [480, 640, 1280, 1980]

export function Programs() {
  return (
    <div
      id="programs"
      className="mb-8 h-full w-full max-w-screen-lg items-center p-8 2xl:max-w-screen-xl"
    >
      <div className="flex w-full items-center justify-center">
        <h2 className="mb-10 mt-6 w-full text-balance text-center text-xl md:mb-16 md:mt-10 md:max-w-2xl md:text-4xl">
          Transform Your Passion for Hair and Beauty into a Rewarding Career
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
        {/* <img src={HairAcademy} className="h-auto w-full object-cover" /> */}
        <NavLink
          className="relative w-full md:w-5/12 lg:w-2/5"
          to={'/beauty-school'}
        >
          <picture className="h-auto w-full">
            <source
              srcSet={join(
                map(
                  BeautyAcademyImages as string[],
                  (image, index) => `${image} ${widths[index]}w`
                ),
                ', '
              )}
            />
            <img
              src={`${BeautyAcademyImages[0]}`}
              className="aspect-[500/649] h-full w-full object-cover"
            />
            <div className="absolute top-0 h-full w-full bg-black/60">
              <h3 className="mt-[97%] text-center font-sans text-2xl text-white underline decoration-2 underline-offset-[10px]">
                Beauty School
              </h3>
            </div>
          </picture>
        </NavLink>
        <NavLink
          className="relative w-full md:w-5/12 lg:w-2/5"
          to={'/hair-school'}
        >
          <picture className="h-auto w-full">
            <source
              srcSet={join(
                map(
                  HairAcademyImages as string[],
                  (image, index) => `${image} ${widths[index]}w`
                ),
                ', '
              )}
            />
            <img
              src={`${HairAcademyImages[0]}`}
              className="aspect-[500/649] h-full w-full object-cover"
            />
          </picture>
          <div className="absolute top-0 h-full w-full bg-black/60">
            <h3 className="mt-[97%] text-center font-sans text-2xl text-white underline decoration-2 underline-offset-[10px]">
              Hair School
            </h3>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
