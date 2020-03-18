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

  //stopped here

  export const removeAllCompletedTasks = () => {
    return {
      type: "REMOVE_ALL_COMPLETED_TASKS"
    };
  };
  
  export const toggleAllTasksCompletion = () => {
    return {
      type: "TOGGLE_ALL_TASKS_COMPLETION",
    };
  };
  
  export const filterCompletedTasks = () => {
    return {
      type: "FILTER_COMPLETED_TASKS",
    };
  };
  
  export const filterIncompleteTasks = () => {
    return {
      type: "FILTER_INCOMPLETE_TASKS",
    };
  };
  
  export const filterAllTasks = () => {
    return {
      type: "FILTER_ALL_TASKS"
    };
  };
