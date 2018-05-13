import React from "react"
import "./hero.css"

class Hero extends React.Component {

  onClickScroll = event => {
    event.preventDefault()
    this.props.callbackScroll()
  }

  render() {
    return (
      <div className="hero-section">
        <h1>Freja Busby</h1>
        <h2>Frontend Developer</h2>
        <a><button onClick={this.onClickScroll} className="scroll-down-button">v</button></a>
      </div>
    )
  }

}

export default Hero
