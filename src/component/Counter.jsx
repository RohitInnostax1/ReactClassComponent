import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevProps)
    {
        console.log(prevProps.number);

        if(prevProps.state!==this.props.number)
        {
            console.log("Updated");
        }
    }
  render() {
    return (
      <div><h3>{this.props.number}</h3></div>
    )
  }
}
