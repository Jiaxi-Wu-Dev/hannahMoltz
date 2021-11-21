import React from "react";
import "./Window.css";

class Window extends React.Component {
  render() {
    return (
      <div className="square" style={this.props.style}>
        {this.props.number}
      </div>
    );
  }
}

export default Window;
