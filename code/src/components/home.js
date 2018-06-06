import React from "react"
import Hero from "./hero"
import Projects from "./projects"
import Topics from "./topics"
import About from "./about"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToProjects = React.createRef()
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  scrollDownTo = () => {
    window.scrollTo({
      top: this.scrollToProjects.current.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div>
        <Hero
          callbackScroll={this.scrollDownTo} />
        <div ref={this.scrollToProjects}>
          <Projects />
        </div>
        <Topics />
        <About />
      </div>
    )
  }

}

export default Home
