import React from 'react';
import { AppContext } from '../context';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropDown = this.handleDropDown.bind(this);
  }
  handleDropDown() {
      this.context.setClicked();

      document.querySelector('.navigation-screen').classList.remove( 'bottom-nav' );

      document.querySelector('.about-me-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.about-me-slide').classList.remove('block');
        document.querySelector('.about-me-slide').classList.remove('slideback');
      }, 1000);
      

  }

  render() {
    return (
      <div className="about-me-slide">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

        <div className="about-me-container">
          <div className="about-me-container-inner">
            <div className="about-me-media-container">
                <div className="me"></div>
            </div>
            <div className="about-me-text-container">
              <div className="about-me-text">
                <p>&ensp; I first learned to code in high school, being placed in the class by accident.
                          That basic JavaScript class showed me what is possible with programming and I began to become addicted to it.
                          I learned as much as I could outside of school about web development through courses on Udemy and with the help of Youtube.
                          To further fuel my passion, I have attended an Accelerated Coding Bootcamp, LearningFuze in Orange County, CA.
                          Luckily I was able to grow my skills and now I am professional Front-end Developer.</p>
              </div>
            </div>
          </div>
          <div className="down-arrow-icon" onClick={this.handleDropDown}></div>
        </div>
      </div>
    );
  }
}
AboutMe.contextType = AppContext;

export default AboutMe;