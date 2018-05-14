import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import Home from "./home"
import Projects from "./projects"
import Project from "./project"
import About from "./about"
import Footer from "./footer"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="header-menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About aboutClicked={true} />} />
          <Route exact path="/projects" render={() => <Projects projectsClicked={true} />} />
          <Route path="/projects/:id" component={Project} />
          <Footer />

        </div>
      </HashRouter>
    )
  }

}

export default App
