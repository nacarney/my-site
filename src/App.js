import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layout/Layout";
import AboutMePage from "./pages/AboutMePage";
import ReadingPage from "./pages/ReadingPage";
import LearningPage from "./pages/LearningPage";
import HobbiesPage from "./pages/HobbiesPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-me" element={<AboutMePage />}></Route>
        <Route path="/reading-page" element={<ReadingPage />}></Route>
        <Route path="/learning-page" element={<LearningPage />}></Route>
        <Route path="/hobbies-page" element={<HobbiesPage />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
