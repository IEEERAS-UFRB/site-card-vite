import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { baseURL } from "../../assets/axios/config"
import "./style.css"

const Ranking = ({souCad}) => {

    const { modalidade } = useParams()

    const [ranking, setRanking] = useState([])
    // const [vitoria, setVitoria] = useState([])

    useEffect(() => {
        if (modalidade.match("Follow Line")) {
            axios.get(`${baseURL}/volta`).then((res) => setRanking(res.data))
        } else if (modalidade.match("Mega")) {
            axios.get(`${baseURL}/round`).then((res) => setRanking(res.data))
            // axios.get(`${baseURL}/vitoria`).then((res) => setVitoria(res.data))

            // console.log(vitoria)
        } else if (modalidade.match("Mini")) {

        } else if (modalidade.match("Robocode")) {

        }
    }, [ranking.length === 0])

    return (
        <>
            <h1 style={{ margin: "20px auto", textAlign: "center", color: "#fff", textDecoration: "underline" }}>
                Partidas Ateriores:
            </h1>
            {ranking.map((key) => {
                return (
                    <ul key={key._id} className="table">
                        <ol style={{ color: "#fff" }}> 
                            {key.comp1.nomeCompetidor} 
                            {modalidade.match("Follow") ? "" : " Vs " + key.comp2.nomeCompetidor}
                            {souCad ? " | " +  key._id : ""}
                            {/* {modalidade.match("Follow")? "" : } */}
                        </ol>
                    </ul>
                )
            })}
        </>
    )
}

export default Ranking