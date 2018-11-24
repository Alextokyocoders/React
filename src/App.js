import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.TodoItems = [
      { title: "Mua bim bim", isComplete: true },
      { title: "Di da bong", isComplete: true },
      { title: "Di do xang" }
    ];
  }

  render() {
    return (
      <div className="App">
        {this.TodoItems.length > 0 &&
          this.TodoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        {this.TodoItems.length === 0 && "Nothing here"}
      </div>
    );
  }
}

export default App;
