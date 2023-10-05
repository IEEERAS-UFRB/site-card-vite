import React, { useEffect, useState } from "react"

import QRCode from "react-qr-code"
import QRCodeLink from "qrcode"

import "./style.css"

const QrCode = ({id}) => {

    console.log(id)

    let newLink = `http://localhost:4000/${id}`

    const [qrCodeLink, setQrCodeLink] = useState("")

    useEffect(() =>{
        handleGenerateImage(newLink)
    }, [newLink])

    function handleGenerateImage(link_image) {
        QRCodeLink.toDataURL(link_image, {
            width: 600,
            margin: 3
        }, (error, url) => {
            console.log("chamada")
            setQrCodeLink(url)
        })
    }

    return (
        <>
            <div id="QR">
                <QRCode value={newLink} id="qr-code" />
                <a href={qrCodeLink} download={`qrcode.png`} >baixar qr</a>
            </div>
        </>
    )
}

export default QrCode