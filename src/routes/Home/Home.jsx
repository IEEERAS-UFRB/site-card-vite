
import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    const getPosts = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/competidor`)
            const data = res.data

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDelet = (id) => {
        const res = axios.delete(`/delet-competidor/${id}`).then((res) => console.log(res)).catch((error) => console.log(error))

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
                            <section key={item._id} id="card" onClick={() => navigate(`/site-card-vite/${item._id}`) }>
                                <section className="header">
                                    <p>{item.ranking}</p>
                                    <h5>{item.nomeCompetidor}</h5>
                                </section>

                                <section className="competidor">
                                    <div style={{ backgroundImage: `url(${item.linkGif})`, backgroundSize: "contain", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} > </div>
                                </section>
                                <section className="robo">
                                    <img src={item.linkRobo} />
                                </section>
                                <section className="body">
                                    <section className="content">
                                        <p><b>Equipe:</b> <span>{item.equipe}</span></p>
                                        <p><b>Modalidade:</b> <span>{item.modalidade}</span></p>
                                        <p><b>Instituição:</b> <span>{item.instituicao}</span></p>
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