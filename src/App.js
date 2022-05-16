import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup_Signin from "./pages/signup/signin_signup";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Signup_Signin />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
