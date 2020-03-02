import React from "react";
import styled from 'styled-components'

const TaskInputDiv = styled.div`
`

class TaskInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }



    render(){
        return (
            <TaskInputDiv>
                 <input id="InputFieldID" type="text" onChange={this.props.saveTaskText} value={this.props.usertasktext}></input> 
                 <button id="AddTaskButtonID" onClick={this.props.addTask}>Adicionar</button>
            </TaskInputDiv>
        )}
}

export default TaskInput;