import React, { Component } from 'react';
import './Main.css';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      color: ''
    }
  }

  increaseState = () => {
    this.setState({
      number: this.state.number + 1
    })
   }

  decreaseState = () => {
    this.state.number > 0 ?
    this.setState({
      number: this.state.number - 1
    }) :
    this.setState({
      number: 0
    })
  }

  defaultState = () => {
    this.setState({
      number: 0,
      color: ''
    })
  }

  changeBackground(){
    return this.state.number % 2 === 0 &&
           this.state.number % 5 === 0 &&
           this.state.number !== 0 ? { backgroundColor: "SaddleBrown" } :
           this.state.number % 2 === 0 &&
           this.state.number !== 0 ? { backgroundColor: "tomato" } :
           this.state.number !== 0 ? { backgroundColor: "SteelBlue" } : { backgroundColor: "SeaGreen" };
  }

  render() {
    return (
      <div id="wrapper">
        <div className="main">
          <div className="circle" style={ this.changeBackground() } onClick={ this.increaseState }>
            <div className="nums">
              <p style={ this.changeBackground() }>{this.state.number}</p>
            </div>
          </div>
        </div>
        <div id="buttonHolder">
          <button type="button" onClick={this.increaseState}>Increase Me Gently!</button>
          <button type="button" onClick={this.defaultState}>Default Me Gently!</button>
          <button type="button" onClick={this.decreaseState}>Decrease Me Gently!</button>
        </div>
      </div>
    );
  }
}
export default Main;
