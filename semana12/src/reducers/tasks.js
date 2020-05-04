const initialState = {
    taskList = [],
}

const posts = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                taskList: action.payload.tasks
            }
        default:
            return state;
    }
}

export default posts;