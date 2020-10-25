import React, { Component } from "react";
import "../style/components/_banner.scss";

export default class Banner extends Component {
  render() {
    return (
      <div className='mainBanner'>
        <div className='header'>
          <h4>Geco</h4>
          <button>Buy Now</button>
        </div>
        <div className='banner'>
          <div className='innerBanner'>
            <h4>Geco - eSports Gaming WordPress Theme</h4>
            <p>
              Geco is a gaming, news and entertainment content. Its clean,
              modern & powerful, contrast design is perfect for your gaming
              site.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
