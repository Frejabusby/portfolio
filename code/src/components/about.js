import React from "react"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div className="about-section">
        <h2>About me</h2>
        <div className="about-section-img">
          <img src={require("../images/freja-busby.jpg")} alt="black and white pic of me, Freja Busby" />
        </div>
        <div className="about-section-info">
          <h4>Hi!</h4>
          <p>My name is Freja and I love to code, mostly Frontend stuff. 
             I have a bachelor degree in Media Technology.
          </p>
        </div>
      </div>
    )
  }

}

export default About
