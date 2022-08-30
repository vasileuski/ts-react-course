import React from "react";
import "./index.css";
import { Clicker } from "./components/Clicker";
import { Cards } from "./components/Cards";
import { Emojis } from "./components/EmojiList";
import { Input } from "./components/Input";

export function App() {
  return (
    <div className="container">
      {/* <Cards /> */}
      {/* <Clicker /> */}
      <Input value={""} onChange={() => {}} />
      <Emojis />
    </div>
  );
}
