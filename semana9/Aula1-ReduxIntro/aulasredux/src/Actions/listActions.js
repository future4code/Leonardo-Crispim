// export const addTaskToList = (taskText) => {
//     return {
//       type: "ADD_TASK_TO_LIST",
//       payload: {
//         taskText: taskText,
//       }
//     };
//   };

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

  //----------

  // export const deleteTaskFromList = (id) => {
  //   return {
  //     type: "DELETE_TASK_FROM_LIST",
  //     payload:{
  //       id: id,
  //     }
  //   };
  // };

  export const deleteTaskFromList = (id) => async (dispatch) =>{
    await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/leocrispim/todos/${id}`)

    dispatch(getTasks())
  }

  //----------
  
  export const toggleTaskCompletion = (id) => {
    return {
      type: "TOGGLE_TASK_COMPLETION",
      payload: {
        id: id,
      }
    };
  };

  export const removeAllCompletedTasks = () => {
    return {
      type: "REMOVE_ALL_COMPLETED_TASKS",
    };
  };

  export const removeAllIncompleteTasks = () => {
    return {
      type: "REMOVE_ALL_INCOMPLETE_TASKS",
    };
  };
  
  export const completeAllTasks = () => {
    return {
      type: "COMPLETE_ALL_TASKS",
    };
  };

  export const incompleteAllTasks = () => {
    return {
      type: "INCOMPLETE_ALL_TASKS",
    };
  };
  
  export const setFilter = (filter) => {
    return {
      type: "SET_FILTER",
      payload:{
        filter: filter,
      }
    };
  };
