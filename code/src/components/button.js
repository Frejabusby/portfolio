import React from "react"
import { Link } from "react-router-dom"
import "./button.css"

class Button extends React.Component {

  render() {
    const btnStyle = {
      height: this.props.height,
      width: this.props.width,
      margin: this.props.margin
    }

    return (
      <div className="button-section">
        <Link to={this.props.url}>
          <button style={btnStyle} className={`button ${this.props.className}`}>
            {this.props.text}
          </button>
        </Link>
      </div>
    )
  }
}
export default Button
