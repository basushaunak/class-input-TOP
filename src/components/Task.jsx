import { Component } from "react";
import "../styles/Task.css";
export default class Task extends Component {

  render() {
    if (this.props.isEditing) {
      return (
        <div className="task" id={this.props.taskKey}>
          <input
            onChange={(e) => {
              this.props.handleTaskChange(this.props.taskKey, e.target.value);
            }}
            value={this.props.editData}
          ></input>
          <p
            className="btn"
            onClick={() => this.props.handleTaskSave(this.props.taskKey)}
          >
            Save
          </p>
          <p
            className="btn"
            onClick={() => this.props.handleCancel(this.props.taskKey)}
          >
            Cancel
          </p>
        </div>
      );
    }
    return (
      <div className="task" id={this.props.taskKey}>
        <p className="task-data">{this.props.data}</p>
        <p
          className="btn"
          onClick={() => this.props.handleDelete(this.props.taskKey)}
        >
          Delete
        </p>
        <p
          className="btn"
          onClick={() => this.props.handleEdit(this.props.taskKey)}
        >
          Edit
        </p>
      </div>
    );
  }
}
