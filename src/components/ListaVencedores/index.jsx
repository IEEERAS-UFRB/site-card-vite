import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { baseURL } from "../../assets/axios/config"
import "./style.css"

const ListaVencedores = ({ souCad }) => {

    const { modalidade } = useParams()

    const [ranking, setRanking] = useState([])
    const [vitoria, setVitoria] = useState([])

    useEffect(() => {
        if (modalidade.match("Follow Line")) {
            axios.get(`${baseURL}/volta`).then((res) => setRanking(res.data))
        } else if (modalidade.match("Mega")) {
            axios.get(`${baseURL}/round`).then((res) => setRanking(res.data))
        } else if (modalidade.match("Mini")) {
            axios.get(`${baseURL}/round-mini`).then((res) => setRanking(res.data))
        } else if (modalidade.match("Robocode")) {
            axios.get(`${baseURL}/round-code`).then((res) => setRanking(res.data))
        }
    }, [ranking.length === 0])

    useEffect(() => {
        if (modalidade.match("Mega")) {
            axios.get(`${baseURL}/vitoria`).then((res) => setVitoria(res.data))
        } else if (modalidade.match("Mini")) {
            axios.get(`${baseURL}/vitoria-mini`).then((res) => setVitoria(res.data))
        } else if (modalidade.match("Robocode")) {
            axios.get(`${baseURL}/vitoria-code`).then((res) => setVitoria(res.data))
        }
    }, [vitoria.length === 0])

    return (
        <>
            <h1 style={{ margin: "20px auto", textAlign: "center", color: "#fff", textDecoration: "underline" }}>
                Partidas Ateriores:
            </h1>
            <section className="resultado">
                <section style={{ borderRight: "2px solid #fff", padding: "5px" }}>
                    Partida
                    {ranking.map((key) => {
                        if (key.comp1) {
                            return (
                                <ul key={key._id} className="table" style={{ width: "auto" }}>
                                    <ol style={{ color: "#fff" }}>
                                        {key.comp1.nomeCompetidor}
                                        {modalidade.match("Follow") ? "" : " Vs " + key.comp2.nomeCompetidor}
                                        {souCad ? " | " + key._id : ""}
                                    </ol>
                                </ul>
                            )
                        }
                    })}
                </section>
                <section style={{ borderLeft: "2px solid #fff", padding: "10px" }}>
                    Vencedor:
                    {vitoria.map((key) => {

                        return (
                            <ul className="table" style={{ width: "auto" }}>
                                <ol style={{ color: "#fff" }}>
                                    {key.comp.nomeCompetidor}
                                </ol>
                            </ul>
                        )
                    })}
                </section>
            </section>
        </>
    )
}

export default ListaVencedores