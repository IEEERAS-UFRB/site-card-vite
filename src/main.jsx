import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import Home from './routes/Home/Home.jsx'
import Competidor from './routes/Competidor/Competidor.jsx'
import Cadastrar from './routes/Cadastrar/index.jsx'
import Remover from './routes/Remover'
import Editar from './routes/Editar'
import EditCompetidor from './routes/EditCompetidor'

const router = createBrowserRouter([
  {
    path: "/site-card-vite/",
    element: <App />,
    children:[
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
      },
      {
        path: "/site-card-vite/remover",
        element: <Remover />
      },
      {
        path: "/site-card-vite/editar",
        element: <Editar />
      },
      {
        path:"/site-card-vite/editar/:id",
        element: <EditCompetidor />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
