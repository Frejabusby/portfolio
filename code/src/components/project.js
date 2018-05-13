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

  render() {
    if (this.state.project) {
      return (
        <div className="project-section">
          <section className="project-image-section">
            <img src={require(`../images/${this.state.project.file}`)} alt="project overview" />
          </section>
          <section className="project-info-section">
            <hr />
            <h2>{this.state.project.name}</h2>
            <p>{this.state.project.description}</p>
            <Button url={this.state.project.url} text="Live application" height="60px" width="300px" />
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
