import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../assets/axios/config";

import "./style.css"
import FollowLine from "../Modalidades/FollowLine";
import MegaSumo from "../Modalidades/MegaSumo";
import MegaSumoTelao from "../Modalidades/MegaSumoTelao";

const Modalidade = () => {
    const { modalidade } = useParams()

    const [competidores, setCompetidores] = useState([])

    const [vencedor, setVencedor] = useState([])


    useEffect(() => {
        axios.get(`${baseURL}/round`).then((res) => newComp(res.data.pop()))
    }, [])

    const newComp = (item) =>{

        const Comp =[
            ...competidores,
            item.comp1,
            item.comp2
        ]

        setCompetidores(Comp)

    }

    useEffect(() => {
        axios.get(`${baseURL}/vitoria`).then((res) => newVenc(res.data.pop()))
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
            <section id="arena">
                {(modalidade !== "Follow Line") ? (
                    <>
                        {modalidade.match("Mega") ? <MegaSumoTelao competidores={competidores} vencedor = {vencedor}/> : ""}
                        {modalidade.match("Mini") ? <MegaSumo item={item} /> : ""}
                        {modalidade.match("Robocode") ? <MegaSumo item={item} /> : ""}
                    </>
                ) : ((modalidade === "Follow Line" && competidores.length === 1) ? (
                    competidores.map((item) => {
                        return (
                            <FollowLine key={item._id} item={item} />
                        )
                    })) : console.log("não"))}
            </section>
        </>
    )
}

export default Modalidade