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
    title: 'SPA MANAGER',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `✨ We’re Hiring ✨

Responsibilities:
● Support seasonal promotions and sales per Lintons Beauty World’s marketing calendar.
● Set and review sales targets with the GM Sales and Area Manager.
● Ensure therapists create quality content for Facebook and Instagram.
● Motivate the team to meet sales goals through services and product sales.
● Lead marketing efforts within the location.
● Uphold exceptional customer service standards.

Qualifications:
● Diploma/Bachelor's Degree in Beauty Therapy or Cosmetology from recognized institution.
● 3+ years managing a luxury brand or spa.
● Passion for the service delivery and customers.

To Apply:
● Send in your CV and Portfolio to hr@lintonsbeauty.com
● Apply here: https://forms.gle/xwHFXjwcT7w1WeKm8`,
    link: 'https://forms.gle/xwHFXjwcT7w1WeKm8',
  },

  {
    title: 'We are Hiring',
    location: 'Jacaranda Gardens, Kamiti Rd. Nairobi, Kenya',
    type: 'Full-time',
    description: `✨ The following roles are available for application ✨

Roles:
● Reception Assistant
● Barber
● Hairdressers
● Nail Technician
● Makeup Artist

Must have:
● Mature + Experienced.
● Active FB/TikTok/Instagram account

To Apply:
● Contact us on +254745933924
● Apply here: https://forms.gle/xwHFXjwcT7w1WeKm8`,
    link: 'https://forms.gle/xwHFXjwcT7w1WeKm8',
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
              {job.link && (
                <div className="mt-2 flex w-full items-center justify-center">
                  <Button
                    asChild
                    className="font-base h-auto rounded-xl px-8 py-3 text-lg uppercase text-black"
                  >
                    <a target="_blank" href={job.link}>
                      Apply Now
                    </a>
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
