import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";

class TodoItem extends Component {
  onItemClick() {
    console.log(this.props.item);
  }

  render() {
    const { item } = this.props;
    return (
      <div
        onClick={() => this.onItemClick()}
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete
        })}
      >
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
