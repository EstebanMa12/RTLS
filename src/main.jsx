import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProSidebarProvider} from 'react-pro-sidebar';
import SidebarComponent from './components/SidebarComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProSidebarProvider>
        <BrowserRouter>
          <SidebarComponent />
        </BrowserRouter>
      </ProSidebarProvider>
  </React.StrictMode>,
)
