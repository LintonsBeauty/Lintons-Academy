// import CarouselImages3 from 'assets/images/shutterstock_2325555133.jpg?w=480;640;1280;1980&format=webp'
import LogoWhite from 'assets/images/Hair Academy Logo White.png?w=480;640;1280;1980&format=webp'
// import IndexBackgroundImage from 'assets/images/salone-parrucchiere_web.png?w=480;640;1280;1980&format=webp'
import IndexBackgroundImage from 'assets/images/Hair School.jpg?w=480;640;1280;1980&format=webp'
import { join, map } from 'lodash-es'
import { FiChevronDown } from 'react-icons/fi'

// const carouselImages = [CarouselImages1, CarouselImages2]

const widths = [480, 640, 1280, 1980]

export function Home() {
  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen w-full flex-col items-center justify-center text-primary-foreground"
    >
      <picture className="h-full w-full">
        <source
          srcSet={join(
            map(
              IndexBackgroundImage as string[],
              (image, index) => `${image} ${widths[index]}w`
            ),
            ', '
          )}
        />
        <img
          src={IndexBackgroundImage[0]}
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute flex h-full w-full items-center justify-center bg-black/60">
        <picture className="h-auto w-4/5 md:w-3/5 lg:w-1/2">
          <source
            srcSet={join(
              map(
                LogoWhite as string[],
                (image, index) => `${image} ${widths[index]}w`
              ),
              ', '
            )}
          />
          <img src={LogoWhite[0]} className="h-auto w-full object-cover" />
        </picture>
        <FiChevronDown className="absolute bottom-8 h-12 w-12 md:h-16 md:w-16" />
      </div>
    </div>
  )
}
