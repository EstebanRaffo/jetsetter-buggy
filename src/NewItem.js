import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";

import "./styles/NewItem.css";

class NewItem extends Component {
  state = {
    value: ""
  };

  shouldComponentUpdate(newProps, newState) {
    return this.state.value !== newState.value;
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();
    onSubmit({ value, packed: false, id: uniqueId() });
    this.setState({ value: "" });
  };

  render() {

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;