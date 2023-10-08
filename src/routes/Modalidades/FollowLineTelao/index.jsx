import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { baseURL } from "../../../assets/axios/config";

import "./style.css"

const FollowLineTelao = ({ item }) => {

    console.log(item)

    //const { register, handleSubmit } = useForm()

    // const onSubmit = async (values) => {

    //     if (values.tempo < item.pontuacao || item.pontuacao === 0 || item.pontuacao === "" || item.pontuacao === undefined) {
    //         item.pontuacao = values.tempo
    //         await axios.put(`${baseURL}/edit-competidor/${item._id}`, item).
    //             then((res) => console.log(res.data))
    //     }
    // }

    return (
        <section  className="container-follow-espec">

            <section className="espectador" style={{justifyContent: "space-around"}}>
                <img src="https://th.bing.com/th/id/OIP.OTSTDNhQ2wEJ2LOpftI84AHaEG?pid=ImgDet&rs=1" alt="" />
                <div style={{color: "#fff"}}>{item.tempo}s</div>
            </section>

            <section id="info-follow-espec">
                <section className="min-card" key={item.comp1._id}>
                    <section className="header">
                        <p>{item.comp1.ranking}</p>
                        <h5>{item.comp1.nomeCompetidor}</h5>
                    </section>

                    <section className="competidor">
                        <div style={{ backgroundImage: `url(${item.comp1.linkGif})`, backgroundSize: "contain", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} > </div>
                    </section>
                    <section className="robo">
                        <img src={item.comp1.linkRobo} />
                    </section>
                    <section className="body">
                        <section className="content">
                            <p><b>Equipe:</b> <span>{item.comp1.equipe}</span></p>
                            <p><b>Modalidade:</b> <span>{item.comp1.modalidade}</span></p>
                            <p><b>Instituição:</b> <span>{item.comp1.instituicao}</span></p>
                        </section>
                    </section>
                </section>

                <section id="container-imagem-robo">
                    <img src={item.comp1.nomeRobo} alt="" />
                </section>
            </section>
        </section>
    )
}

export default FollowLineTelao