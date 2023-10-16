import axios from "axios"

export const baseURL = "https://iter.serveo.net"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch