'use server'
import axios from "axios"


const BASE_URL = "http://localhost:5000"

export const dashboardPageDataHandle = async () => {
    const response = await axios.get(`${BASE_URL}/admin/dashboard`)
    return response.data
}



export const farmerPageDataHandle = async () => {
    const response = await axios.get(`${BASE_URL}/admin/farmer`)
    console.log("////////////////////////")
    // console.log(response.data)
    return response.data
}