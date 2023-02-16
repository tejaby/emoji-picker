import { useState, useEffect, forwardRef, useRef } from "react";
import { data } from "../data/data";
import EmojiButton from "./EmojiButton";
import EmojiInput from "./EmojiInput";
import { BsEmojiSmile } from "react-icons/bs";
import "../css/emojiPicker.css";

export function EmojiPicker(props, ref) {
  const [emojiEnabled, setEmojiEnabled] = useState(false);
  const [emojis, setEmojis] = useState(data);

  const refContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!refContainer.current.contains(e.target)) {
        setEmojiEnabled(false);
        setEmojis(emojis);
      }
    });
  }, []);

  const handleEnabled = (e) => {
    setEmojiEnabled(!emojiEnabled);
  };

  const onSearch = (e) => {
    const query = e.target.value.toLowerCase();
    {
      if (!!query) {
        const search = data.filter((emoji) => {
          return (
            emoji.name.toLowerCase().includes(query) ||
            emoji.keyWords.toLowerCase().includes(query)
          );
        });
        setEmojis(search);
      } else {
        setEmojis(data);
      }
    }
  };

  const addEmoji = (emoji) => {
    const refPos = ref.current.selectionStart;
    const refValue = ref.current.value;
    const prev = refValue.slice(0, refPos);
    const next = refValue.slice(refPos);
    ref.current.value = prev + emoji.symbol + next;

    ref.current.selectionStart = refPos + emoji.symbol.length;
    ref.current.selectionEnd = refPos + emoji.symbol.length;
    ref.current.focus();
  };

  return (
    <div ref={refContainer}>
      <button className="emoji-picker" onClick={handleEnabled}>
        <BsEmojiSmile className="fs-5" />
      </button>
      {emojiEnabled ? (
        <div className="container-emoji-picker text-center">
          <EmojiInput onSearch={onSearch} />
          <div>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.symbol}
                emoji={emoji}
                addEmoji={addEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
