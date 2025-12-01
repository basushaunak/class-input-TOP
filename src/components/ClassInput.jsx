import { Component } from "react";
import Task from "./Task.jsx";
import TaskCount from "./TaskCount.jsx";
export default class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  generateKey() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let key = letters.charAt(Math.floor(Math.random() * letters.length)); // first must be a letter

    for (let i = 1; i < 12; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return key;
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      todos: prevState.todos.concat({
        data: prevState.inputVal,
        key: this.generateKey(),
      }),
      inputVal: "",
    }));
  }

  handleDelete = (key) => {
    console.log("Delete: " + key);
    this.setState((prevState)=>({
      todos: prevState.todos.filter((todo)=>todo.key !== key),
    }))
  };
  
  handleEdit = (key) => {
    console.log("Edit: " + key);
  };
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <Task
              key={todo.key}
              taskKey={todo.key}
              id={todo.key}
              details={todo.data}
              handleDelete={() => this.handleDelete(todo.key)}
              handleEdit={() => this.handleEdit(todo.key)}
            />
          ))}
        </ul>
        <TaskCount count={this.state.todos.length} />
      </section>
    );
  }
}
