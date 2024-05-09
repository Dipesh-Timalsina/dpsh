import React,  { useState } from "react";
import { BsQrCode } from "react-icons/bs";

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('')
    }

    return (
        <div>
            <h1>QR CODE GENERATOR</h1>
                <div>
                    <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr code"  value={input} placeholder="enter your data" />
                    <button disabled= {input && input.trim()!== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <BsQrCode id="qr-code-value" value= {qrCode} size={400} bgcolor="#fff" />
            </div>
        
        
        </div>
       
    );
}