import React from 'react'
import Apple from "../images/ios.svg"
import Android from "../images/android.svg"
import Logo from "../images/logo-gray.png"
import { Link } from "gatsby"
import {FaFacebookSquare, FaInstagram} from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="app-button">
                <h1>Join InPower</h1>
                <a href="#"><img src={Apple} alt="Apple Button" /> </a>
                <a href="#"><img src={Android} alt="Android Button" /> </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer-logo">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="footer-links">
                <h3>Company</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-links mbl-mt-40">
                <h3>Legal</h3>
                <ul>
                  <li><Link to="/">Privacy</Link></li>
                  <li><Link to="/">Terms</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Guidelines</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ml-auto">
              <div className="footer-social">
                <a href="#"><FaFacebookSquare/></a>
                <a href="#"><FaInstagram/></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-section">
                <p>&copy; {year} InPower</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
