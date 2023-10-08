import React from "react"

const ListComp = ({item}) =>{

    console.log(item)
    return (
        <>
            {item.map((key) =>{
                return(
                    <section key={key._id} id="card">
                                <section className="header">
                                    <p>{key.ranking}</p>
                                    <h5>{key.nomeCompetidor}</h5>
                                </section>

                                <section className="competidor">
                                    <div style={{ backgroundImage: `url(${key.linkGif})`, backgroundSize: "contain", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} > </div>
                                </section>
                                <section className="robo">
                                    <img src={key.linkRobo} />
                                </section>
                                <section className="body">
                                    <section className="content">
                                        <p><b>Equipe:</b> <span>{key.equipe}</span></p>
                                        <p><b>Modalidade:</b> <span>{key.modalidade}</span></p>
                                        <p><b>Instituição:</b> <span>{key.instituicao}</span></p>
                                    </section>
                                </section>
                            </section>
                )
            })}
        </>
    )
}

export default ListComp