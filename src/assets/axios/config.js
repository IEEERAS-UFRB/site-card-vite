import axios from "axios"

export const baseURL = "https://0e3c3bdfa151bf8240f556ab31d1c9ea.serveo.net"

const blogFetch = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch