import second from '../css/emojiButton.css'
function EmojiButton({ emoji, addEmoji }) {
  const handleAddEmoji = () => {
    addEmoji(emoji);
  };
  return (
    <button className="button-emoji" onClick={handleAddEmoji}>
      {emoji.symbol}
    </button>
  );
}

export default EmojiButton;
