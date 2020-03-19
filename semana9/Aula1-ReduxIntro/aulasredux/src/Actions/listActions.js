export const addTaskToList = (taskText) => {
    return {
      type: "ADD_TASK_TO_LIST",
      payload: {
        taskText: taskText,
      }
    };
  };

  export const deleteTaskFromList = (id) => {
    return {
      type: "DELETE_TASK_FROM_LIST",
      payload:{
        id: id,
      }
    };
  };
  
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
