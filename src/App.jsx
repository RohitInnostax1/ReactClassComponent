import React, { Component } from 'react'
import "./App.css"
import Counter from './component/Counter';
export default class App extends Component {
  constructor()
  {
    super();
    this.state={
      count:0
    }
  }

  increment()
  {if(this.state.count<100){
    this.setState({count:this.state.count+1})
  }}
  decrement()
  {
    if(this.state.count>0){
    this.setState({count:this.state.count-1})
 } }
  componentDidMount()
  {
    console.log("Component Did mount: when page render for the first time")
  }
  componentWillUnmount()
  {
    console.log("Component unmounted");
  }
  render() {
    return (
      <>
      <h1>Class Component</h1>
      <h2>Value:{this.state.count}</h2>
      {/* <Counter number={this.state.count}></Counter> */}
      <button onClick={this.increment.bind(this)}>+</button>
      <button onClick={()=>{this.decrement()}}>-</button>
      </>
    )
  }
}
  
  
  
