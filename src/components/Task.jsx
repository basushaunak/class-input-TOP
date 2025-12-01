import { Component } from "react";
import "../styles/Task.css";
export default class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="task" id={this.props.taskKey}>
        <p>*</p>
        <p className="task-details">{this.props.details}</p>
        <p className="btn" onClick={this.props.handleDelete}>
          Delete
        </p>
        <p className="btn" onClick={this.props.handleEdit}>
          Edit
        </p>
      </div>
    );
  }
}
