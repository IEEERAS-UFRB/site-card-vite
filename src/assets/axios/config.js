import axios from "axios"

const blogFetch = axios.create({
    baseURL: "https://289b-200-128-102-253.ngrok.io",
    headers:{
        "Content-Type": "application/json"
    }
})

export default blogFetch