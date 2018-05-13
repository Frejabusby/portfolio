import React from "react"
import Button from "./button"
import "./about.css"

class About extends React.Component {
  renderAboutText = () => {
    if (this.props.aboutClicked) {
      return (
        <div className="about-section-info">
          <h2>Hi!</h2>
          <p>
            My name is Freja and I love to code, mostly Frontend stuff.
            <br />
             I have a bachelor degree in Media Technology.
            After a few years, working with digital marketing and building homepages in a CMS.
            I wanted to build my own stuff and I wanted to code more,  in a daily basis, full time!
            I had already good knowledge in HTML and CSS and are (kind of) self-learned so
            I thought that learning Javascript would be quite easy…
            But after some months struggling I felt that I needed some kind of
            teaching to become really good in Javascript –
            so I could start working as a Frontend Developer.
            So I joined a 12-week long Boot Camp called Technigo.

          </p>
          <p>
            Technigo was a super intense program with topics like Javascript, React, CSS Grid, Sass, Agile Methodology, Node.js and so on.
            I learned so much in such a short time,
            I don’t think someone will understand how much you can learn in 12 weeks
            if you haven’t joined a Boot Camp on your own.
          </p>
          <p>
            I’m a team player and think it’s important with knowledge sharing, especially in this trade.
            You really learn a lot by explaining your code to someone else. For that reason,
            I joined Technigo and Tjejer kodar at Google digitalakademin as a coding coach, which was so fun and a good experience.
          </p>
          <p>
            My favorite part of coding is the creativity and problem-solving. When I get I problem, I can’t really stop before it’s solved.
          </p>
        </div>
      )
    } else {
      return (
        <div className="about-section-info">
          <h2>Hi, I’m Freja. Nice to meet you.</h2>
          <p>
            I love to code, mostly Frontend stuff with HTML/CSS/Javascript/React.
            On my sparetime I do Yoga, climb and eat vegan food.
          </p>
          <Button
            url="/about"
            text="Read more about me"
            border="2px solid #fff"
            color="#fff" />
        </div>
      )
    }

  }

  render() {
    return (
      <div className="about-section">
        <div className="about-section-img">
          <img src={require("../images/freja-busby.jpg")} alt="black and white pic of me, Freja Busby" />
        </div>
        {this.renderAboutText()}
      </div>
    )
  }

}

export default About
