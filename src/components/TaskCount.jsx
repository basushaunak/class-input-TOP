import { Component } from "react";
import "../styles/TaskCount.css";
export default class TaskCount extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <p className="task-total">Total Tasks: {this.props.count}</p>
            </>
        )
    }
}