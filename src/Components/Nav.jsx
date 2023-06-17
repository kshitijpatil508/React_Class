import React from "react";

function add() {
  let num = Number(document.getElementById("num").innerText);
  num++;
  document.getElementById("num").innerText = num;
}

function sub() {
  let num = Number(document.getElementById("num").innerText);
  num--;
  document.getElementById("num").innerText = num;
}

const Nav = () => {
  return (
    <div>
      <p>NAV IS WORKING</p>
      <p id="num">0</p>
      <button onClick={add}> add +</button>
      <button onClick={sub}> sub -</button>
    </div>
  );
};

export default Nav;
