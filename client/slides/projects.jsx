import React from 'react';
import { AppContext } from '../context';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
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

  render() {
    return (
      <div className="projects-slide">
          
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          
          <div className="projects-container">
            <div className="projects-container-inner">

              <div className="card">
                <div className="card-mediaContainer">
                  <img src="/dist/img/lil-uzi.jpg" className="card-mediaContainer-image" alt="image alt"/>
                </div>

                <div className="card-skillsContainer">
                  <ul className="card-skills-list">
                    <li className="card-skills-list-item js-icon"></li>
                  </ul>
                </div>

                <div className="card-textContainer">
                  <h3 className="card-title">Nile - VR Web Store</h3>
                  <ul className="card-list">
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
                  <img src="/dist/img/lil-uzi.jpg" className="card-mediaContainer-image" alt="image alt"/>
                </div>

                <div className="card-skillsContainer">
                  <ul className="card-skills-list">
                    <li className="card-skills-list-item js-icon"></li>
                  </ul>
                </div>

                <div className="card-textContainer">
                  <h3 className="card-title">Jungle Mix Up</h3>
                  <ul className="card-list">
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
                  <img src="/dist/img/lil-uzi.jpg" className="card-mediaContainer-image" alt="image alt"/>
                </div>
                
                <div className="card-skillsContainer">
                  <ul className="card-skills-list">
                    <li className="card-skills-list-item js-icon"></li>
                  </ul>
                </div>

                <div className="card-textContainer">
                  <h3 className="card-title">AdMe</h3>
                  <ul className="card-list">
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