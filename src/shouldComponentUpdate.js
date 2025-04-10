import React, { Component } from "react";
class ForceUpdateExample extends Component {
 shouldComponentUpdate() {
 return false; 
 }
 render() {
 return (
 <div>
 <h1>Current Time: {new
Date().toLocaleTimeString()}</h1>
 <button onClick={() => this.forceUpdate()}>Update
Time</button>
 </div>
 );
 }
}
export default ForceUpdateExample;