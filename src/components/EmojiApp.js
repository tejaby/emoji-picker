import { AiOutlineSend } from "react-icons/ai";
import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";
import phone from "../assets/image.png";
import "../css/emojiApp.css";

function EmojiApp() {
  const refInput = useRef(null);

  const onSubmit = () => {
    alert("enviado");
    refInput.current.value = "";
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-end container-app">
      <div className="container-img">
        <img
          src={phone}
          className="img-fluid img-background"
          style={{ minWidth: "20rem" }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center container-emoji mb-4">
        <EmojiPicker ref={refInput} />
        <input type="text" className="input-text" ref={refInput} />
        <button className="input-send" onClick={onSubmit}>
          <AiOutlineSend className="fs-5" />
        </button>
      </div>
    </div>
  );
}

export default EmojiApp;
