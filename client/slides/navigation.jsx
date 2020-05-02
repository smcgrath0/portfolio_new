import React from 'react';
import { AppContext } from '../context';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }

    this.navLinks = ['about', 'projects', 'resume', 'skills'];
    this.handleClick = this.handleClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleClick(event) {
    if (this.context.isClicked) {
      this.handleHomeClick(event);
      this.context.setClicked();
      return null;
    }
    this.context.setClicked();
    if (event.target.classList.contains('projects')) {
      
      document.querySelector('.projects-slide').classList.add('block');
      this.context.setCurrentSlide('projects');
      
      document.querySelector('.navigation-screen').classList.add('right-nav');
    } else if (event.target.classList.contains('about')) {
     
      document.querySelector('.about-me-slide').classList.add('block');
      this.context.setCurrentSlide('about-me');
      
      document.querySelector('.navigation-screen').classList.add('bottom-nav');
    } else if (event.target.classList.contains('resume')) {
      
      document.querySelector('.resume-slide').classList.add('block');
      this.context.setCurrentSlide('resume');
      
      document.querySelector('.navigation-screen').classList.add('left-nav');
    } else if (event.target.classList.contains('skills')) {
      
      document.querySelector('.skills-slide').classList.add('block');
      this.context.setCurrentSlide('skills');
      
      document.querySelector('.navigation-screen').classList.add('top-nav');
    }
  }

  handleHomeClick(event) {
    
    if (this.context.currentSlide == 'projects') {
      
      document.querySelector('.navigation-screen').classList.remove( 'right-nav' );

      document.querySelector('.projects-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.projects-slide').classList.remove('block');
        document.querySelector('.projects-slide').classList.remove('slideback');
      }, 1000);

    } else if (this.context.currentSlide == 'about-me') {
     
      document.querySelector('.navigation-screen').classList.remove( 'bottom-nav' );

      document.querySelector('.about-me-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.about-me-slide').classList.remove('block');
        document.querySelector('.about-me-slide').classList.remove('slideback');
      }, 1000);
    } else if (this.context.currentSlide == 'resume') {
      
      document.querySelector('.navigation-screen').classList.remove( 'left-nav' );

      document.querySelector('.resume-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.resume-slide').classList.remove('block');
        document.querySelector('.resume-slide').classList.remove('slideback');
      }, 1000);
;
    } else if (this.context.currentSlide == 'skills') {
      document.querySelector('.navigation-screen').classList.remove( 'top-nav' );

      document.querySelector('.skills-slide').classList.add('slideback');
      setTimeout(function () {
        document.querySelector('.skills-slide').classList.remove('block');
        document.querySelector('.skills-slide').classList.remove('slideback');
      }, 1000);

    } else {
      document.querySelector('.projects-slide').classList.remove('block');
        
      document.querySelector('.about-me-slide').classList.remove('block');
      
      document.querySelector('.skills-slide').classList.remove('block');
      
      document.querySelector('.resume-slide').classList.remove('block');
        
      document.querySelector('.navigation-screen').classList.remove('right-nav', 'left-nav', 'bottom-nav', 'top-nav');

    }

    this.context.setCurrentSlide('');     
  }


  render() {
    return (
      <div className="navigation-screen" onClick={ (event) => {
        if (this.context.isClicked) {
          this.handleHomeClick(event)
        }
      }}>
        <div className="navigation-container" onClick={ (event) => {
          if (this.context.isClicked) {
            this.handleHomeClick(event)
          }
        }}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            {this.navLinks.map( (links, index) => {
                return (
                    <div className={"navigation-link title " + links} key={index} onClick={this.handleClick}>
                        <div className="navlink-container">
                            <div className={"box1 " + links}><span className={"navigation-link-text " + links}>{links}</span></div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
}
Navigation.contextType = AppContext;

export default Navigation;