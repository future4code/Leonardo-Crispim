import axios from 'axios'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-leocrispim'

export const setTasks = (tasks) => ({
	type: 'SET_POSTS',
	payload: {
		tasks
	}
})

export const getTasks = () => async (dispatch) => {
	try {
        const response = await axios.get(`${baseURL}`)

        console.log(response.data)
		// dispatch(setPosts(response.data.posts))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir lista de tarefas')
	}
}

export const createTask = (text, day) => async (dispatch) => {
	try {
        await axios.post(`${baseURL}`, 
        { text },
        { day })

		alert('Tarefa criada com sucesso!')
		dispatch(getTasks())
	}
	catch (error) {
		console.error(error)
		alert('Erro ao tentar criar tarefa')
	}
}