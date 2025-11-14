import { Component } from "react";
import "../styles/Task.css";
export default class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="task" key={this.props.key}>
        <p>*</p>
        <p className="task-details">{this.props.details}</p>
        <p className="btn">Delete</p>
        <p className="btn">Edit</p>
      </div>
    );
  }
}
