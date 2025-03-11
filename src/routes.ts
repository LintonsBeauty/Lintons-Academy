import { index, route, RouteConfig } from '@react-router/dev/routes'
import { inspect } from 'util'

const routes: RouteConfig = [
  index('pages/index.tsx'),
  route('hair-school', 'pages/hair-school.tsx'),
  route('beauty-school', 'pages/beauty-school.tsx'),
  route('contact-us', 'pages/contact-us.tsx'),
  route('about-us', 'pages/about-us.tsx'),
  route('careers', 'pages/careers.tsx'),
]

console.log(inspect(routes, { depth: null }))

export default routes satisfies RouteConfig
