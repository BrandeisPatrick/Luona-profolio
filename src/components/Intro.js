import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, I’m "}
            <span className="intro-name">{"Luona."}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">
            I’m a Ph.D. candidate in Chemistry at Emory University, where I design and study DNA-based molecular machines. My work explores how synthetic motors can be programmed to sense and transport molecules at the nanoscale—pushing the boundaries of bioengineering and diagnostics.
          </div>
          <div className="intro-desc">
            I’ve conducted research across three continents, developed sensors for environmental DNA and viruses, and presented at international conferences. I also write code to track single molecules, and I love blending chemistry, computation, and creativity to solve complex problems.
          </div>
          <a
            href="mailto:gazijarin@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" luona.zhang@emory.edu"}
          </a>
          <div className="intro-contact">
            Office Address: 1515 Dickey Drive, Emerson Hall E470, Atlanta, GA 30322, United States
          </div>
          <div className="intro-contact">
            Phone: +1 (517)-763-1357
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
