import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
// import AlumniStoriesImages from 'assets/images/LGP-10 (1).jpg?w=480;640;1280;1980&format=webp'

export function Contacts() {
  return (
    <div
      id="contact-us"
      className="flex min-h-screen w-full flex-col items-center justify-center pb-10 pt-28"
    >
      <div className="my-auto grid grid-cols-1 gap-24 border-b-[1px] border-t-[1px] border-black py-10 md:grid-cols-2">
        <div className="flex max-w-64 flex-col items-center">
          <h2 className="mb-4 text-xl uppercase">Nairobi</h2>
          <div className="mb-2 text-balance text-center">
            Westlands, Kenrail Towers 3rd floor, Northern wing
          </div>
          <a href="tel:+254714870037" className="mb-2">
            +254 714 870 037
          </a>
          <a href="mailto:academy@lintonsbeauty.com" className="underline">
            academy@lintonsbeauty.com
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl uppercase">Mombasa</h2>
          <div className="mb-2 flex grow items-center justify-center">
            SBS Mall
          </div>
          <a href="tel:+254714870037" className="mb-2">
            +254 714 870 037
          </a>
          <a href="mailto:academy@lintonsbeauty.com" className="underline">
            academy@lintonsbeauty.com
          </a>
        </div>
      </div>
      <div className="mb-10 flex gap-8">
        <a
          href="https://www.instagram.com/lintons_hairacademyby_loreal?hl=en"
          target="_blank"
        >
          <FaInstagram className="h-6 w-6 fill-black" />
        </a>
        <a href="https://www.tiktok.com/@lintonshairacadem" target="_blank">
          <FaTiktok className="h-6 w-6 fill-black" />
        </a>
        <FaXTwitter className="h-6 w-6 fill-black" />
        <a
          href="https://www.facebook.com/profile.php?id=61560379441181&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebookF className="h-6 w-6 fill-black" />
        </a>
      </div>
      {/* <div>
        Westlands, Kenrail Towers, 3rd floor, Northern wing/ Mombasa, SBS Mall
      </div> */}
    </div>
  )
}
