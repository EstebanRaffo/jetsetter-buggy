import React, { Component } from "react";

import "./styles/Filter.css";

class Filter extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;
    onChange(value);
  };

  render() {
    const { searchTerm, handleChange } = this.props;
    return (
      <input
        className="Items-searchTerm"
        defaultValue={searchTerm}
        onChange={handleChange}
      />
    );
  }
}

export default Filter;