import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import './styles/index.css'
import { ProSidebarProvider} from 'react-pro-sidebar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <AppRouter />
    </ProSidebarProvider>
  </React.StrictMode>,
)
