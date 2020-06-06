import React from 'react';
import { AppContext } from '../context';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description1: false,
      description2: false,
      description3: false
    }

    this.classString = "";

    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleNavigation() {
      this.context.setClicked();

      document.querySelector('.navigation-screen').classList.remove( 'bottom-nav' );

      document.querySelector('.projects-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.projects-slide').classList.remove('block');
        document.querySelector('.projects-slide').classList.remove('slideback');
      }, 500);
      
  }

  handleClick(event) {
    const { value } = event.target.parentElement.classList;
    console.log("this is the value ",value);
    // check ex. 1, 2, 3, 4
    const check = value[value.length - 1];
    // sets all tabs to false, then sets the one clicked to true
    this.setState({
      ...this.state,
      ['description' + check]: !this.state['description' + check]
    });

  }

  render() {
    var dek1, dek2, dek3;
    dek1 = dek2 = dek3 = "";
    console.log(this.state);
    if (this.state.description1) {
      dek1 = "height-auto"
    } 
    if (this.state.description2) {
      dek2 = "height-auto"
    } 
    if (this.state.description3) {
      dek3 = "height-auto"
    }

    return (
      <div className="projects-slide">
          
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          
          <div className="projects-container">
            <div className="projects-container-inner">

              <div className="card">
                <div className="card-mediaContainer">
                  <img src="/dist/img/nile.png" className="card-mediaContainer-image" alt="image alt"/>
                </div>

                <div className="card-skillsContainer">
                  <ul className="card-skills-list">
                    <li className="card-skills-list-item js-icon"></li>
                    <li className="card-skills-list-item react-icon"></li>
                    <li className="card-skills-list-item php-icon"></li>
                    <li className="card-skills-list-item mysql-icon"></li>
                  </ul>
                </div>

                <div className="card-textContainer">
                  <h3 className="card-title card1">Nile - VR Web Store <span className="icon-dropdown-arrow "  onClick={this.handleClick}></span></h3>

                  <ul className={"card-list " + dek1}>
                    <li className="card-list-item">Great place to order your favorite VR consoles and games!</li>
                    <li className="card-list-item">A full stack LAMP & React shopping cart app that is a single-page React application and a dynamic PHP API, that uses
                                        cookies to keep track of the user with sessions.</li>
                  </ul>
                </div>
                <div className="card-buttonContainer">
                  <a className="card-button-link" target="_blank" href="http://nile.shanemcgrath.live"><button className="card-button">View Live</button></a>
                  <a className="card-button-link" target="_blank" href="https://github.com/smcgrath0/Nile-VR-Web-Store"><button className="card-button">View Code</button></a>
                </div>
              </div>

              <div className="card">
                <div className="card-mediaContainer">
                  <img src="/dist/img/jungle-mix-up.png" className="card-mediaContainer-image" alt="image alt"/>
                </div>

                <div className="card-skillsContainer">
                  <ul className="card-skills-list">
                    <li className="card-skills-list-item js-icon"></li>
                  </ul>
                </div>

                <div className="card-textContainer">
                  <h3 className="card-title card2">Jungle Mix Up<span className="icon-dropdown-arrow "  onClick={this.handleClick}></span></h3>

                  <ul className={"card-list " + dek2 }>
                    <li className="card-list-item">Matching card game built with Javascript, jQuery, HTML, and CSS</li>
                    <li className="card-list-item">Mobile Responsive</li>
                  </ul>
                </div>
                <div className="card-buttonContainer">
                  <a className="card-button-link" target="_blank" href="http://junglemixup.shanemcgrath.live"><button className="card-button">View Live</button></a>
                  <a className="card-button-link" target="_blank" href="https://github.com/smcgrath0/jungle-mix-up"><button className="card-button">View Code</button></a>
                </div>
              </div>

              <div className="card">
                <div className="card-mediaContainer">
                  <img src="/dist/img/adme.png" className="card-mediaContainer-image" alt="image alt"/>
                </div>
                
                <div className="card-skillsContainer">
                  <ul className="card-skills-list">
                    <li className="card-skills-list-item js-icon"></li>
                    <li className="card-skills-list-item react-icon"></li>
                    <li className="card-skills-list-item node-icon"></li>
                    <li className="card-skills-list-item mysql-icon"></li>
                  </ul>
                </div>

                <div className="card-textContainer">
                  <h3 className="card-title card3">AdMe <span className="icon-dropdown-arrow "  onClick={this.handleClick}></span></h3>

                  <ul className={"card-list " + dek3 }> 
                    <li className="card-list-item">An application that connects companies and content creators
                                        with campaigns and prizes</li>
                    <li className="card-list-item">Mobile first development</li>
                  </ul>

                </div>
                <div className="card-buttonContainer">
                  <a className="card-button-link" target="_blank" href="http://adme.shanemcgrath.live"><button className="card-button">View Live</button></a>
                  <a className="card-button-link" target="_blank" href="https://github.com/smcgrath0/AdMe/tree/master"><button className="card-button">View Code</button></a>
                </div>
              </div>
              
            </div>
            <div className="down-arrow-icon" onClick={this.handleDropDown}></div>
          </div>
      </div>
    );
  }
}

Projects.contextType = AppContext;

export default Projects;