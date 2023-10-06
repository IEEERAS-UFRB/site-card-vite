import React from "react";

const MegaSumo = () => {
    return (
        <section id="container-follow">
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
        </section>
    )
}

export default MegaSumo