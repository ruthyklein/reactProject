import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './components/header/Header.jsx'
import User from './components/user/User.jsx'
import Admin from './components/admin/Admin.jsx'
import './index.css'
import MeetingToShow from './components/meetingToShow/MeetingToShow.jsx'
import ServiceToShow from './components/serviceToShow/ServiceToShow.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    errorElement: <div>error</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error</div>,
    children:[
      {
        path:'services',
        element:<ServiceToShow/>,
        errorElement:<div>error</div>,
      },
      {
        path:'meetings',
        element:<MeetingToShow/>,
        errorElement:<div>error</div>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
