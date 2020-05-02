import React from 'react';
import { AppContext } from '../context';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
  }
  handleNavigation() {
      this.context.setClicked();

      document.querySelector('.navigation-screen').classList.remove( 'bottom-nav' );

      document.querySelector('.skills-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.skills-slide').classList.remove('block');
        document.querySelector('.skills-slide').classList.remove('slideback');
      }, 500);
      

  }
  render() {
    return (
      <div className="skills-slide">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        
        <div className="down-arrow-icon" onClick={this.handleNavigation}></div>
      </div>
    );
  }
}

Skills.contextType = AppContext;

export default Skills;