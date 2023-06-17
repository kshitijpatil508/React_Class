import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Samletets from "./Components/Samletets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import Product from "./Components/product";
function App() {
  const [cookie, setCookie] = useCookies(" ");
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Samletets setCookie={setCookie} cookie={cookie} />}
          ></Route>
          <Route path="/pro/:userid" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
