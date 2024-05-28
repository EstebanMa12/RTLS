import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProSidebarProvider} from 'react-pro-sidebar';
import AppRouter from './router/index.jsx'
import { ThemeProvider } from './components/theme-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProSidebarProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ProSidebarProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
