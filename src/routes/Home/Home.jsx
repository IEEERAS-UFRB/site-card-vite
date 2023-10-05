
import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react";

const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.get(`https://f2f4-200-128-102-253.ngrok.io/competidor`)
            const data = res.data

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <div id="continer-cards">

                {posts.length === 0 ? <p> carreagando... </p> : (
                    posts.map((item) => {
                        //colocar um navigate pra ir pra outra pagina quando clicar cno card
                        return (
                            <section key={item._id} id="card"> 
                                {item.nomeCompetidor}
                            </section>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Home;