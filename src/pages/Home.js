import React, { Component } from "react";
import "../style/pages/_home.scss";
import Banner from "../components/Banner";
import Theme from "../components/Theme";
import Upcoming from "../components/Upcoming";
import Icons from "../components/Icons";
import BlockDesign from "../components/BlockDesign";
import Support from "../components/Support";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <Banner />
        <Theme />
        <Upcoming />
        <Icons />
        {/* <BlockDesign /> */}
        {/* <Support /> */}
        <Footer />
      </div>
    );
  }
}
