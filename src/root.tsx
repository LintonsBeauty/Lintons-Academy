import { PropsWithChildren, useEffect } from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router'
import ReactGA from 'react-ga4'
import faviconPNG from '/assets/favicon.ico?url'
import { Route } from './+types/root'
import styles from './index.css?url'

export const links: Route.LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'icon', type: 'image/png', href: faviconPNG },
  ]
}

export function Layout({ children }: PropsWithChildren) {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-25Y1HDVXXB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [] function gtag(){' '}
          {dataLayer.push(arguments)}
          gtag('js', new Date()) gtag('config', 'G-25Y1HDVXXB')`,
          }}
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
