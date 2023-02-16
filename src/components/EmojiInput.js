import { useState } from "react";
import "../css/emojiInput.css";
import { BsSearch } from "react-icons/bs";

function EmojiInput({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        className="emoji-input"
        value={value}
      />
      <button className="emoji-search"><BsSearch className="fs-5"/></button>
    </div>
  );
}

export default EmojiInput;
