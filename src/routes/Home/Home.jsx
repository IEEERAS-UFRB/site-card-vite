
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

    const getDelet = (id) =>{
        const res = axios.delete(`/delet-competidor/${id}`)

       //console.log(id)
    }

    useEffect(() => {
        getPosts()
    })

    return (
        <>
            <div id="continer-cards">

                {posts.length === 0 ? <p> carreagando... </p> : (
                    posts.map((item) => {
                        //colocar um navigate pra ir pra outra pagina quando clicar cno card
                        return (
                            <section key={item._id} id="card" onClick={() => getDelet(item._id)}>
                                <section className="header">
                                    <p>{item.ranking}</p>
                                    <h5>{item.nomeCompetidor}</h5>
                                </section>

                                <section className="body">
                                    <section className="competidor-robo"></section>
                                    <section className="content">
                                        <p>Equipe: <span>{item.equipe}</span></p>
                                        <p>Modalidade: <span>{item.modalidade}</span></p>
                                        <p>Instituição: <span>{item.instituicao}</span></p>
                                    </section>
                                </section>
                            </section>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Home;