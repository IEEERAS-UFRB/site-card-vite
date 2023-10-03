import React, {useState, useEffect} from 'react'
import axios from "axios"
import QrCode from './QrCode'

const Home = () =>{

    const [posts, setPosts] = useState([])

    const getPosts = async () =>{
        try {
            const res = await axios.get(`https://3a83-200-128-102-253.ngrok.io/glossario`)
            const data = res.data

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getPosts()
    }, [])


    return (
        <>
        <QrCode />
        {posts.length === 0 ? <p> carreagando... </p>: (
            posts.map((item) =>{
                return (
                    <h1 key={item.id} >{item.id}</h1>
                )
            })
        )}
        </>
    )
}

export default Home;