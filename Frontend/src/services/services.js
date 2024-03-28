/* eslint-disable no-unused-vars */
import  axios  from "axios"
const url = 'https://api.escuelajs.co/api/v1/products'

const getProducts = async () => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error('Error getting products', error)
    }

}

export default getProducts