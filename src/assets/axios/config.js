import axios from "axios"

export const baseURL = "https://1771-179-97-232-14.ngrok.io"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch