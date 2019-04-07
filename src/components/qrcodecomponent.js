import React from 'react'
import * as QRCode from 'qrcode.react'

class QRCodeGenerator extends React.Component{
    render(){
        return(
            <div>
                {/* <QRCode value="http://google.com" /> */}
                <QRCode value="http://youtube.com" />
            </div>
        )
    }
}

export default QRCodeGenerator;