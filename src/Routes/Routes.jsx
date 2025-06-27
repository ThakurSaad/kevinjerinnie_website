import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/home/Home'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import Website from '../components/layout/Website'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <Website />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
export default router
