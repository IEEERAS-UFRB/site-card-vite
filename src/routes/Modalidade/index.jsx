import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../assets/axios/config";

import "./style.css"
import MegaSumo from "../Modalidades/MegaSumo";
import MegaSumoTelao from "../Modalidades/MegaSumoTelao";
import FollowLineTelao from "../Modalidades/FollowLineTelao";
import Ranking from "../../components/Ranking";

const Modalidade = () => {
    const { modalidade } = useParams()

    const [competidores, setCompetidores] = useState([])

    const [vencedor, setVencedor] = useState([])


    useEffect(() => {

        if (modalidade !== "Follow Line") {
            axios.get(`${baseURL}/round`).then((res) => {
                newComp(res.data.pop())
            })
        } else {
            axios.get(`${baseURL}/volta`).then((res) => {
                newComp(res.data.pop())
            })
        }

    }, [])

    const newComp = (item) => {

        if (modalidade !== "Follow Line") {
            const Comp = [
                ...competidores,
                item.comp1,
                item.comp2
            ]
            setCompetidores(Comp)
        } else {
            setCompetidores([item])
        }

    }

    useEffect(() => {
        if (modalidade !== "Follow Line") {
            axios.get(`${baseURL}/vitoria`).then((res) => newVenc(res.data.pop()))
        }
    }, [])

    const newVenc = (item) => {

        const Venc = [
            ...vencedor,
            item
        ]

        console.log(item)

        setVencedor(Venc)
    }

    return (
        <>
            <section id="arena" className="arena-espec">
                {(modalidade !== "Follow Line") ? (
                    <>
                        {modalidade.match("Mega") ? <MegaSumoTelao competidores={competidores} vencedor={vencedor} /> : ""}
                        {modalidade.match("Mini") ? <MegaSumo item={item} /> : ""}
                        {modalidade.match("Robocode") ? <MegaSumo item={item} /> : ""}
                    </>
                ) : ((modalidade === "Follow Line") ? (
                    competidores.map((item) => {
                        return (
                            <FollowLineTelao key={item._id} item={item} />
                        )
                    })) : console.log("não"))}
            </section>

            <Ranking souCad={false}/>
        </>
    )
}

export default Modalidade