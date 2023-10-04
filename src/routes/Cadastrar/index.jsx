import React, { useEffect, useState } from "react"
import axios from "axios"
import QrCode from '../../components/QrCode/QrCode'

const Cadastrar = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.post(`http://localhost:4000/cad-glossario`, posts)
            const data = res.data

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //getPosts()
    }, [])

    function onSubmit(){
        console.log("olá mundo")
    }


    return (
        <div>

            <form action="">
                
                <section className="item-form">
                    <label htmlFor="">
                        Nome Competidor
                    </label>
                    <input type="text" placeholder="Nome do competidor"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Equipe
                    </label>
                    <input type="text" placeholder="Equipe"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Modalidade
                    </label>
                    <input type="text" placeholder="Modalidade"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Instituição
                    </label>
                    <input type="text" placeholder="Instituição"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Nome do Robô
                    </label>
                    <input type="text" placeholder="Nome do Robô"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link Gif
                    </label>
                    <input type="text" placeholder="link gif"/>
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link foto robô
                    </label>
                    <input type="text" placeholder="foto robô"/>
                </section>

                <button onClick={onSubmit()}>Enviar</button>
            </form>

            <QrCode />
            
        </div>
    )
}

export default Cadastrar