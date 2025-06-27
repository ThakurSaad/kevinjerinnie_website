import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'

import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  </StrictMode>
)
