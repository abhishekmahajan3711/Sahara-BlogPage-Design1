import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import Navbar from "./Navbar";
import Sidecomp from "./Sidecomp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const container = document.getElementById("root");
const CreateRoot = ReactDOMClient.createRoot(container);

CreateRoot.render(
  <BrowserRouter>
    <Sidecomp />
    <Navbar></Navbar>
  </BrowserRouter>
);
