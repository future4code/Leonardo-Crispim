import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leocrispim/clear')
}

export const getProfileToSwipe = () => async (dispatch) =>{
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leocrispim/person`)
	dispatch(storeProfile(response.data.profile))
}

export const storeProfile = profileToSwipe =>({
	type: 'STORE_PROFILE',
	payload: {
		profileToSwipe
	}
})

export const chooseProfile = (id, option) => async (dispatch) =>{
	await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leocrispim/choose-person`, {
		id: id,
		choice: option
	})
	dispatch(getProfileToSwipe())
} 

export const storeMatches = matches =>({
	type: 'STORE_MATCHES',
	payload: {
		matches
	}
})

export const getMatches = () => async (dispatch) =>{
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leocrispim/matches`)
	dispatch(storeMatches(response.data.matches))
}