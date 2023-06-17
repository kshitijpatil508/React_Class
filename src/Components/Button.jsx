import React from "react";

const Button = ({ msg, func }) => {
  const handleClick = () => {
    func(msg);
  };

  return (
    <div>
      <button onClick={handleClick}>`Click ${msg}`</button>
    </div>
  );
};

export default Button;
