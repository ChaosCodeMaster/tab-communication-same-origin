import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModeratorPage } from "./pages/Moderator";
import { HomePage } from "./pages/Home";
import { GamePage } from "./pages/Game";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/moderator" element={<ModeratorPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
