import React from 'react';
import { AppContext } from '../context';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
  }
  handleNavigation() {
      this.context.setClicked();

      document.querySelector('.navigation-screen').classList.remove( 'top-nav' );

      document.querySelector('.skills-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.skills-slide').classList.remove('block');
        document.querySelector('.skills-slide').classList.remove('slideback');
      }, 1000);
  }

  render() {
    return (
      <div className="skills-slide">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        
        
        <div className="skillsContainer">
          <div className="skills-frontend">
            <h2>Frontend Skills</h2>
            <ul className="skills-list">
              <li className="skills-list-item js-icon" title="JavaScript"></li>
              <li className="skills-list-item react-icon" title="React"></li>
              <li className="skills-list-item wordpress-icon" title="Wordpress"></li>
              <li className="skills-list-item html-icon" title="HTML"></li>
              <li className="skills-list-item css-icon" title="CSS"></li>
              <li className="skills-list-item vue-icon" title="Vue.js"></li>
              <li className="skills-list-item react-native-icon" title="React Native"></li>
              <li className="skills-list-item sass-icon" title="SASS stylesheets"></li>
              <li className="skills-list-item less-icon" title="LESS stylesheets"></li>
              <li className="skills-list-item gulp-icon" title="Gulp"></li>
              <li className="skills-list-item webpack-icon" title="Webpack"></li>
              <li className="skills-list-item jsp-icon" title="Java Serverlet Programming"></li>
              <li className="skills-list-item aem-icon" title="Adobe Experience Manager"></li>
            </ul>
          </div>
          <div className="skills-backend">
            <h2>Backend Skills</h2>
            <ul className="skills-list">
              <li className="skills-list-item c-icon" title="C"></li>
              <li className="skills-list-item java-icon" title="Java"></li>
              <li className="skills-list-item php-icon" title="PHP"></li>
              <li className="skills-list-item node-icon" title="Node.js"></li>
              <li className="skills-list-item mysql-icon" title="MySQL"></li>
              <li className="skills-list-item aem-icon" title="Adobe Experience Manager"></li>
              <li className="skills-list-item python-icon" title="Python"></li>
            </ul>
          </div>
          
        </div>
        <div className="down-arrow-icon" onClick={this.handleNavigation}></div>
      </div>
    );
  }
}

Skills.contextType = AppContext;

export default Skills;