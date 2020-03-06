import React from "react";
import TaskList from "./Components/TaskList";
import TaskInput from "./Components/TaskInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usertasktext: "",
      tasks: [],
    };
  }

  componentDidMount(){
    const tasklistString = localStorage.getItem("tasklist")

    const savedtasklist = JSON.parse(tasklistString)

    this.setState({
      tasks: savedtasklist
    })
  }

  componentDidUpdate(){
    localStorage.setItem("tasklist", JSON.stringify(this.state.tasks))
  }

  addTask = () => {
    const newTaskItem = this.state.usertasktext
    const updatedTasks = [
      ...this.state.tasks,
      {
        id: Date.now(),
       name: newTaskItem,
       completed: false,
      }
    ]

    this.setState({
      tasks: updatedTasks,
      usertasktext: ""
    })

  }

  saveTaskText = (event) => {
    const userInput = event.target.value

    this.setState({
      usertasktext: userInput
    })
  }

  completeTask = (id) => () => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task;
    });
    
    this.setState({ tasks: updatedTasks });
  }

  editTask = (id) => () => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        const currentTask = prompt("Como deseja editar essa tarefa?", task.name)
        return {
          ...task,
          name: currentTask
        }
      }

      return task;
    });
    
    this.setState({ tasks: updatedTasks });
  }

  deleteTask = (id) => () => {
    const updatedTasks = this.state.tasks.filter(task => task.id != id)
    
    this.setState({ tasks: updatedTasks });
  }

  deleteList = () =>{
    const erasedList = []
    const erasedInput = ""

    this.setState({
      tasks: erasedList,
      usertasktext: erasedInput
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <TaskInput 
          addTask={this.addTask}
          saveTaskText={this.saveTaskText}
          usertasktext={this.state.usertasktext}
        />
        <TaskList
        tasks={this.state.tasks}
        completeTask={this.completeTask}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
        deleteList={this.deleteList}
        />
      </div>
    );
  }
}

export default App;
