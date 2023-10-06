import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../assets/axios/config";

import "./style.css"
import FollowLine from "../Modalidades/FollowLine";
import MegaSumo from "../Modalidades/MegaSumo";

const CadBatle = () => {
    const { modalidade } = useParams()

    const [competidores, setCompetidores] = useState([])

    const [batalha, setBatalha] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/competidor`).then((res) => setCompetidores(res.data))
    }, [])

    const escolherCompetidores = (item) => {

        if (modalidade != "Follow Line") {
            const newBatle = [
                ...batalha,
                item

            ]

            setBatalha(newBatle)
        }else{
            setBatalha([item])
        }
    }

    const fight = () => {
        if (batalha.length === 1) {
            batalha.map((item) => {
                console.log("Corrida do robô: " + item.nomeRobo)
            })
        } else if (batalha.length === 2) {
            console.log("batalha entre: " + batalha[0].nomeRobo + " VS " + batalha[1].nomeRobo)
        }
    }

    const removerCompetidores = () => {
        setBatalha([])
    }

    return (
        <>
            <section id="arena">
                {(batalha.length < 3 && modalidade !== "Follow Line") ? ( //chamar cada compoente modalidade pra ficar uma melhor visualização, visto que serão itens diferentes
                    batalha.map((item) => {
                        return (
                            <>
                                {modalidade.match("MegaSumo") ? <MegaSumo key={item._id} item={item} /> : ""}
                                {modalidade.match("MiniSumo") ? <MegaSumo key={item._id} item={item} /> : ""}
                                {modalidade.match("Robocode") ? <MegaSumo key={item._id} item={item} /> : ""}
                            </>
                        )
                    })
                ) : ((modalidade === "Follow Line" && batalha.length === 1) ? (
                    batalha.map((item) => {
                        return (
                            <FollowLine key={item._id} item={item} />
                        )
                    })) : console.log("não"))}
            </section>
            <section style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "20px auto 0" }}>
                <button onClick={() => fight()} >Começar</button>
                <button onClick={() => removerCompetidores()} >reiniciar</button>
            </section>
            <section id="continer-cards-batle">
                {competidores.map((item) => {
                    if (item.modalidade === modalidade) {
                        return (
                            <section className="min-card" key={item._id} onClick={() => escolherCompetidores(item)}>
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
                    }
                })}
            </section>
        </>
    )
}

export default CadBatle