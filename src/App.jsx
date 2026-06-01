import React from 'react'
import { Sidebar } from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { WhatsAppFab } from './components/WhatsAppFab'

const Layout = ({ children }) => (
  <div className='min-h-screen w-full'>
    <div className='mx-auto max-w-[1500px] flex flex-col lg:flex-row gap-6 p-4 md:p-6 lg:p-8'>
      <Sidebar />
      <main className='flex-1 min-w-0'>{children}</main>
    </div>
    <WhatsAppFab />
  </div>
)

const router = createBrowserRouter([
  { path: '/', element: <Layout><About /></Layout> },
  { path: '/resume', element: <Layout><Resume /></Layout> },
  { path: '/portfolio', element: <Layout><Portfolio /></Layout> },
  { path: '/contact', element: <Layout><Contact /></Layout> },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
