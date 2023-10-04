import React, { useEffect, useState } from "react"
import axios from "axios"
import QrCode from '../../components/QrCode/QrCode'

import blogFetch from "../../assets/axios/config"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        //getPosts()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(posts)

        //await blogFetch.post("/cad-glossario", { body: posts})
        navigate("/site-card-vite")
    }


    return (
        <div>

            <form onSubmit={(e) => onSubmit(e)} action="">
                
                <section className="item-form">
                    <label htmlFor="">
                        Nome Competidor
                    </label>
                    <input type="text" name="nomeCompetidor" placeholder="Nome do competidor" onChange={(e) => setPosts(e.target.value)} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Equipe
                    </label>
                    <input type="text" name="equipe" placeholder="Equipe"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Modalidade
                    </label>
                    <input type="text" name="modalidade" placeholder="Modalidade"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Instituição
                    </label>
                    <input type="text" name="instituição" placeholder="Instituição"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Nome do Robô
                    </label>
                    <input type="text" name="nomeRobo" placeholder="Nome do Robô"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link Gif
                    </label>
                    <input type="text" name="linkGif" placeholder="link gif"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link foto robô
                    </label>
                    <input type="text" name="fotoRobo" placeholder="link robô"/>
                </section>

                <button>Enviar</button>
            </form>

            <QrCode />
            
        </div>
    )
}

export default Cadastrar