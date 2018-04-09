import React from "react"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"

class Home extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <Projects />
        <About />
      </div>
    )
  }

}

export default Home
