import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Game, Home, Results } from "./pages";
import { Modal } from "./components/index";

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/settings" element={<Results />} />
    </Routes>
    <Modal />
  </>
);

export default App;
