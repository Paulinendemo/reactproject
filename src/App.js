import React from "react";
import Drinks from "./components/Drinks";
import DrinkInfo from "./components/DrinkInfo";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import DrinkList from "./components/DrinkList";
import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Drinks/>} />
          <Route path="/:DrinklId" element={<DrinkInfo />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Subscribe />} />
          <Route path="drinklist"element={<DrinkList/>} />
          <Route path="recipe"element={<Recipe/>} />
          <Route path="nav"element={<Navbar/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
