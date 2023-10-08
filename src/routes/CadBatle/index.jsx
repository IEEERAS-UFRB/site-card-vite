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

    const [comecar, setComecar] = useState(false)

    const [reboot, setReboot] = useState(false)

    const [vitoria, setVitoria] = useState([])

    const fim = (item) => {
        console.log(item)
        setVitoria(item)
    }

    useEffect(() => {
        axios.get(`${baseURL}/competidor`).then((res) => setCompetidores(res.data))
    }, [])

    const escolherCompetidores = (item) => {

        if (modalidade != "Follow Line" & batalha.length < 2) {
            if (batalha[0]) {
                if (batalha[0]._id !== item._id) {
                    const newBatle = [
                        ...batalha,
                        item
                    ]
                    setBatalha(newBatle)
                }
            }
            if (batalha.length === 0) {
                const newBatle = [
                    ...batalha,
                    item
                ]
                setBatalha(newBatle)
            }
        } else {
            setBatalha([item])
        }
    }

    const fight = () => {
        if (batalha.length === 1) {
            batalha.map((item) => {
                axios.post(`${baseURL}/volta`, { comp1: batalha[0] }).then((res) => console.log(res.data))
                console.log("Corrida do robô: " + item.nomeRobo)
            })
        } else if (batalha.length === 2) {
            axios.post(`${baseURL}/round`, { comp1: batalha[0], comp2: batalha[1] }).then((res) => console.log(res.data))
            console.log("batalha entre: " + batalha[0].nomeRobo + " VS " + batalha[1].nomeRobo)
        }
        setComecar(true)
    }

    const removerCompetidores = () => {
        setBatalha([])
        setReboot(false)

        vitoria.acabou = true

        axios.put(`${baseURL}/edit-vitoria/${vitoria._id}`, vitoria).then((item) => console.log(item))

    }

    return (
        <>
            <section className="arena">
                {(batalha.length < 3 && modalidade !== "Follow Line") ? ( //chamar cada compoente modalidade pra ficar uma melhor visualização, visto que serão itens diferentes
                    <>
                        {modalidade.match("Mega") ? <MegaSumo batalha={batalha} comecar={comecar} reboot={reboot} fim={fim} /> : ""}
                        {/* {modalidade.match("Mini") ? <MegaSumo item={item} /> : ""}
                        {modalidade.match("Robocode") ? <MegaSumo item={item} /> : ""} */}
                    </>
                ) : ((modalidade === "Follow Line" && batalha.length === 1) ? (
                    batalha.map((item) => {
                        return (
                            <FollowLine key={item._id} item={item} comecar={comecar}/>
                        )
                    })) : console.log("não"))}
            </section>
            <section style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "20px auto 0" }}>
                <button onClick={() => fight()} >Começar</button>
                {modalidade === "Follow Line" ? "" : <button onClick={() => removerCompetidores()} >reiniciar</button>}
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