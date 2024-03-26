import React, { Fragment, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./pages/Home/home";
import AddPost from "./pages/addPost/addPost";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addPost" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
