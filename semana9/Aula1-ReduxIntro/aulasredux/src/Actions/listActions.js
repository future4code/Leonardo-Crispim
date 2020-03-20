import axios from 'axios';  

  export const setTasks = (tasks) =>({
    type: "SET_TASKS",
    payload: {
      tasks: tasks
    }
  })

  export const getTasks = () => async (dispatch) =>{
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/leocrispim/todos")
    dispatch (setTasks(response.data.todos))
  }

  export const addTaskToList = (text) => async (dispatch) =>{
    await axios.post("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/leocrispim/todos",
    {text: text})

    dispatch(getTasks())
  }

  export const deleteTaskFromList = (id) => async (dispatch) =>{
    await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/leocrispim/todos/${id}`)

    dispatch(getTasks())
  }

  export const toggleTaskCompletion = (id) => async (dispatch) => {
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/leocrispim/todos/${id}/toggle`)

    dispatch(getTasks())
  }

  export const removeAllCompletedTasks = () => async (dispatch) => {
    await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/leocrispim/todos/delete-done`)

    dispatch(getTasks())
  };

  export const setFilter = (filter) => {
    return {
      type: "SET_FILTER",
      payload:{
        filter: filter,
      }
    };
  };
