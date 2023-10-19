import axios from "axios"

export const baseURL = "https://d8ea61d32ee96ccafa4d8f9d847b5ffa.serveo.net"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch