import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BG from "../images/bg.jpg"


export default class Testimonial extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="testimonial-section" style={{backgroundImage: `url(${BG})`}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Slider {...settings}>
                  <div className="testimonial-content">
                    <p className="text-one">With over 30,000 facebook users, we decided to take it to a new
                    level. Introducing the official InPower Application.</p>
                    <p className="text-two">A Universe of support, connection, and resources. <b>Something
                    special, just for women and non-binaries.</b></p>
                    <div className="testimonial-author">
                      Razon Talebian <br/>CEO, Founder
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="text-one">With over 30,000 facebook users, we decided to take it to a new
                    level. Introducing the official InPower Application.</p>
                    <p className="text-two">A Universe of support, connection, and resources. <b>Something
                    special, just for women and non-binaries.</b></p>
                    <div className="testimonial-author">
                      Shahriyar Ahmed <br/>Frontend Developer
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

