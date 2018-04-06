import React from "react"
import Menu from "./menu"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Menu />
        <Hero />
        <Projects />
        <About />
      </div>
    )
  }

}

export default App
