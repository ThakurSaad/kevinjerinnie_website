import { Outlet } from 'react-router-dom'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import ScrollToTop from '../../scrollToTop/ScrollToTop'

const Website = () => {
  return (
    <div>
      <div>
        <ScrollToTop />
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Website
