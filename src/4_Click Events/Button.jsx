import { useState } from "react";

function Button() {
    
  const [liked, setLiked] = useState("Click me😉");

  const handleClick = (e) => {
    e.target.textContent = "OUCH! 😩";
  };

  const handleOrder = () => {
    console.log('Order Placed!');
  };

  return (
    <>
      <button onDoubleClick={handleClick}>
        Click me😉
      </button>

      <button onClick={handleOrder}>
        Order Now
      </button>

      <button onClick ={() => setLiked(!liked)}>
        {liked ? "Like 🤍" : "Liked ❤️"}
      </button>
    </>
  );
}

export default Button;