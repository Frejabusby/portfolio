import React from "react"
import "./topics.css"

class Topics extends React.Component {
  render() {
    return (
      <div className="topics-section">
        <div className="topic-box">
          <h3>Web development</h3>
          <p>
            I like to create cool things with HTML, CSS, Javascript and React.
            It can be anything from a complete homepage to small features,
            and everything in between.
          </p>
        </div>
        <div className="topic-box">
          <h3>Digital marketing</h3>
          <p>
            I have worked with Google Adwords, Google Analytics and Social Medias
            and thinks that marketing, in many aspects, are exciting.
            It’s super interesting to think from the user perspective.
            How will the user interact and use this content/product/thing.
          </p>
        </div>
        <div className="topic-box">
          <h3>Illustrations</h3>
          <p>
            As a hobby I like to illustrate in Photoshop.
            It can be cards for birthdays, illustrations of animals or other objects.
          </p>
        </div>
      </div>
    )
  }
}

export default Topics
