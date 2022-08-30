import React from "react";
import "./index.css";
import { Clicker } from "./components/Clicker";
import { Cards } from "./components/Cards";

export function App() {
  return (
    <div className="container">
      <Cards />
      {/* <Clicker /> */}
    </div>
  );
}
