import React from 'react';
import {AppContext, app } from './context';
import Nav from './slides/navigation';
import AboutMe from './slides/about-me';
import Projects from './slides/projects';
import Skills from './slides/skills';
import Resume from './slides/resume';
import Footer from './components/footer';
import StartingScreen from './components/startingScreen'
import './sass/main.scss';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setClicked = () => {
      let isC = !this.state.isClicked;
      this.setState({isClicked : isC });
    }
    

    this.setCurrentSlide = (slide) => {
      this.setState({currentSlide : slide });
    }

    this.state = {
      isClicked : app.isClicked,
      setClicked: this.setClicked,
      currentSlide : app.currentSlide,
      setCurrentSlide: this.setCurrentSlide
    }

  }

  render() {
    return (
    <AppContext.Provider value={this.state} >
      <div className="app">
        <StartingScreen />
        <AboutMe />
        <Projects />
        <Nav />
        <Skills />
        <Resume />
      </div>
    </AppContext.Provider>
    );
  }
}