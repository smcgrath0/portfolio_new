import React from 'react';
import AppContext from './context';
import Nav from './slides/navigation';
import AboutMe from './slides/about-me';
import Projects from './slides/projects';
import Skills from './slides/skills';
import Resume from './slides/resume';
import Footer from './components/footer';
import './sass/main.scss';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked : false
    }
  }

  setClicked() {
    this.setState({isClicked : !isClicked });
  }

  render() {
    const appContext = {
      isClicked: this.state.isClicked
    };
    return (
    <AppContext.Provider value={appContext} >
      <div className="app">
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