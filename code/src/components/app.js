import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./home"
import Projects from "./projects"
import About from "./about"
import Footer from "./footer"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="header-menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />

          <Footer />

        </div>
      </BrowserRouter>
    )
  }

}

export default App
