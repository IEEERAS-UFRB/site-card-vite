import React from "react";

import "./style.css"
import { useNavigate } from "react-router-dom";

const Batle = () => {

    const navigate = useNavigate()

    const modalidades = ["Mega Sumô", "Mega Sumô Rádio Controlado", "Mini Sumô", "Mini Sumô Rádio Controlado", "Follow Line", "Robocode"]

    return (
        <div id="container-batle">
            <section className="card-modalidade">
                <h2>{modalidades[0]}</h2>
                <div className="duplo">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[0]}`)}></section>
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[1]}`)}></section>
                </div>
            </section>
            <section className="card-modalidade">
                <h2>{modalidades[2]}</h2>
                <div className="duplo">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[2]}`)}></section>
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[3]}`)}></section>
                </div>
            </section>
            <section className="card-modalidade">
                <h2>{modalidades[4]}</h2>
                <div className="unico">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[4]}`)}></section>
                </div>
            </section>
            <section className="card-modalidade">
                <h2>{modalidades[5]}</h2>
                <div className="unico">
                    <section onClick={() => navigate(`/site-card-vite/batle/${modalidades[5]}`)}></section>
                </div>
            </section>
        </div>
    )
}

export default Batle