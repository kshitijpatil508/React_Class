import React from "react";

const Samletets = ({ setCookie, cookie }) => {
  function handleChange(e) {
    console.log(e.target.value);
    setCookie("name", e.target.value, { path: "/" });
  }
  console.log(cookie);

  return (
    <>
      <div>Samletets</div>
      <input type="text" placeholder="Enter " onChange={handleChange} />
      
    </>
  );
};

export default Samletets;
