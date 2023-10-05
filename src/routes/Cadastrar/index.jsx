import React, { useEffect } from "react"
import QrCode from '../../components/QrCode/QrCode'

import blogFetch from "../../assets/axios/config"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const Cadastrar = () => {

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()
    
    let id = "katon"

    
    const onSubmit = async (values) => {
        //console.log(values)
        
        values.ranking = 0
        
        await blogFetch.post("/cad-competidor", values).then((res) => id = res.data._id)
        return id
        //navigate(`/site-card-vite/${id}`)
    }
    
    useEffect(() =>{
        console.log("Iuiu")
    },[id])

    return (
        <div>

            <form onSubmit={handleSubmit(async (data) => await onSubmit(data))}>

                <section className="item-form">
                    <label htmlFor="">
                        Nome Competidor
                    </label>
                    <input required type="text" name="nomeCompetidor" placeholder="Nome do competidor" {...register("nomeCompetidor")} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Equipe
                    </label>
                    <input required type="text" name="equipe" placeholder="Equipe" {...register("equipe")} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Modalidade
                    </label>
                    <input required type="text" name="modalidade" placeholder="Modalidade" {...register("modalidade")} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Instituição
                    </label>
                    <input required type="text" name="instituicao" placeholder="Instituição" {...register("instituicao")} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Nome do Robô
                    </label>
                    <input required type="text" name="nomeRobo" placeholder="Nome do Robô" {...register("nomeRobo")} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link Gif
                    </label>
                    <input required type="text" name="linkGif" placeholder="link gif" {...register("linkGif")} />
                </section>

                <section className="item-form">
                    <label htmlFor="">
                        Link foto robô
                    </label>
                    <input required type="text" name="linkRobo" placeholder="link robô" {...register("linkRobo")} />
                </section>

                <button>Enviar</button>
            </form>

            <QrCode id = {id}/>

        </div>
    )
}

export default Cadastrar