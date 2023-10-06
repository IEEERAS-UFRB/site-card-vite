import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../assets/axios/config";

import "./style.css"

const CadBatle = () => {
    const { modalidade } = useParams()

    const [competidores, setCompetidores] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/competidor`).then((res) => setCompetidores(res.data))
    }, [])

    console.log(competidores)

    return (
        <>
            <section id="arena">
                
            </section>
            <section id="continer-cards-batle">
                {competidores.map((item) => {
                    if (item.modalidade === modalidade) {
                        return (
                            <section className="min-card" key={item._id}>
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