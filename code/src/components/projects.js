import React from "react"
import "./projects.css"

const projectsJson = require("./../projects.json")

class Projects extends React.Component {

  mapProjectData = () => (
    projectsJson.projects.map(project => (
      <div className="project">
        <img src={require(`../images/${project.file}`)} alt="project overview" />
        <div className="project-hover-info">
          <span>+</span>
          <h2 className="project-name-hover">{project.name}</h2>
        </div>
      </div>
    ))
  )

  renderProjects = () => {
    if (this.props.projectsClicked) {
      return this.mapProjectData()
    } else {
      return this.mapProjectData().slice(1)
    }
  }

  render() {
    return (
      <div className="row projects-section">
        <h2 className="my-projects-title">My Projects</h2>
        {this.renderProjects()}
      </div>
    )
  }
}

export default Projects
