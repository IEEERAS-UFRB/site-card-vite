import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { baseURL } from "../../../assets/axios/config";

import "./style.css"

const FollowLine = ({ item }) => {

    console.log(item)

    const { register, handleSubmit } = useForm()

    const onSubmit = async (values) => {

        if (values.tempo < item.pontuacao || item.pontuacao === 0 || item.pontuacao === "" || item.pontuacao === undefined) {
            item.pontuacao = values.tempo
            await axios.put(`${baseURL}/edit-competidor/${item._id}`, item).
                then((res) => console.log(res.data))
        }
    }

    return (
        <section id="container-follow">

            <section className="pista">
                <img src="https://th.bing.com/th/id/OIP.OTSTDNhQ2wEJ2LOpftI84AHaEG?pid=ImgDet&rs=1" alt="" />

                <form onSubmit={handleSubmit(async (data) => await onSubmit(data))} id="ranking" >
                    <input type="text" name="tempo" placeholder="tempo percorrido"  {...register("tempo")} />
                    <button>salvar</button>
                </form>
            </section>

            <section id="info-follow">
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

                <section id="container-imagem-robo">
                    <img src={item.nomeRobo} alt="" />
                </section>
            </section>
        </section>
    )
}

export default FollowLine