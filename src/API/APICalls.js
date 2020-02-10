import {api} from './APIConfig'


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




