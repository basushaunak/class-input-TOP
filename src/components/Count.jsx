import { Component } from "react";
export default class Count extends Component{
    constructor(props){
        super(props);
        this.state ={taskCount:props.taskCount};
    }
}