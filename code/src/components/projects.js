import React from "react"
import "./projects.css"

const projectsJson = require("./../projects.json")

class Projects extends React.Component {

  renderProjectData = () => (
    projectsJson.projects.map(project => (
      <div className="project">
        <img src={require(`../images/${project.file}`)} alt="project overview" />
        <h2>{project.name}</h2>
      </div>
    ))
  )

  render() {
    return (
      <div>
        {this.renderProjectData()}
      </div>
    )
  }
}

export default Projects
