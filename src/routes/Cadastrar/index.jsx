import React, { useEffect, useState } from "react"
import QrCode from '../../components/QrCode/QrCode'

import blogFetch from "../../assets/axios/config"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const Cadastrar = () => {

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        //getPosts()
    }, [])

    const onSubmit = async (data) => {
        //await e.preventDefault()
        console.log(data)


        //await blogFetch.post("/cad-glossario", { body: posts})
        //navigate("/site-card-vite")
    }


    return (
        <div>

            <form onSubmit={() => handleSubmit(onSubmit)()}>
                
                <section className="item-form">
                    <label htmlFor="">
                        Nome Competidor
                    </label>
                    <input type="text" name="nomeCompetidor" placeholder="Nome do competidor" {...register("nomeCompetidor")}/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Equipe
                    </label>
                    <input type="text" name="equipe" placeholder="Equipe" {...register("equipe")}/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Modalidade
                    </label>
                    <input type="text" name="modalidade" placeholder="Modalidade" {...register("modalidade")}/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Instituição
                    </label>
                    <input type="text" name="instituicao" placeholder="Instituição" {...register("instituicao")}/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Nome do Robô
                    </label>
                    <input type="text" name="nomeRobo" placeholder="Nome do Robô" {...register("nomeRobo")}/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link Gif
                    </label>
                    <input type="text" name="linkGif" placeholder="link gif" {...register("linkGif")}/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link foto robô
                    </label>
                    <input type="text" name="fotoRobo" placeholder="link robô" {...register("fotoRobo")}/>
                </section>

                <button type="submit">Enviar</button>
            </form>

            <QrCode />
            
        </div>
    )
}

export default Cadastrar