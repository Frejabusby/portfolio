import React from "react"
import "./menu.css"

class Menu extends React.Component {

  render() {
    return (
      <div className="header-menu">
        <nav>
          <a>Home</a>
          <a>Projects</a>
          <a>About</a>
        </nav>
      </div>
    )
  }
}

export default Menu
