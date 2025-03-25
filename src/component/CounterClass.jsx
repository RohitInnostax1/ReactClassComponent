import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice.js"; // Import actions
import "./counter.css"

class CounterClass extends Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.count}</h1>
        <button onClick={()=>this.props.increment()}>+</button>
        <button onClick={()=>this.props.decrement()}>-</button>
      </div>
    );
  }
}


const mapState = (state) => ({
  count: state.counter.value,
});


const mapDispatch = {
  increment,
  decrement,
};


export default connect(mapState, mapDispatch)(CounterClass);
