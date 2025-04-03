import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import Home from './routes/Home'


const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ]
    }
])




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);