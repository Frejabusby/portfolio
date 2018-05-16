import React from "react"
import "./footer.css"

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-section">
        <h3>Freja Busby</h3>
        <a href="mailto:frejabusby@gmail.com">Mail me</a>
        <a href="https://www.linkedin.com/in/freja-busby-825a2890/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        <a href="https://github.com/Frejabusby" target="_blank" rel="noopener noreferrer">Github</a>
        {/* <a href="https://www.instagram.com/frejabusby/">Instagram</a> */}
      </div>
    )
  }

}

export default Footer
