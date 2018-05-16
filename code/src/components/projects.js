import React from "react"
import { Link } from "react-router-dom"
import projectData from "../project-data"
import Button from "./button"
import "./projects.css"

class Projects extends React.Component {
  componentDidMount() {
    this.scrollToTop()
  }

  scrollToTop = () => {
    if (this.props.projectsClicked) {
      window.scrollTo(0, 0)
    }
  }

  mapProjectData = () => (
    projectData.map(project => (
      <div className="project" key={project.id}>

          <img src={require(`../images/${project.file}`)} alt="project overview" />
        <div className="project-hover-info">
          <h2 className="project-name-hover">{project.name}</h2>
          <Button
            url={`/projects/${project.id}`}
            text="Read more"
            className="dark-button"
            height="40px"
            width="150px"
            margin="5px 0px" />
        </div>
      </div>
    ))
  )

  projectButton = () => {
    if (!this.props.projectsClicked) {
      return <Button
        url="/projects"
        text="Show all projects"
        className="dark-button"
        margin="40px 0px" />
    }
  }

  renderProjects = () => {
    if (this.props.projectsClicked) {
      return this.mapProjectData()
    } else {
      return this.mapProjectData().slice(1)
    }
  }

  render() {
    return (
      <div className="projects-section">
        <h2 className="my-projects-title">My projects</h2>
        {this.renderProjects()}
        {this.projectButton()}
      </div>
    )
  }
}

export default Projects
