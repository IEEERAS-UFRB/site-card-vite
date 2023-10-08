import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube"

import "./style.css"

const RobocodeTelao = ({ competidores, vencedor }) => {

    const [acabou, setAcabou] = useState(false)

    useEffect(() => {

        vencedor.map((item) => {

            if (item.acabou) {

                setAcabou(item.acabou)
            }
        })
    }, [vencedor])

    return (
        <section className="container-robocode">
            <ReactPlayer url={"https://www.youtube.com/watch?v=cLRztK1zE6s"} width={"250px"} height={"200px"} playing={true} />

            <div className="container-cards-robocode">
                {(!acabou) ? (
                    vencedor.map((item) => {
                        return (
                            <section id="container-sumo" key={item._id}>
                                <section className="min-card" >
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

                                <section id="container-image-mega-sumo">
                                    <img src="" alt="" />
                                </section>
                            </section>
                        )
                    })
                ) : (
                    competidores.map((item) => {
                        return (
                            <section id="container-sumo" key={item._id}>
                                <section className="min-card" >
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

                                <section id="container-image-mega-sumo">
                                    <img src="" alt="" />
                                </section>
                            </section>
                        )
                    })
                )}
            </div>

        </section>
    )
}

export default RobocodeTelao