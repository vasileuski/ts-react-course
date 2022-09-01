import React from "react";
import "./index.css";
import { Clicker } from "./components/Clicker";
import { Cards } from "./components/Cards";
import { EmojiList } from "./components/Emoji/EmojiList";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList/List";

export function App() {
  return (
    <div className="container">
      {/* <Cards /> */}
      {/* <Clicker /> */}
      <EmojiList />
      {/* <TodoList /> */}
    </div>
  );
}
