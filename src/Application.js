import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";
import NewItem from "./NewItem";
import Items from "./Items";

import "./styles/Application.css";

const defaultState = [
  { value: "Pantalon", id: uniqueId(), packed: false },
  { value: "Chaqueta", id: uniqueId(), packed: false },
  { value: "Cargador de telefono", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Pastillas", id: uniqueId(), packed: true },
  { value: "Ropa interior", id: uniqueId(), packed: false },
  { value: "Sombrero", id: uniqueId(), packed: false },
  { value: "Cinturon", id: uniqueId(), packed: false },
  { value: "Pasaporte", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId() }
];

class Application extends Component {
  state = {
    items: []
  };

  addItem = item => {
    this.setState({ items: [item, ...this.state.items] });
  };

  removeItem = item => {
    this.setState({
      items: this.state.items.filter(other => other.id !== item.id)
    });
  };

  markAsPacked = item => {
    const otherItems = this.state.items.filter(others => other.id !== item.id);
    const updatedItem = { ...item, packed: !item.packed };
    this.setState(items: [updatedItem, ...otherItems]);
  };

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => ({ ...item, packed: false }));
    this.setState(items);
  };

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <Items
          title="Items no empacados"
          items={unpackedItems}
          onCheckOff={markAsPacked}
          onRemove={removeItem}
        />
        <Items
          title="Items empacados"
          items={packedItems}
          onCheckOff={markAsPacked}
          onRemove={removeItem}
        />
        <button className="button full-width" onClick={markAllAsUnpacked}>
          Marcar todos como desempacados
        </button>
      </div>
    );
  }
}


