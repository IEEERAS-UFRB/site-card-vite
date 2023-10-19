import React from "react";

import "./style.css"
import { useNavigate } from "react-router-dom";

import imgMega from "../../assets/images/mega.jpeg"
import imgMini from "../../assets/images/mini.jpeg"
import imgFollow from "../../assets/images/follow.jpeg"
import imgCode from "../../assets/images/Robocode.jpeg"

const Batle = () => {

    const navigate = useNavigate()

    const modalidades = ["Mega Sumô", "Mega Sumô Rádio Controlado", "Mini Sumô", "Mini Sumô Rádio Controlado", "Follow Line", "Robocode"]

    return (
        <div id="container-batle">
            <section className="card-modalidade" >
                <h2>{modalidades[0]}</h2>
                <div className="unico">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[0]}`)}>
                        <img src={imgMega} alt="modalidade mega" style={{ width: "100%" }} />
                    </section>
                </div>
            </section>
            <section className="card-modalidade">
                <h2>{modalidades[2]}</h2>
                <div className="unico">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[2]}`)}>
                        <img src={imgMini} alt="modalidade mega" style={{ width: "100%" }} />
                    </section>
                </div>
            </section>
            <section className="card-modalidade">
                <h2>{modalidades[4]}</h2>
                <div className="unico">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[4]}`)}>
                        <img src={imgFollow} alt="modalidade mega" style={{ width: "100%" }} />
                    </section>
                </div>
            </section>
            <section className="card-modalidade">
                <h2>{modalidades[5]}</h2>
                <div className="unico">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[5]}`)}>
                        <img src={imgCode} alt="modalidade mega" style={{ width: "100%" }} />
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Batle