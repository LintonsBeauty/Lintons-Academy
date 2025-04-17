import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
// import LogoWhiteImages from 'assets/images/Main Academy Logo White Cropped.png?w=480;640;1280;1980&format=webp'
// import LogoBlackImages from 'assets/images/Main Academy Logo Black Cropped.png?w=480;640;1280;1980&format=webp'

export function Footer() {
  return (
    <div
      id="footer"
      className="flex min-h-60 w-full flex-col items-center justify-center p-8"
    >
      <div className="mb-8 flex gap-8 md:mb-10">
        <a href="https://instagram.com/lintonsacademy_ke" target="_blank">
          <FaInstagram className="h-6 w-6 fill-black" />
        </a>
        <a href="https://tiktok.com/@lintonsacademy" target="_blank">
          <FaTiktok className="h-6 w-6 fill-black" />
        </a>
        <a href="https://x.com/LintonsAcademy" target="_blank">
          <FaXTwitter className="h-6 w-6 fill-black" />
        </a>
        <a href="https://facebook.com/Lintonsacademy" target="_blank">
          <FaFacebookF className="h-6 w-6 fill-black" />
        </a>
      </div>
      <div className="text-center text-sm md:text-base">
        Westlands, Kenrail Towers, 3rd floor, Northern wing/ Mombasa, SBS Mall
      </div>
      <div className="mt-8 text-center text-sm md:mt-12 md:text-base">
        © Lintons Academy, 2025. All Rights Reserved
      </div>
    </div>
  )
}
