import React from "react"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"
const productsJson = require("./../projects.json")

class Home extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <div id="projects" className=" row projects-section">
          {productsJson.projects.map((project) => {
            return <Projects
              id={project.id}
              name={project.name}
              image={project.file} />
          })}
        </div>
        <About />
      </div>
    )
  }

}

export default Home
