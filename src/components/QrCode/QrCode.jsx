import React, { useState } from "react"

import QRCode from "react-qr-code"
import QRCodeLink from "qrcode"

const QrCode = () => {

    const [link, setLink] = useState("")
    const [qrCodeLink, setQrCodeLink] = useState("")

    function handleQrCode(e) {
        setLink(e.target.value)
        handleGenerateImage(e.target.value)
    }

    function handleGenerateImage(link_image) {
        QRCodeLink.toDataURL(link_image, {
            width: 600,
            margin: 3
        }, (error, url) => {
            setQrCodeLink(url)
        })
    }

    return (
        <>
            <div>
                <QRCode value={link} id="qr-code" />
                <input type="text" placeholder="link" onChange={(e) => handleQrCode(e)} value={link} />
                <a href={qrCodeLink} download={`qrcode.png`} >baixar qr</a>
            </div>
        </>
    )
}

export default QrCode