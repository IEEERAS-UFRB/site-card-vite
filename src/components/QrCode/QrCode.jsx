import React, { useEffect, useState } from "react"

import QRCode from "react-qr-code"
import QRCodeLink from "qrcode"

const QrCode = ({id}) => {

    console.log(id)

    let newLink = `https://f2f4-200-128-102-253.ngrok.io/${id}`

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
            <div>
                <QRCode value={newLink} id="qr-code" />
                <a href={qrCodeLink} download={`qrcode.png`} >baixar qr</a>
            </div>
        </>
    )
}

export default QrCode