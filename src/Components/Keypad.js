import React, { Component } from 'react'

export default class Keypad extends Component {
    render() {
        return (
            <div className="keypad">
                <div className="button">
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name="CLEAR" onClick={e => this.props.onClick(e.target.name)} id="clear">CLEAR</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)} id="one">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)} id="two">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)} id="three">3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)} id="add">+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)} id="four">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)} id="five">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)} id="six">6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)} id="subtract">-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)} id="seven">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)} id="eight">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)} id="nine">9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)} id="multiply">x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)} id="decimal">.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)} id="zero">0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} id="equals">=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)} id="divide">÷</button><br/>
            </div>
          </div>  
        );
    }
}
