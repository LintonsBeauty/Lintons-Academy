import { Contacts } from '@/components/contacts'
import { Menu } from '@/components/menu'
import { FC } from 'react'

const AboutUs: FC<object> = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // Helper function to delay opening a URL until a gtag event is sent.
        // Call it in response to an action that should navigate to a URL.
        function gtagSendEvent(url) {
          var callback = function () {
            if (typeof url === 'string') {
              window.location = url;
            }
          };
          gtag('event', 'ads_conversion_Contact_Us_1', {
            'event_callback': callback,
            'event_timeout': 2000,
            // <event_parameters>
          });
          return false;
        }`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        gtag('event', 'conversion_event_phone_call_lead', {
          // <event_parameters>
        });`,
        }}
      />
      <div className="relative flex min-h-screen flex-col items-center">
        <Menu className="stroke-black" />

        <Contacts />
      </div>
      <div className="flex w-full items-center justify-center pb-10">
        <div className="text-center text-sm md:text-base">
          © Lintons Academy, 2024. All Rights Reserved
        </div>
      </div>
    </>
  )
}

export default AboutUs
