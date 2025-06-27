import { FaUserPlus, FaUser, FaLink } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom'
import { FaUserGear } from 'react-icons/fa6'
import { MdDashboard, MdOutlineSettings } from 'react-icons/md'

import carVerificationIcon from '../../../assets/car-verify-ison.svg'
import { GrPlan, GrTransaction } from 'react-icons/gr'
import { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { TfiCrown } from 'react-icons/tfi'
import { IoVideocamOutline } from 'react-icons/io5'
import { CiLink } from 'react-icons/ci'
import { CgAddR } from 'react-icons/cg'

const Sidebar = () => {
  const location = useLocation()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const settings = [
    {
      name: 'About Us',
      link: '/settings/about-us',
    },
    {
      name: 'Privacy Policy',
      link: '/settings/privacy-policy',
    },

    {
      name: 'Terms & condition',
      link: '/settings/terms-and-condition',
    },

    { name: 'Profile', link: '/settings/profile' },
    { name: 'Log out', link: '/login' },
  ]

  const dashBoard = {
    name: 'Dashboard',
    link: '/',
    icon: <MdDashboard />,
  }

  const menuItems = [
    {
      name: 'User Details',
      link: '/user-details',
      icon: <FaUser />,
    },
    {
      name: 'Transaction History',
      link: '/transaction-history',
      icon: <GrTransaction />,
    },
    {
      name: 'Subscriptions Plan',
      link: '/subscription-plan',
      icon: <TfiCrown />,
    },
    {
      name: 'Video List',
      link: '/video-list',
      icon: <IoVideocamOutline />,
    },
    {
      name: 'Case Study',
      link: '/case-study',
      icon: <CgAddR />,
    },
    {
      name: 'Social Media LInk',
      link: '/social-media-link',
      icon: <FaLink />,
    },
    
  ]
  const isSettingsActive = location.pathname.includes('/settings')

  return (
    <div className="  overflow-y-scroll ">
      <div className="bg-[#17ACDD] py-[18px] pl-16">
        <img src={carVerificationIcon} alt="car-verification-icon" />
      </div>

      <ul className="mt-10">
        {/* Dashboard */}
        <NavLink
          to={dashBoard?.link}
          className={({ isActive }) =>
            `flex items-center py-3  my-1 pl-6 hover:bg-[#51c6ed] cursor-pointer hover:text-white ${
              isActive ? 'bg-[#17ACDD] text-white' : ''
            }`
          }
        >
          <span className="mr-4 text-xl">{dashBoard.icon}</span>
          <span>{dashBoard.name}</span>
        </NavLink>

        {/* Remaining menu items */}
        {menuItems.map((item, index) => (
          <NavLink
            to={item?.link}
            key={`remaining-${index}`}
            className={({ isActive }) =>
              `flex items-center py-3  my-1 pl-6 hover:bg-[#51c6ed] cursor-pointer hover:text-white ${
                isActive ? 'bg-[#17ACDD] text-white' : ''
              }`
            }
          >
            <span className="mr-4 text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

        {/* Settings */}
        <li className="my-1">
          <div
            className={`flex items-center justify-between py-3  pl-6 cursor-pointer ${
              isSettingsActive
                ? '!bg-[#17ACDD] !text-white'
                : 'hover:bg-[#51c6ed] hover:text-white'
            }`}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            <div className="flex items-center">
              <span className="mr-4 text-xl">
                <MdOutlineSettings />
              </span>
              <span>Settings</span>
            </div>
            <span className="mr-4">
              {isSettingsOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </span>
          </div>

          {isSettingsOpen && (
            <div className="ml-4">
              {settings.map((subItem, idx) => (
                <NavLink
                  key={idx}
                  to={subItem.link}
                  className={({ isActive }) =>
                    `flex items-center py-2 px-6 my-1 rounded-xl hover:bg-[#51c6ed] hover:text-white 
                      ${isActive ? 'bg-[#17ACDD] text-white' : 'bg-blue-100'}`
                  }
                >
                  <span className="ml-6">{subItem.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
