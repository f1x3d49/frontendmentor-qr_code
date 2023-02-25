import React from "react";
import photo from "./images/image-qr-code.png";

const QRCode = () => {
  return (
    <div className="bg-black-500 w-96 h-80">
      <img className="w-64" src={photo} alt="QR Code" />
    </div>
  );
};

export default QRCode;
