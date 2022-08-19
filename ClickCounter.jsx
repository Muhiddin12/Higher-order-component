import React from "react";
import updatedComponent from "./withCounter";

class ClickCounter extends React.Component {
  render() {
    const  count = this.props.count;
    const  incrementCount  = this.props.incrementCount;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}
export default updatedComponent(ClickCounter);
