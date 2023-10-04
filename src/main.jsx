import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"


import Home from './routes/Home/Home.jsx'
import Competidor from './routes/Competidor/Competidor.jsx'
import Cadastrar from './routes/Cadastrar/index.jsx'

const router = createBrowserRouter([
  {
    path: "/site-card-vite/",
    element: <Home/>
  },
  {
    path: "/site-card-vite/:id",
    element: <Competidor/>
  },
  {
    path: "/site-card-vite/cadastrar",
    element: <Cadastrar/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
