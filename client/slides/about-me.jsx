import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropDown = this.handleDropDown.bind(this);
  }
  handleDropDown() {
      
      // this.setState({isClicked: true});
      document.querySelector('.about-me-slide').classList.remove('block');
      
      document.querySelector('.navigation-screen').classList.remove( 'bottom-nav' );

  }

  render() {
    return (
      <div className="about-me-slide">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

        <div className="about-me-container">
          <div class="about-me-media-container">
              <div class="me"></div>
          </div>
          <div className="about-me-text-container">
            <div className="about-me-text">
              <p>&ensp; I first learned to code in high school, being placed in the class by accident.
                        That basic JavaScript class showed me what is possible with programming, and I seemed to excel.
                        Recently, I have graduated from an Accelerated Coding Bootcamp, LearningFuze, to further fuel my passion.
                        And now looking for opportunities to learn and grow as a developer.</p>
            </div>
          </div>
          <div className="down-arrow-icon" onClick={this.handleDropDown}></div>
        </div>
      </div>
    );
  }
}