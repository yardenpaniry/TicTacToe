import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import TicTacToe from "./TicTacToe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
