import React, { useState } from "react";
import QrCode from "qrcode.react";

const QrCodeGen = () => {
  const [text, setText] = useState("");

  const handleChnage = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>QR Code Generator</h3>
      <label htmlFor="text">Enter text to generate QR Code:</label>
      <br />
      <br />
      <input type="text" id="text" onChange={handleChnage}></input>
      <br />
      <br />
      {text && <QrCode value={text} size={256} />}
    </div>
  );
};
export default QrCodeGen;
