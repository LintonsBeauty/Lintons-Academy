import { map } from 'lodash-es'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import { FiSearch } from 'react-icons/fi'
import { Input } from './ui/input'
import { useMemo, useRef, useState } from 'react'
import Fuse from 'fuse.js'

const jobs = [
  {
    title: 'Braider - Karim Salon and Spa',
    location: 'Hurlingam Plaza, Nairobi, Kenya',
    type: 'Full-time',
    description: `✨ We’re Hiring Braiders!@ ✨

Join our team of experts and passionate stylists catering to natural hair!

Requirements:
● Skilled in braiding (cornrows, box braids, twists, etc.)
● Reliable and professional
● Passionate about creating stunning styles
● Team-oriented with great customer service

Perks:
● Supportive, creative work environment
● Opportunities to grow your skills

To Apply:
● Send in your CV and Portfolio (images of your work)

📧 Apply now 📧
karimsalonandspa@gmail.com`,
    link: '',
  },
  {
    title: 'Nail Technician - Karim Salon and Spa',
    location: 'Hurlingam Plaza, Nairobi, Kenya',
    type: 'Full-time',
    description: `💅 We’re Hiring Nail Techs! 💅

Be part of our beautiful salon experience!

Requirements:
● Proficient in manicures, pedicures, and nail art
● Detail-oriented and creative
● Reliable, professional, and friendly
● Passionate about delivering exceptional service

Perks:
● Inspiring, supportive work environment
● Room to grow your skills and creativity

To Apply:
● Send in your CV and Portfolio (images of your work)

📧 Apply now 📧
karimsalonandspa@gmail.com`,
    link: '',
  },
  {
    title: 'Salon Manager - Karim Salon and Spa',
    location: 'Hurlingam Plaza, Nairobi, Kenya',
    type: 'Full-time',
    shortDescription: '',
    description: `🌟 We’re Hiring a Salon Manager! 🌟

Lead Karim Salon catering to natural hair and beauty!

Requirements:
● Proven experience in salon management or similar role
● Strong leadership and organizational skills
● Passionate about team building and customer service
● Ability to manage scheduling, inventory, and operations

Perks:
● Be part of an exciting new salon launch
● Collaborative and empowering work environment
● Opportunities for professional growth

To Apply:
● Send in your CV and a recommendation letter

📧 Apply now 📧
karimsalonandspa@gmail.com`,
    link: '',
  },

]
const jobFuse = new Fuse(jobs, {
  keys: ['title', 'location', 'type'],
  threshold: 0.4,
  includeScore: true,
})

export function JobList() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')

  const filteredJobs = useMemo(
    () => (search ? jobFuse.search(search).map((result) => result.item) : jobs),
    [search]
  )

  return (
    <div className="h-full min-h-screen w-full max-w-screen-lg items-center p-8 pt-40 2xl:max-w-screen-xl">
      <div className="relative mb-8">
        <Input
          className="h-14 rounded-xl pl-14 pr-28 md:text-lg"
          placeholder="Job title, keywords or company"
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
        <FiSearch className="absolute left-4 top-4 size-6 text-black" />
        <Button
          variant={'secondary'}
          className="absolute right-4 top-2.5 h-9 bg-black text-white hover:bg-black/80"
          onClick={() => search || inputRef.current?.focus()}
        >
          Search
        </Button>
      </div>
      <div className="grid grid-cols-2 items-start justify-center gap-6">
        {map(filteredJobs, (job) => (
          <Dialog>
            <DialogTrigger className="rounded-xl">
              <Card className="h-64 overflow-hidden rounded-xl border-black p-6 text-left">
                <CardTitle className="mb-2 line-clamp-1 font-sans font-normal leading-tight opacity-70">
                  {job.title}
                </CardTitle>
                <CardContent className="shrink overflow-hidden p-0">
                  <div className="leading-tight">{job.location}</div>
                  <div className="leading-tight">{job.type}</div>
                  <CardDescription className="line-clamp-5 whitespace-pre-wrap pt-4">
                    {job.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:rounded-xl">
              <DialogHeader className="mt-2 space-y-0">
                <DialogTitle className="mb-2 font-sans text-2xl font-normal leading-tight opacity-70">
                  {job.title}
                </DialogTitle>
                <div className="leading-tight">{job.location}</div>
                <div className="leading-tight">{job.type}</div>
              </DialogHeader>
              <DialogDescription className="whitespace-pre-wrap text-base">
                {job.description}
              </DialogDescription>
              {/* {course.duration && (
                  <div className="text-center text-lg font-bold uppercase opacity-50">
                    Duration: {course.duration}{' '}
                    {course.internshipDuration &&
                      `+ ${course.internshipDuration} Internship`}
                  </div>
                )} */}
              {/* <div className="mt-2 flex w-full items-center justify-center">
                <Button
                  asChild
                  className="font-base h-auto rounded-xl px-8 py-3 text-lg uppercase text-black"
                >
                  <a
                    target="_blank"
                    href="https://cloud.lintonsacademy.com/admissions"
                  >
                    Apply Now
                  </a>
                </Button>
              </div> */}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
