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