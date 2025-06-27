import { Divider } from 'antd'

import facebook from '../../../assets/social_logos/facebook.svg'
import twitter from '../../../assets/social_logos/twitter.svg'
import instagram from '../../../assets/social_logos/instagram.svg'
import pinterest from '../../../assets/social_logos/pinterest.svg'
import youtube from '../../../assets/social_logos/youtube.svg'
import linkedin from '../../../assets/social_logos/linkedin.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=" text-white font-poppins bg-[#02081B]">
      <Divider className=" " />
      <div className="responsive-base-width flex items-center mb-10 justify-center mx-auto ">
        <img
          src="/logo.svg"
          alt="logo"
          className="pl-10 max-md:!pl-0 flex items-center justify-center "
        />
      </div>
      <div className="responsive-base-width flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">Features</h3>
          <ul className="text-sm flex flex-col space-y-2">
            <Link to={'/text-to-video-ai'}>
              <li>Text to Video AI</li>
            </Link>
            <Link to={'/auto-captions-hashtags'}>
              <li>Auto Captions & Hashtags</li>
            </Link>
            <Link to={'/realistic-voiceover'}>
              <li>Realistic Voiceover</li>
            </Link>
            <Link to={'/auto-video-editing'}>
              <li>Auto Video Editing</li>
            </Link>
            <Link to={'/platform-specific-resizing'}>
              <li>Platform-Specific Resizing</li>
            </Link>
            <Link to={'/analytics-seo-tools'}>
              <li>Analytics & SEO Tools</li>
            </Link>
          </ul>
        </div>

        <section>
          <div className="text-center">
            <div className="text-xl ">Support</div>
            <div className="mt-2 text-xs text-gray-400">support@247web.ai</div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <p className="text-[#1AC5FE] font-medium mb-6">Follow Us On</p>
            <div className="grid md:grid-cols-6 grid-cols-3  gap-4 text-3xl justify-center">
              <img
                src={facebook}
                alt="facebook"
                className="max-w-[40px] w-full"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="max-w-[40px] w-full"
              />
              <img
                src={linkedin}
                alt="LinkedIn"
                className="max-w-[40px] w-full"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="max-w-[40px] w-full"
              />
              <img
                src={pinterest}
                alt="Pinterest"
                className="max-w-[40px] w-full"
              />
              <img
                src={youtube}
                alt="YouTube"
                className="max-w-[40px] w-full"
              />
            </div>
          </div>
        </section>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="text-sm flex flex-col space-y-2">
            <Link to="/pricing">
              <li>Pricing</li>
            </Link>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>

            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/terms-and-conditions">
              <li>Terms & Condition</li>
            </Link>
          </ul>
        </div>
      </div>
      <Divider className="bg-[#ffffff20] mt-10" />
      <div className="text-center text-xs py-4 text-[#cccccc]">
        &copy; {new Date().getFullYear()} 247WEB.AI All rights reserved.
      </div>
    </div>
  )
}

export default Footer
