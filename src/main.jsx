import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProSidebarProvider} from 'react-pro-sidebar';
import AppRouter from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProSidebarProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ProSidebarProvider>
  </React.StrictMode>,
)
