import React from "react"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"

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
        <div ref={this.scrollTo}>
          <Projects />
        </div>
        <About />
      </div>
    )
  }

}

export default Home
