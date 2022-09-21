import React, { Component } from 'react'
import Child from './Child';
class Parent extends Component {
    constructor(props){
        super(props);
        this.state={color:"red",width:22,height:20}
        this.colorChange=this.colorChange.bind(this)
        
        this.widthChange=this.widthChange.bind(this)
        // this.onChange=this.onChange.bind(this)
    }
    // onChange(newColor){
    //     this.setState({
    //        color:{...this.state.color,newColor}
    //     })
    // }
  colorChange(newColor){
    this.setState({
      color:newColor
    })

  }
  widthChange(newWidth){
    this.setState({
      width:newWidth
    })

  }
    render() {
    
    return (
     <div >
      <h1>color is {this.state.color} </h1>
      <Child 
      change={this.colorChange} 
      width={this.state.width} 
      height={this.state.height}
      newWidth={this.widthChange}/>
      

     </div>
    )
  }
}
export default Parent;
