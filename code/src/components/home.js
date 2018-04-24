import React from "react"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"

const productsJson = require("./../projects.json")

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.scrollTo = React.createRef()
  }

  scrollsDownTo = () => {
    console.log("hej")
    window.scrollTo({
      top: this.scrollTo.current.getBoundingClientRect().y,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div>
        <Hero
          scrollDown={this.scrollDownTo} />
        <div id="projects" className="row projects-section" ref={this.scrollTo}>
          {productsJson.projects.map((project) => {
            return <Projects
              key={project.id}
              name={project.name}
              image={project.file}
              description={project.description} />
          })}
        </div>
        <About />
      </div>
    )
  }

}

export default Home
