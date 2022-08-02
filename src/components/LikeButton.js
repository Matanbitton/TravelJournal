import React, { useState } from "react";

export default function LikeButton() {
  const [isClicked, setClick] = useState(false);

  function click() {
    setClick(!isClicked);
  }
  return (
    <div className={isClicked ? "like-clicked" : "like"}>
      <button onClick={click}>Like</button>
    </div>
  );
}
