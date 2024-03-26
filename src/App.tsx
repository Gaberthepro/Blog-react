import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home/home";
import AddPost from "./pages/addPost/addPost";
import Post from "./pages/Post/post";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/Post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
