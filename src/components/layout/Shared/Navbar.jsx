import { Link, useLocation } from 'react-router-dom'
import logo from '../../../../public/logo.svg'
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import featuresList from './FeatureList'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getLinkClass = (path) =>
    location.pathname === path ? 'text-[#1AC5FE]' : ''

  return (
    <div className="responsive-base-width relative z-20">
      <div className="flex justify-between items-center py-4 relative">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-32 sm:w-40" />
        </Link>

        <div className="hidden lg:flex gap-10 items-center font-poppins ">
          <Link
            to={'/'}
            className={`hover:text-[#1AC5FE] ${getLinkClass('/')}`}
          >
            Home
          </Link>

          <Dropdown
            menu={{ items: featuresList }}
            placement="bottomCenter"
            className={`hover:text-[#1AC5FE] text-white ${getLinkClass(
              '/features'
            )}`}
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
            className={`hover:text-[#1AC5FE] text-white ${getLinkClass(
              '/pricing'
            )}`}
          >
            Pricing
          </Link>
        </div>

        <div className="hidden lg:flex gap-7 items-center">
          <Link
            to={'/signup'}
            className="border border-[#1AC5FE]   hover:text-[#1AC5FE] text-white rounded-md py-2 px-7"
          >
            Sign Up
          </Link>
          <Link
            to={'/login'}
            className="rounded-md py-2 px-7 bg-[#327CFE] hover:bg-[#327dfed3] text-white"
          >
            Sign In
          </Link>
        </div>

        {/* <div className="flex lg:hidden hover:text-[#1AC5FE]">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800   !z-[999] transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg p-6`}
        >
          <div className="flex flex-col gap-6 mt-10 font-poppins text-lg">
            <Link
              to="/"
              className={`hover:text-[#1AC5FE] ${getLinkClass('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Dropdown
              menu={{ items: featuresList }}
              placement="bottomLeft"
              className="hover:text-[#1AC5FE] "
            >
              <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
                <Space>
                  Features
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link
              to="/contact-us"
              className={`hover:text-[#1AC5FE] ${getLinkClass('/contact-us')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-[#1AC5FE] ${getLinkClass('/pricing')}`}
            >
              Pricing
            </Link>

            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="border border-[#1AC5FE] rounded-md py-2 px-4 text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md py-2 px-4 bg-gradient-to-r from-[#094559] to-[#1AC5FE] text-white text-center"
            >
              Sign In
            </Link>
          </div>
        </div> */}

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 "
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
