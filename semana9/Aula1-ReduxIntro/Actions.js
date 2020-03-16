export const addTaskToList = () => {
    return {
      type: "ADD_TASK_TO_LIST",
    };
  };

  export const deleteTaskFromList = () => {
    return {
      type: "DELETE_TASK_FROM_LIST",
    };
  };
  
  export const toggleTaskCompletion = () => {
    return {
      type: "TOGGLE_TASK_COMPLETION",
      payload: {
        completed: !completed
      }
    };
  };

  export const removeAllCompletedTasks = () => {
    return {
      type: "REMOVE_ALL_COMPLETED_TASKS"
    };
  };
  
  export const toggleAllTasksCompletion = () => {
    return {
      type: "TOGGLE_ALL_TASKS_COMPLETION",
      payload: {
        completed: !completed
      }
    };
  };
  
  export const filterCompletedTasks = () => {
    return {
      type: "FILTER_COMPLETED_TASKS",
      payload: {
        completed: true
      }
    };
  };
  
  export const filterIncompleteTasks = () => {
    return {
      type: "FILTER_INCOMPLETE_TASKS",
      payload: {
        completed: false
      }
    };
  };
  
  export const filterAllTasks = () => {
    return {
      type: "FILTER_ALL_TASKS"
    };
  };
