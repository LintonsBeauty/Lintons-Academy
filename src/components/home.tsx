import { useState, useEffect } from 'react'
import LogoWhite from 'assets/images/Hair Academy Logo White.png?w=480;640;1280;1980&format=webp'
import Image1 from 'assets/images/backdrop.png?w=480;640;1280;853&format=webp'
//import Image2 from 'assets/images/ACD MASTERCLASS 2.png?w=480;640;1280;1980&format=webp'
import { join, map } from 'lodash-es'
import { FiChevronDown } from 'react-icons/fi'

const images = [Image1, Image2]
const widths = [480, 640, 1280, 1980, 853]

export function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen w-full flex-col items-center justify-center text-primary-foreground"
    >
      <picture className="absolute inset-0 h-full w-full">
        <source
          srcSet={join(
            map(
              images[currentImage] as string[],
              (image, index) => `${image} ${widths[index]}w`
            ),
            ', '
          )}
        />
        <img
          src={images[currentImage][0]}
          className="h-full w-full object-cover object-center transition-opacity duration-1000"
        />
      </picture>
      <div className="absolute flex h-full w-full items-center justify-center bg-black/60 flex-col">
        <picture className="h-auto w-4/5 md:w-3/5 lg:w-1/3">
          <source
            srcSet={join(
              map(
                LogoWhite as string[],
                (image, index) => `${image} ${widths[index]}w`
              ),
              ', '
            )}
          />
          <img src={LogoWhite[0]} className="h-auto w-full object-contain" />
        </picture>
        <a
          href="https://forms.gle/MJreqbGZV4uVXfvMA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-semibold shadow-lg hover:bg-primary-dark transition"
        >
          Apply Now
        </a>
        <FiChevronDown className="absolute bottom-8 h-12 w-12 md:h-16 md:w-16" />
      </div>
    </div>
  )
}
