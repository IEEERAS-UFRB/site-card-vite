import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../assets/axios/config";

const Ranking = () => {

    const [competidores, setCompetidores] = useState([])

    const [follow, setFollow] = useState([])
    const [mega, setMega] = useState([])
    const [mini, setMini] = useState([])
    const [robocode, setRobocode] = useState([])

    const [data, setData] = useState([]);

    const [ranking, setRanking] = useState([])
    const [maior, setMaior] = useState([{ pontuacao: 0 }])

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

        if(modalidade.match("follow")){
            const sortedData = [...follow];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });
            setFollow(sortedData);
        } else if(modalidade.match("mega")){
            const sortedData = [...mega];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });
    
            setMega(sortedData);
        } else if(modalidade.match("mini")){
            const sortedData = [...mini];
            sortedData.sort((a, b) => {
                return b[field] - a[field];
            });
    
            setMini(sortedData);
        } else if(modalidade.match("robocode")){
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


    return (
        <>
            <section>
                Follow:
                {follow.map((item) => {
                    //handleSort("pontuacao")
                    return (
                        <>
                            <section key={item._id}>
                                {item.nomeCompetidor} | {item.pontuacao}
                            </section>
                        </>
                    )
                })}
            </section>
            <br />
            <section>
                Mega:
                {mega.map((item) => {

                    return (
                        <section key={item._id}>
                            {item.nomeCompetidor} | {item.pontuacao}
                        </section>
                    )
                })}
            </section>
            <br />
            <section>
                Mini:
                {mini.map((item) => {
                    return (
                        <section key={item._id}>
                            {item.nomeCompetidor} | {item.pontuacao}
                        </section>
                    )
                })}
            </section>
            <br />
            <section>
                Robocode:
                {robocode.map((item) => {
                    return (
                        <section key={item._id}>
                            {item.nomeCompetidor} | {item.pontuacao}
                        </section>
                    )
                })}
            </section>
        </>
    )
}

export default Ranking