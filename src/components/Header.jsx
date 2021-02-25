import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from "../images/logo.svg"
import {Link} from "gatsby"

const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/">Blog</Link>
              <Link className="nav-link" to="/" className="nav-btn">Get the app</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
