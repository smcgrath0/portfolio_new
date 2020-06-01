import React from 'react';

export default class StartingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        position: 0,
        continued: false
    }

    this.positionOptions = ["Software Developer", "Front-end Developer", "Software Engineer", "Full-Stack Developer"];

    this.choosePosition = this.choosePosition.bind(this);
    this.interval = setInterval(this.choosePosition, 1000);
  }

  choosePosition() {
      if (this.state.continued) {
          clearInterval(this.interval);
          setTimeout(function() {
              console.log( document.querySelector('.startingScreen'))
              document.querySelector('.startingScreen').style.display = 'none';
          }, 500);
      }      
      this.setState( { ...this.state, position: Math.floor(Math.random() * this.positionOptions.length) });
  }

  render() {
    
    return (
      <div className="startingScreen" style={{backgroundColor: 'black', opacity: this.state.continued ? 0 : 1 }}>
        <div className="startingScreen-inner">
            <div className="startingScreen-textContainer">
                <h1>Shane Mcgrath</h1>
                <h2>{ this.positionOptions[this.state.position] }</h2>
            </div>
            <div className="startingScreen-buttonContainer">
                <button onClick={ () => {
                    this.setState({ ...this.state, continued: true });
                }}>Continue to portfolio</button>
            </div>
        </div>
      </div>
    );
  }
}