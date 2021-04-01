import React from "react";

function Emoji({ unicodeName, character }) {
  return (
    <div className="emoji">
      <p className="character">{character}</p>
      <p className="desc">{unicodeName}</p>
    </div>
  );
}

export default Emoji;
