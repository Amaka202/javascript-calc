import React, { Component } from 'react'
import Keypad from './Components/Keypad';
import Output from './Components/Output';
import "./App.css"

class App extends Component {
  constructor(){
      super();

      this.state = {
          output: ""
      }
  }

  handleClick = (button) => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "CLEAR"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
            output: this.state.output + button
          })
      }
  };


  calculate = () => {
      try {
          this.setState({

            output: (eval(this.state.output) || "" )
          })
      } catch (e) {
          this.setState({
            output: "Synthax Error"
          })

      }
  };

  reset = () => {
      this.setState({
        output: ""
      })
  };

  backspace = () => {
      this.setState({
        output: this.state.output.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator">
                  <div className="title">
                      <h1>Calculator</h1>
                  </div>
                  <Output result={this.state.output}/>
                  <Keypad onClick={this.handleClick}/>
              </div>
          </div>
      );
  }
}

export default App;
