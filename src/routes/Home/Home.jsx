
import Nav from "../../components/nav";
import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react";

const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/competidor`)
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
            <Nav />
            <div id="continer-cards">

                {posts.length === 0 ? <p> carreagando... </p> : (
                    posts.map((item) => {
                        //colocar um navigate pra ir pra outra pagina quando clicar cno card
                        return (
                            <section key={item.id} id="card"> 
                                {item.id}
                            </section>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Home;