import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routes/Route'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
)
