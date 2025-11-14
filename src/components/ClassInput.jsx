import { Component } from "react";
import Task from "./Task.jsx";
import TaskCount from "./TaskCount.jsx";
import "../styles/ClassInput.css";
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
      todos:
        prevState.inputVal.trim() === ""
          ? prevState.todos
          : prevState.todos.concat({
              data: prevState.inputVal,
              key: this.generateKey(),
              isEditing: false,
              editData: prevState.inputVal,
            }),
      inputVal: "",
    }));
  }

  handleDelete = (key) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.key !== key),
    }));
  };

  handleEdit = (key) => {
    // console.log("Edit: " + key);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.key === key ? { ...todo, isEditing: true } : todo
      ),
    }));
  };

  handleTaskChange = (key, value) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.key === key ? { ...todo, editData: value } : todo
      ),
    }));
  };

  handleCancel = (key) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.key === key
          ? { ...todo, isEditing: false, editData: todo.data }
          : todo
      ),
    }));
  };

  handleTaskSave = (key) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.key === key
          ? { ...todo, isEditing: false, data: todo.editData }
          : todo
      ),
    }));
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
            <li key={todo.key}>
              <Task
                taskKey={todo.key}
                id={todo.key}
                data={todo.data}
                isEditing={todo.isEditing}
                editData={todo.editData}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleTaskChange={this.handleTaskChange}
                handleTaskSave={this.handleTaskSave}
                handleCancel={this.handleCancel}
              />
            </li>
          ))}
        </ul>
        <TaskCount count={this.state.todos.length} />
      </section>
    );
  }
}
