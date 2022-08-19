import React from "react";
import updatedComponent from "./withCounter";

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hovered {count}</h2>;
  }
}
export default updatedComponent(HoverCounter);
