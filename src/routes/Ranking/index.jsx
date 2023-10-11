import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../assets/axios/config";

import "./style.css"

const Ranking = () => {

    const [competidores, setCompetidores] = useState([])

    const [follow, setFollow] = useState([])
    const [mega, setMega] = useState([])
    const [mini, setMini] = useState([])
    const [robocode, setRobocode] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/competidor`).then(res => setCompetidores(res.data))
    }, [])
    // Mostra o array ordenado em ordem crescente

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
                return b[field] - a[field];
            });
            setFollow(sortedData);
        } else if (modalidade.match("mega")) {
            const sortedData = [...mega];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });

            setMega(sortedData);
        } else if (modalidade.match("mini")) {
            const sortedData = [...mini];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });

            setMini(sortedData);
        } else if (modalidade.match("robocode")) {
            const sortedData = [...robocode];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });

            setRobocode(sortedData);
        }
    };

    useEffect(() => {
        sortDataAscending('pontuacao', "follow")
    }, [follow.length < 1])
    useEffect(() => {
        sortDataAscending('pontuacao', "mega")
    }, [mega.length < 1])
    useEffect(() => {
        sortDataAscending('pontuacao', "mini")
    }, [mini.length < 1])
    useEffect(() => {
        sortDataAscending('pontuacao', "robocode")
    }, [robocode.length < 1])

    let contFollow = 0, contMega = 0, contMini = 0, contCode = 0

    return (
        <section id="table-ranking">
            <section>
                <h2>Follow:</h2>
                <hr />
                {follow.map((item) => {
                    contFollow++
                    //handleSort("pontuacao")
                    return (
                        <>
                            <section key={item._id} className="itens-ranking">
                                <p style={{ width: "10%", textAlign: "center" }}>{contFollow}</p>
                                <p style={{ width: "70%" }}>{item.nomeCompetidor}</p>
                                {item.modalidade.match("Follow")
                                    ? (<p style={{ width: "20%", textAlign: "center" }}>
                                        {
                                            item.pontuacao
                                                ? (item.pontuacao < 100 ? "0:"+item.pontuacao : Math.floor(item.pontuacao/100) + ":" + item.pontuacao%100)
                                                : "0:00"
                                        }
                                    </p>)
                                    : (<p style={{ width: "20%", textAlign: "center" }}>{item.pontuacao ? item.pontuacao : 0}</p>)}
                            </section>
                        </>
                    )
                })}
            </section>
            <br />
            <section>
                <h2>Mega:</h2>
                <hr />
                {mega.map((item) => {
                    contMega++
                    return (
                        <section key={item._id} className="itens-ranking">
                            <p style={{ width: "10%", textAlign: "center" }}>{contMega}</p>
                            <p style={{ width: "70%" }}>{item.nomeCompetidor}</p>
                            <p style={{ width: "20%", textAlign: "center" }}>{item.pontuacao ? item.pontuacao : 0}</p>
                        </section>
                    )
                })}
            </section>
            <br />
            <section>
                <h2>Mini:</h2>
                <hr />
                {mini.map((item) => {
                    contMini++
                    return (
                        <section key={item._id} className="itens-ranking">
                            <p style={{ width: "10%", textAlign: "center" }}>{contMini}</p>
                            <p style={{ width: "70%" }}>{item.nomeCompetidor}</p>
                            <p style={{ width: "20%", textAlign: "center" }}>{item.pontuacao ? item.pontuacao : 0}</p>
                        </section>
                    )
                })}
            </section>
            <br />
            <section>
                <h2>Robocode:</h2>
                <hr />
                {robocode.map((item) => {
                    contCode++
                    return (
                        <section key={item._id} className="itens-ranking">
                            <p style={{ width: "10%", textAlign: "center" }}>{contCode}</p>
                            <p style={{ width: "70%" }}>{item.nomeCompetidor}</p>
                            <p style={{ width: "20%", textAlign: "center" }}>{item.pontuacao ? item.pontuacao : 0}</p>
                        </section>
                    )
                })}
            </section>
        </section>
    )
}

export default Ranking