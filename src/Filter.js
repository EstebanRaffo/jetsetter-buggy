import React, { Component } from "react";

import "./styles/Filter.css";

class Filter extends Component {
  handleChange = e => {
    const { onChange } = this.props;
    const value = event.target.value;
    onChange(value);
  };

  render() {
    const { searchTerm } = props;
    return (
      <input
        className="Items-searchTerm"
        value={searchTerm}
        onChange={handleChange}
      />
    );
  }
}
