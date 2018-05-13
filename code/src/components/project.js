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
      return <Button
        url={this.state.project.url}
        text="Live application"
        height="60px"
        width="300px"
        border="2px solid #2c422d" />
    }
  }

  render() {
    if (this.state.project) {
      return (
        <div className="project-section">
          {this.renderProjectImages()}
          <section className="project-info-section">
            <hr />
            <h2>{this.state.project.name}</h2>
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
