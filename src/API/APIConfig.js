import Axios from './node_modules/axios'
const BASE_URL = 'https://5dd1ce6b15bbc2001448d431.mockapi.io'

export const api = Axios.create({
    baseURL: BASE_URL,
    headers: {

    }
})