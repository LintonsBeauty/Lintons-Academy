import { cn } from '@/lib/utils'
import HairAcademyImages from 'assets/images/Group 24.png?w=480;640;1280;1980&format=webp'
import Autoplay from 'embla-carousel-autoplay'
import { join, map } from 'lodash-es'
import { forwardRef, useRef } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from './ui/carousel'

const widths = [480, 640, 1280, 1980]

const testimonials = [
  {
    content:
      "I am Isabella Tendai, I joined the lintons academy in 2019, where I did a diploma in skincare and makeup artistry. Isabella a former student. I was very impressed by the step by step training I was given and the detailed training that helped me develop my skill and master a great technique. It’s rare to find a school that goes beyond basic makeup knowledge and dives deeply into skincare, teaching you to understand different skin types.This has been invaluable in my career, as I can now recommend products tailored to clients' needs and provide skincare tips to my makeup clients for healthier skin. I was taken for an internship at one of the stores where I learnt how to interact with clients, cross sell and upsell products , managed to build a rapport with clients and that is how I finally managed to get a spot here at the Lintons Beauty world as an E-commerce beauty advisor.",
    name: 'Isabella',
    date: 'Nairobi Campus',
  },
]

const CarouselPrevious = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <HiOutlineChevronLeft className="h-8 w-8 stroke-black" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})

const CarouselNext = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <HiOutlineChevronRight className="h-8 w-8 stroke-black" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})

export function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <div
      id="testimonials"
      className="relative flex w-full items-center justify-center overflow-hidden p-16"
    >
      <picture className="absolute left-0 h-full w-full">
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
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="flex w-full max-w-screen-lg items-center justify-center 2xl:max-w-screen-xl">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-3/4 items-center"
        >
          <CarouselPrevious variant={'ghost'} className="top-1/3" />
          <CarouselContent className="h-full">
            {map(testimonials, (testimonial, index) => (
              <CarouselItem className="text-center" key={index}>
                <p className="text-lg">{testimonial.content}</p>
                <div className="mt-10 flex w-full flex-col items-end">
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-sm font-light">{testimonial.date}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext variant={'ghost'} className="top-1/3" />
        </Carousel>
      </div>
    </div>
  )
}
