import React, { Component } from "react";
import "../style/components/_upcoming.scss";

export default class Upcoming extends Component {
  render() {
    return (
      <div className='upcomingMain'>
        {/* header */}
        <div className='header'>
          <h4>Stunning All Page</h4>
          <p>
            Choose a homepage to start navigating Geco. Build strong &
            impressive websites using Geco premade templates.
          </p>
        </div>

        {/* thememain */}
        <div className='upcoming'>
          <div className='u u1'>1</div>
          <div className='u u2'>2</div>
          <div className='u u3'>3</div>
          <div className='u u4'>1</div>
          <div className='u u5'>2</div>
          <div className='u u6'>3</div>
          <div className='u u7'>3</div>
          <div className='u u8'>3</div>
        </div>
      </div>
    );
  }
}
