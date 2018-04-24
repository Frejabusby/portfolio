import React from "react"
import "./projects.css"

class Projects extends React.Component {

  render() {
    return (
        <div className="project">
        <img src={require(`../images/${this.props.image}`)} />
        <h2>{this.props.name}</h2>
        </div>
    )
  }
}

export default Projects
