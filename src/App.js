import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import DATA_LIST from "./data/data.js";

export default function App() {
  const CardComp = DATA_LIST.map((item, index) => (
    <Card imgURL={item.imgURL} key={index} />
  ));
  return (
    <div>
      <Navbar />
      <div className="container">{CardComp}</div>
    </div>
  );
}
