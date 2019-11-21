import {api} from './APIConfig'
import Axios from 'axios'

export const getAllAdventures = async () => {
	try {
        const resp = await api.get('/RecAreas')
        console.log(resp.data)
        return resp.data
	} catch (error) {
		throw error
	}
}

export const createItem = async (adventureData) => {
	try {
		const resp = await api.post('/RecAreas', adventureData)
		return resp
	} catch (error) {
		throw error
	}
}


// const url = `http://api.weatherstack.com/current?access_key=c5279c001f9e98167f2f81079ebdf319&query=New York&units=f`

// export const weatherData = async () => {
// 	try {
// 		const resp = Axios.get(url)
// 		return resp.data
// 	} catch (error) {
// 		throw error
// 	}
// }

