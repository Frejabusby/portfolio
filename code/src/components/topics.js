import React from "react"
import "./topics.css"

class Topics extends React.Component {
  render() {
    return (
      <div className="topics-section">
        <div className="topic-box">
          <h3>Web development</h3>
          <p>Lorem ipsum...</p>
        </div>
        <div className="topic-box">
          <h3>Digital marketing</h3>
          <p>Lorem ipsum...</p>
        </div>
        <div className="topic-box">
          <h3>Illustrations</h3>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    )
  }
}

export default Topics
