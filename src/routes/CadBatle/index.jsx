import React from "react";
import "./style.css"
import { useParams } from "react-router-dom";

const CadBatle = () =>{
    const { modalidade } = useParams()

    return (
        <>
            {modalidade}
        </>
    )
}

export default CadBatle