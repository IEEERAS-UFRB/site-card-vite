import axios from "axios";
import React, { useEffect } from "react"
import { useParams } from "react-router-dom";

import "./style.css"

const Competidor = () => {

    const { id } = useParams()

    //console.log(id)

    const item = 
        {
            _id: 1,
            nomeCompetidor: "Gabriel",
            nomeRobo: "follow",
            modalidade: "follow",
            instituicao: "UFRB",
            ranking: 0,
            equipe: "RAS",
            linkGif:"https://www.bing.com/th/id/OGC.e53101c53ef96a9f2970ea0f7a3f0d80?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.co%2fimages%2fe53101c53ef96a9f2970ea0f7a3f0d80%2fraw&ehk=20BKLBjtiM%2b2PrRvmFZAqNgpwqV0niThKz9xf%2f6u%2bV8%3d",
            linkRobo: "data:image/jpeg;base64,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",
        }

    useEffect(() => {
        //const res = axios.get(`http://localhost:4000/competidor/${id}`)      
    }, [])

    return (
        <div className="container-card">
            <section key={id} id="card">
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
        </div>
    )
}

export default Competidor;