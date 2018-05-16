import React from "react"
import projectData from "../project-data"
import Button from "./button"
import "./project.css"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: null
    }
  }

  componentDidMount() {
    this.findProject()
    window.scrollTo(0, 0)
  }

  findProject = () => {
    const project = projectData.find((project) => {
      return project.id === this.props.match.params.id
    })
    this.setState({
      project
    })
  }

  renderProjectImages = () => {
    if (this.state.project.picDesktop !== undefined) {
      return (
        <section className="project-image-section">
          <img src={require(`../images/${this.state.project.picDesktop}`)} alt="project overview" />
          <img src={require(`../images/${this.state.project.picMobile}`)} alt="project overview" />
        </section>
      )
    } else {
      return (
        <section className="project-image-section">
          <img src={require(`../images/${this.state.project.file}`)} alt="project overview" />
        </section>
      )
    }
  }

  renderButton = () => {
    if (this.state.project.url !== undefined) {
      return (
        <div className="button-section">
          <a href={`http://frejabusby.se/projects/${this.state.project.url}`} target="_blank" rel="noopener noreferrer">
            <button className="button dark-button">Live application</button>
          </a>
        </div>
      )
    }
  }

  render() {
    if (this.state.project) {
      return (
        <div className="project-section">
          {this.renderProjectImages()}
          <section className="project-info-section">
            <h2>{this.state.project.name}</h2>
            <hr />
            <p className="technigue-text">{`Built in/with: ${this.state.project.techniques}`}</p>
            <p>{this.state.project.description}</p>
            {this.renderButton()}
          </section>
        </div>
      )
    } else {
      return (
        <div>Loading project..</div>
      )
    }
  }
  }

export default Project
