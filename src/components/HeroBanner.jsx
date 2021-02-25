import React from 'react'
import Apple from "../images/ios.svg"
import Android from "../images/android.svg"

const HeroBanner = () => {
  return (
    <>
      <section className="banner-section"  style={{backgroundColor: "#FFF8F9"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-text">
                <h1>A dedicated app for women and non-binaries</h1>
                <p>Find your belonging through empowered communities</p>
                <a href="#"><img src={Apple} alt="Apple Button" /> </a>
                <a href="#"><img src={Android} alt="Android Button" /> </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
