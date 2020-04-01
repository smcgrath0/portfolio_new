import React from 'react';
import Nav from './slides/navigation';
import AboutMe from './slides/about-me';
import Projects from './slides/projects';
import Skills from './slides/skills';
import Resume from './slides/resume';
import Footer from './components/footer';
import './sass/main.scss';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="app">
        <AboutMe />
        <Projects />
        <Nav />
        <Skills />
        <Resume />
      </div>
    );
  }
}