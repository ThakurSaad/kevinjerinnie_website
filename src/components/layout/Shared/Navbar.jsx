import { Link, useLocation } from 'react-router-dom'
import logo from '../../../../public/logo.svg'
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import featuresList from './FeatureList'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Check if we are inside MainLayout (example: homepage "/")
  const isMainLayout = location.pathname === '/' // adjust if needed

  const getLinkClass = (path) => {
    if (location.pathname === path) {
      return 'text-[#1AC5FE]' // active link
    }
    return isMainLayout ? 'text-white' : 'text-black' // default based on layout
  }

  return (
    <div className="relative z-20 responsive-base-width">
      <div className="relative flex items-center justify-between py-4">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-32 sm:w-40" />
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-10 lg:flex font-poppins">
          <Link
            to={'/'}
            className={`hover:text-[#1AC5FE] ${getLinkClass('/')}`}
          >
            Home
          </Link>

          <Dropdown
            menu={{ items: featuresList }}
            placement="bottomCenter"
            className={`hover:text-[#1AC5FE] ${getLinkClass('/features')}`}
          >
            <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
              <Space>
                Features
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Link
            to={'/pricing'}
            className={`hover:text-[#1AC5FE] ${getLinkClass('/pricing')}`}
          >
            Pricing
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="items-center hidden lg:flex gap-7">
          <Link
            to={'/dashboard/sign-up'}
            className={`border border-[#1AC5FE] hover:text-[#1AC5FE] rounded-md py-2 px-7 ${
              isMainLayout ? 'text-white' : 'text-black'
            }`}
          >
            Sign Up
          </Link>
          <Link
            to={'/dashboard/sign-up'}
            className="rounded-md py-2 px-7 bg-[#327CFE] hover:bg-[#327dfed3] text-white"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
