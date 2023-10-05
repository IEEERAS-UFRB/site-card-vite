import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { baseURL } from "../../assets/axios/config";

import "./style.css"

const Competidor = () => {

    const { id } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        axios.get(`${baseURL}/competidor/${id}`).then((res) =>{
            setItem(res.data)
        })
    }, [item])

    return (
        <div className="container-card">
            <section key={id} id="card">
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

            <section  id="card">
                <section className="header">
                    <p>{item.ranking}</p>
                    <h5>{item.nomeCompetidor}</h5>
                </section>

                <section className="competidor">
                    <div style={{ backgroundImage: `url(${item.linkGif})`, backgroundSize: "contain", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} > </div>
                </section>
                
                
            </section>
        </div>
    )
}

export default Competidor;