import React from "react";
import photo from "./images/image-qr-code.png";

const QRCode = () => {
  return (
    <div
      className="flex flex-col justify-start gap-y-5 items-center relative shadow-lg top-28 h-128 w-72 rounded-large"
      style={{ backgroundColor: " hsl(0, 0%, 100%)" }}
    >
      <img
        className="w-64 mt-3 rounded-medium object-scale-down"
        src={photo}
        alt="QR Code"
      />
      <div className="">
        <h1 className="text-center text-design_dblue mx-8 text-lg font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-center text-design_gblue mx-8 mt-2 text-sm font-normal">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCode;
