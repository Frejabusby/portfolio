import React from "react"
import "./skills.css"

class Skills extends React.Component {
  render() {
    return (
      <div className="skills-section">
        <div className="skill-box tall">
          <p className="big-text">HTML</p>
        </div>
        <div className="skill-box">
          <p className="medium-text">Javascript</p>
        </div>
        <div className="skill-box wide">
          <p className="big-text">CSS</p>
        </div>
        <div className="skill-box wide">
          <p className="small-text">Wordpress</p>
        </div>
        <div className="skill-box tall">
          <p className="small-text">Agile methodology</p>
        </div>
        <div className="skill-box wide">
          <p className="medium-text">React</p>
        </div>
        <div className="skill-box">
          <p className="small-text">Node.js</p>
        </div>
      </div>
    )
  }

}

export default Skills
