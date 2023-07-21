import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import { GlobalCss } from './main-styles'
import HomePage from './views/Home/page'
import KnowMorePage from './views/KnowMore/page'
import Footer from './components/footer'
import Cart from './components/Cart'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/KnowMore/:id',
    element: <KnowMorePage />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes} />
      <Footer />
      <Cart />
    </>
  )
}

export default App
