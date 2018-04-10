import React from "react"
import Scroll from 'react-scroll'
import "./hero.css"

var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Hero extends React.Component {

  render() {
    return (
      <div className="row hero-section">
        <h1>Freja Busby</h1>
        <h2>Frontend Developer</h2>
        <a  onClick={() => scroll.scrollMore(300)}><button className="scroll-down-button">v</button></a>
      </div>
    )
  }

}

export default Hero
