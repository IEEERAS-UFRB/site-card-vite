import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../assets/axios/config";

import "./style.css"
import QRCode from "react-qr-code";

import bgMega from "../../assets/images/bgMega.jpeg"
import bgMini from "../../assets/images/bgMini.jpeg"
import bgFollow from "../../assets/images/bgFollow.jpeg"
import bgCode from "../../assets/images/bgCode.jpeg"

const Competidor = () => {

    const { id } = useParams()

    const [item, setItem] = useState({})

    const navigate = useNavigate()

    const [bg, setBg] = useState("")

    useEffect(() => {
        axios.get(`${baseURL}/competidor/${id}`).then((res) => {
            setItem(res.data)
            if (res.data.modalidade.match("Mega")) {
                setBg(bgMega)
            } else if (res.data.modalidade.match("Mini")) {
                setBg(bgMini)
            } else if (res.data.modalidade.match("Follow")) {
                setBg(bgFollow)
            } else if (res.data.modalidade.match("Robocode")) {
                setBg(bgCode)
            }
        })
    }, [])

    const irPara = (item) => {
        navigate(`${item}`)
    }

    return (
        <div className="container-card container-card-comp" style={{
            backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", height: "90vh",
            textShadow: "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px"
        }}>
            <section style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <h3>{item.nomeCompetidor}</h3>
                <section id="competidor" style={{ width: "auto" }}>
                    <img src={item.linkGif} alt="" id="imgComp" />
                    <section id="info-competidor" style={{ marginTop: "5px" }}>
                        <p style={{ background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}><span>Instituição: </span>{item.instituicao}</p>
                        <hr />
                        <p style={{ background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}><span>Ranking: </span>{item.ranking}</p>
                        <hr />
                        <p style={{ background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}><span>{item.modalidade == "Follow Line" ? "Melhor Tempo: " : "Pontuação: "}</span>{item.modalidade == "Follow Line" ? Math.floor(item.pontuacao / 100) + ":" + item.pontuacao % 100 + "s" : item.pontuacao}</p>
                        <hr />
                        <p style={{ background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}><span>Modalidade: </span>{item.modalidade}</p>
                    </section>
                </section>
            </section>

            <hr />

            <section className="equipe">

                <section >
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "normal", background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}> <span style={{ fontWeight: "bold" }}>Equipe:</span>  {item.equipe}</h3>
                    {item.linkGifEquipe ? <img src={item.linkGifEquipe} /> : ""}
                </section>

                <section>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "normal", background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}> <span style={{ fontWeight: "bold" }}>Robô:</span>  {item.nomeRobo}</h3>
                    {item.linkRobo ? <img src={item.linkRobo} /> : ""}
                </section>

            </section>

            {/*
            <section id="competidor">
                
            </section>
*/}
            <section className="qrcodes" style={{ background: "rgba(0,0,0,0.6)", padding: "3px 10px" }}>
                <section id="competidor" onClick={() => irPara(`https://ieeeras-ufrb.github.io/site-card-vite/${id}`)}>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "normal" }}> <span style={{ fontWeight: "bold" }}>meu card:</span></h3>
                    <QRCode value={`https://ieeeras-ufrb.github.io/site-card-vite/${id}`} id="qr-code-comp" />
                </section>

                <section id="competidor" onClick={() => irPara(`/${item.instagram}`)}>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "normal" }}> <span style={{ fontWeight: "bold" }}>Instagram:</span>  </h3>
                    <QRCode value={`${item.instagram}`} id="qr-code-comp" />
                </section>

            </section>

        </div>
    )
}

export default Competidor;