
import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../assets/axios/config";

const Home = () => {

    const [competidores, setCompetidores] = useState([])

    const [follow, setFollow] = useState([])
    const [mega, setMega] = useState([])
    const [mini, setMini] = useState([])
    const [robocode, setRobocode] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/competidor`).then(res => setCompetidores(res.data))
    }, [])
    // Mostra o array ordenado em ordem crescente

    const navigate = useNavigate()

    useEffect(() => {

        setMega(competidores.filter((e) => e.modalidade.match("Mega")))
        setFollow(competidores.filter((e) => e.modalidade.match("Follow")))
        setMini(competidores.filter((e) => e.modalidade.match("Mini")))
        setRobocode(competidores.filter((e) => e.modalidade.match("Robocode")))

    }, [competidores.length < 1])

    const sortDataAscending = (field, modalidade) => {

        if (modalidade.match("follow")) {
            const sortedData = [...follow];
            sortedData.sort((a, b) => {
                return a[field] - b[field];
            });
            setFollow(sortedData);
            ordenarRanking(follow)
        } else if (modalidade.match("mega")) {
            const sortedData = [...mega];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });

            setMega(sortedData);
            ordenarRanking(mega)
        } else if (modalidade.match("mini")) {
            const sortedData = [...mini];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });

            setMini(sortedData);
            ordenarRanking(mini)
        } else if (modalidade.match("robocode")) {
            const sortedData = [...robocode];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });

            setRobocode(sortedData);
            ordenarRanking(robocode)
        }
    };

    const ordenarRanking = (item) => {
        let cont = item.length + 1
        item.map((key) => {
            cont--
            key.ranking = cont.toString()
            console.log(key.nomeCompetidor)
            axios.put(`${baseURL}/edit-competidor/${key._id}`, key).then((res) => console.log(res.data))
        })
    }

    useEffect(() => {
        sortDataAscending('pontuacao', "follow")
    }, [follow.length < 3])
    useEffect(() => {
        sortDataAscending('pontuacao', "mega")
    }, [mega.length < 3])
    useEffect(() => {
        sortDataAscending('pontuacao', "mini")
    }, [mini.length < 3])
    useEffect(() => {
        sortDataAscending('pontuacao', "robocode")
    }, [robocode.length < 3])

    let contFollow = 0, contMega = 0, contMini = 0, contCode = 0

    return (
        <section id="table-home">
            <h2>Follow:</h2>
            <hr />
            <section id="continer-cards">
                {follow.map((item) => {
                    contFollow++
                    return (
                        <>
                            <section key={item._id} id="card" onClick={() => navigate(`/site-card-vite/${item._id}`)}>
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
                        </>
                    )
                })}
            </section>
            <br />
            <h2>Mega:</h2>
            <hr />
            <section id="continer-cards">
                {mega.map((item) => {
                    contMega++
                    return (
                        <>
                            <section key={item._id} id="card" onClick={() => navigate(`/site-card-vite/${item._id}`)}>
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
                        </>
                    )
                })}
            </section>
            <br />
            <h2>Mini:</h2>
            <hr />
            <section id="continer-cards">
                {mini.map((item) => {
                    contMini++
                    return (
                        <>
                            <section key={item._id} id="card" onClick={() => navigate(`/site-card-vite/${item._id}`)}>
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
                        </>

                    )
                })}
            </section>
            <br />
            <h2>Robocode:</h2>
            <hr />
            <section id="continer-cards">
                {robocode.map((item) => {
                    contCode++
                    return (
                        <>
                            <section key={item._id} id="card" onClick={() => navigate(`/site-card-vite/${item._id}`)}>
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
                        </>
                    )
                })}
            </section>
        </section>
    )
}

export default Home;