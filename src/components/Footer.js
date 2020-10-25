import React, { Component } from "react";
import "../style/components/_footer.scss";
import FooterBottom from "../assets/f.png";

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footerTop'>
          <h4>Feeling in love? Purchase Geco !</h4>
          <p>Impressive design, powerful features, and easy customization</p>
          <button>Purchase Now</button>
        </div>
        <div className='footerImg'>
          <img src={FooterBottom} />
        </div>
      </div>
    );
  }
}
