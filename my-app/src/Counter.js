import React, { Component } from 'react';
import './App.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      alert('Zero mai basumna guys');
      this.setState({ count: 0 });
    }
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="main_div">
        <div className="center_div">
          <h1>{this.state.count}</h1>
          <div className="btn_div">
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> - </button>
          </div>
        </div>
      </div>
    );
  }
}
