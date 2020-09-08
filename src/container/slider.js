import React, { Component } from "react";
import Deck from '../components/TopSliderDeck'
class MyCarousel extends Component {
  render() {
    return (
      <div className="topSlidercontainer">
        <Deck />
      </div>
    );
  }
}

export default MyCarousel;
