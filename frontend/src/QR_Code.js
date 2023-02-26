import React from "react";
import photo from "./images/image-qr-code.png";

const QRCode = () => {
  return (
    <div
      className="flex justify-center items-start relative top-28 h-128 w-72 rounded-lg"
      style={{ backgroundColor: " hsl(0, 0%, 100%)" }}
    >
      <img
        className="w-64 mt-3 rounded-md object-scale-down"
        src={photo}
        alt="QR Code"
      />
    </div>
  );
};

export default QRCode;
