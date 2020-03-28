import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../Router';

const MainURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/leocrispim'

const setTrips = (trips) => ({
	type: 'SET_TRIPS',
	payload: {
		trips
	}
})

export const getTrips = () => async (dispatch) => {
	try {
		const response = await axios.get(`${MainURL}/trips`)
		dispatch(setTrips(response.data.trips))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir lista de viagens')
	}
}

export const submitApplication = (applicationData) => async (dispatch) => {
	const newApplication = { ...applicationData }
	delete newApplication.tripID

	try {
		await axios.post(`${MainURL}/trips/${applicationData.tripID}/apply`, newApplication)
		alert("Aplicacao enviada com sucesso!")
		dispatch(push('/'))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar enviar aplicacao de usuario')
	}
}

const setTripDetails = (tripDetails) => ({
	type: 'SET_TRIP_DETAILS',
	payload: {
		tripDetails
	}
})

export const getTripDetails = (tripID) => async (dispatch) => {
	try {
		const response = await axios.get(`${MainURL}/trip/${tripID}`, {
			headers: {
				auth: localStorage.getItem("token")
			}
		})
		dispatch(setTripDetails(response.data.trip))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir detalhes da viagem')
	}
}

export const setTripIdAndPush = (tripID) => async (dispatch) => {
	dispatch(setTripDetailsID(tripID))
	dispatch(push(routes.TripDetailsPage))
}

const setTripDetailsID = (tripID) => ({
	type: 'SET_TRIP_DETAILS_ID',
	payload: {
		tripID
	}
})

export const setApprovedCandidate = (tripID, candidateID) => async (dispatch) =>{
	try{
		await axios.put(`${MainURL}/trips/${tripID}/candidates/${candidateID}/decide`)
	}
	catch(error){
		console.log(error)
		alert('Erro ao tentar aprovar o candidato')
	}
}