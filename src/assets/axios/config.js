import axios from "axios"

export const baseURL = "https://6180-200-128-84-2.ngrok.io"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch