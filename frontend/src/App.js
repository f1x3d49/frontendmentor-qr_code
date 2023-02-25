import photo from "./images/image-qr-code.png";

function App() {
  return (
    <div className="bg-design_lgrey w-screen h-screen">
      <div className="bg-red w-100 h-96">
        <img className="w-64" src={photo} alt="QR Code" />
      </div>
    </div>
  );
}

export default App;
