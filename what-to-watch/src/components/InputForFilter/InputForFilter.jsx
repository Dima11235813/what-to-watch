import React from "react";

class InputForFilter extends React.Component {
  fliterStyle = {
    position: "fixed",
    width: "100%",
    /* height: 100%, */
    height: "4rem",
    backgroundColor: "black",
    color: "white",
    fontSize: "4rem"
  };
  render() {
    return (
      <input
        style={this.fliterStyle}
        type="text"
        onChange={this.props.handleChange}
      />
    );
  }
}

export default InputForFilter;
