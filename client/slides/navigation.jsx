import React from 'react';

export default class Navigation extends React.Component {
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
    console.log(event.target);
    this.setState({isClicked: true});
    if (event.target.classList.contains('projects')) {
      
      document.querySelector('.projects-slide').classList.add('block');
      
      document.querySelector('.navigation-screen').classList.add('right-nav');
    } else if (event.target.classList.contains('about')) {
      
      document.querySelector('.about-me-slide').classList.add('block');
      
      document.querySelector('.navigation-screen').classList.add('bottom-nav');
    }
  }

  handleHomeClick(event) {
    console.log(event.target);
      if (event.currentTarget.classList.contains('bottom-nav')) {
        
        document.querySelector('.projects-slide').classList.remove('block');
        
        document.querySelector('.about-me-slide').classList.remove('block');
        
        // document.querySelector('.skills-slide').classList.remove('block');
        
        // document.querySelector('.resume-slide').classList.remove('block');
          
        document.querySelector('.navigation-screen').classList.remove('right-nav', 'left-nav', 'bottom-nav', 'top-nav');

      }
  }


  render() {
    return (
      <div className="navigation-screen" onClick={ (event) => {
        if (this.state.isClicked) {
          this.handleHomeClick(event)
        }
      }}>
        <div className="navigation-container" >
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