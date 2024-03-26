import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AddPost from "./pages/addPost/addPost";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
