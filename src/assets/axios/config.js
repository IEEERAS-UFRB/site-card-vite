import axios from "axios"

export const baseURL = "https://f499-200-128-102-253.ngrok.io"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch