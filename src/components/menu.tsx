import { Dialog, DialogOverlay, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import LogoBlackImages from 'assets/images/Beauty Academy Logo Black Cropped.png?w=480;640;1280;1980&format=webp'
import { join, map } from 'lodash-es'
import { FC } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router'

const widths = [480, 640, 1280, 1980]

export const Menu: FC<{ logo?: boolean; className?: string }> = ({
  className,
  logo = true,
}) => {
  return (
    <div
      className={cn(
        'absolute z-20 flex w-full max-w-screen-xl items-center justify-between px-8 py-6 text-primary-foreground md:px-20 md:py-12 2xl:max-w-screen-2xl',
        { 'justify-end': !logo }
      )}
    >
      {(logo || null) && (
        <a href="/">
          <picture className="h-12 md:h-14">
            <source
              srcSet={join(
                map(
                  LogoBlackImages as string[],
                  (image, index) => `${image} ${widths[index]}w`
                ),
                ', '
              )}
            />
            <img
              src={`${LogoBlackImages[0]}`}
              className="h-14 w-full object-cover md:h-14"
            />
          </picture>
        </a>
      )}
      <Dialog>
        <DialogTrigger className="my-3 h-8">
          <FiMenu className={cn('h-8 w-8', className)} />
        </DialogTrigger>
        <DialogOverlay />
        <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-50 flex h-screen w-screen items-center justify-center gap-4 border-r pl-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
          <div className="flex h-full w-full max-w-screen-xl flex-col items-end px-8 md:px-20 2xl:max-w-screen-2xl">
            <div className="flex shrink-0 items-center py-6 md:py-12">
              <DialogPrimitive.Close className="my-3 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <FiX className="h-8 w-8" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>
            <div className="flex h-full flex-col justify-center space-y-10 pb-6 text-right text-xl uppercase md:pb-12">
              <NavLink className="block [&.active]:underline" to={'/'}>
                Home
              </NavLink>
              <NavLink className="block [&.active]:underline" to={'/about-us'}>
                About Us
              </NavLink>
              <NavLink
                className="block [&.active]:underline"
                to={'/contact-us'}
              >
                Contact Us
              </NavLink>
              <NavLink
                className="block [&.active]:underline"
                to={'/beauty-school'}
              >
                Beauty School
              </NavLink>
              <NavLink
                className="block [&.active]:underline"
                to={'/hair-school'}
              >
                Hair School
              </NavLink>
              {/* <NavLink className="block [&.active]:underline" to={'/gallery'}>
                Gallery
              </NavLink> */}
              <NavLink className="block [&.active]:underline" to={'/careers'}>
                Careers
              </NavLink>
              <a
                className="block"
                href="https://cloud.lintonsacademy.com/login#login"
                target="_blank"
                rel="noopener"
              >
                Student Portal
              </a>
            </div>
          </div>
        </DialogPrimitive.Content>
      </Dialog>
    </div>
  )
}
