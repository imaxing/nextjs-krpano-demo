import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Home from '@/views/home'
import Spots from '@/views/spots'
import Example from '@/views/example'
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/example', element: <Example /> },
  { path: '/spots', element: <Spots /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
)
