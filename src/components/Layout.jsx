import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../fonts/Gilroy.css"
import "../styles/style.scss"
import "../styles/responsive.scss"
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout
