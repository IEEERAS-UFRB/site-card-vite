import React from "react";
import "./style.css"
import { useParams } from "react-router-dom";

const Modalidade = () => {

    const { modalidade } = useParams()

    return (
        <>
            {modalidade}
        </>
    )
}

export default Modalidade