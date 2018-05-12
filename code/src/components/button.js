import React from "react"
import { Link } from "react-router-dom"
import "./button.css"

class Button extends React.Component {

  render() {
    return (
      <div className="button-section">
        <Link to={this.props.url}>
          <button>
            {this.props.text}
          </button>
        </Link>
      </div>
    )
  }
}
export default Button
