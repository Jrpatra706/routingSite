import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    {/* dynamically passing objects */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
