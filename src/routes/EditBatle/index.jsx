import React from "react";
import "./style.css"
import { useParams } from "react-router-dom";

const EditBatle = () => {

    const { modalidade } = useParams()

    return (
        <>
            {modalidade}
        </>
    )
}

export default EditBatle