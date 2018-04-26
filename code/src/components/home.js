import React from "react"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"

// const productsJson = require("./../projects.json")

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.scrollTo = React.createRef()
  }

  scrollDownTo = () => {
    window.scrollTo({
      top: this.scrollTo.current.getBoundingClientRect().y,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div>
        <Hero
          callbackScroll={this.scrollDownTo} />
        <div id="projects" className="row projects-section" ref={this.scrollTo}>
          <Projects />
          {/* {productsJson.projects.map((project) => {
            return <Projects
              key={project.id}
              name={project.name}
              image={project.file}
              description={project.description}
              callbackProjects={this.projectsData} />
          })} */}
        </div>
        <About />
      </div>
    )
  }

}

export default Home
