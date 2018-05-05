import React from "react"
import { Link } from "react-router-dom"
import projectData from "../project-data"
import "./projects.css"

class Projects extends React.Component {

  mapProjectData = () => (
    projectData.map(project => (
      <div className="project">
        <Link to={`/projects/${project.id}`}>
          <img src={require(`../images/${project.file}`)} alt="project overview" />
          <div className="project-hover-info">
            {/* <span>+</span> */}
            <h2 className="project-name-hover">{project.name}</h2>
            <button>Read about</button>
          </div>
        </Link>
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
