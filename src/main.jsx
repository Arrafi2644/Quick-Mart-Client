import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Router from './routes/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Toaster/>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
