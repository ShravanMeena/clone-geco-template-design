import React, { Component } from "react";
import "../style/components/_icon.scss";
import I1 from "../assets/elementor.png";
import I2 from "../assets/woocommerce.png";
import I3 from "../assets/bootstrap.png";
import I4 from "../assets/slick.png";
import I5 from "../assets/flat-icon.png";
import I6 from "../assets/fontaersome.png";
import I7 from "../assets/html5.png";
import I8 from "../assets/css3.png";
import I9 from "../assets/jquery.png";
import I10 from "../assets/w3c-validation.png";
import I11 from "../assets/responsive.png";
import I12 from "../assets/code.png";
import I13 from "../assets/google-font.png";
import I14 from "../assets/magnific-popup.png";
import I15 from "../assets/speed.png";
import I16 from "../assets/document.png";

export default class Icons extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, title: "Elementor Page Builder", img: I1 },
        { id: 2, title: "Woocommerce Page Builder", img: I2 },
        { id: 3, title: "Bootstrap V4", img: I3 },
        { id: 4, title: "Slick Slider", img: I4 },
        { id: 5, title: "Flat Icon", img: I5 },
        { id: 6, title: "Fontawesome Icon", img: I6 },
        { id: 7, title: "Html5", img: I7 },
        { id: 8, title: "Css3", img: I8 },
        { id: 9, title: "Jquery", img: I9 },
        { id: 10, title: "W3C Validation", img: I10 },
        { id: 11, title: "Fully Responsive", img: I11 },
        { id: 12, title: "Clean Code", img: I12 },
        { id: 13, title: "Google Font", img: I13 },
        { id: 14, title: "Magnific Popup", img: I14 },
        { id: 15, title: "Speed Optimized", img: I15 },
        { id: 16, title: "Well Documented", img: I6 },
      ],
    };
  }
  render() {
    return (
      <div className='iconsMain'>
        {/* header */}
        <div className='header'>
          <h4>Geco Core Features</h4>
          <p>
            We Provide Impressive Freatures For your Website. You can easily
            manage Your website. You will love it.
          </p>
        </div>

        {/* thememain */}
        <div className='icon'>
          {this.state.data.map((icon, index) => {
            return (
              <div key={index} className='single'>
                <div className='icon'>
                  <img src={icon.img} />
                </div>
                <h4>{icon.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
