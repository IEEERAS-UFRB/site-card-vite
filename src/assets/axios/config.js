import axios from "axios"

export const baseURL = "http://localhost:4000"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch