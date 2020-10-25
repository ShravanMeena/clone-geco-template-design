import React, { Component } from "react";
import "../style/components/_theme.scss";

export default class Theme extends Component {
  render() {
    return (
      <div className='themeMain'>
        {/* header */}
        <div className='header'>
          <h4>Stunning Home Style</h4>
          <p>
            Choose a homepage to start navigating Geco. Build strong &
            impressive websites using Geco premade templates.
          </p>
        </div>

        {/* thememain */}
        <div className='theme'>
          <div className='left'>1</div>
          <div className='right'>2</div>
        </div>
      </div>
    );
  }
}
