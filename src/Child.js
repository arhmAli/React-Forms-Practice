import React, { Component } from 'react'

class Child extends Component {
  constructor(props){
    super(props);
    this.state={color:"red",width:10}
    this.update=this.update.bind(this)
  }
  update(){
    this.props.newWidth(this.state.width)
  }
  render() {
    return (
      <div style={{width:`${this.update}px`,
      height:`${this.props.height}px`,
      backgroundColor:this.state.color
      }} >
      
      </div>
    )
  }
}
export default Child