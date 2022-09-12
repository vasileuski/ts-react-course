import React from "react";
import "./index.css";
import { Clicker } from "./components/Clicker";
import { Cards } from "./components/Cards";
import { EmojiList } from "./components/Emoji/EmojiList";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList/List";
import { Header } from "./components/Header";
import { User } from "./components/User";
import { Converter } from "./components/Converter";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { RegForm } from "./components/RegForm";
import { BrowserRouter } from "react-router-dom";
import { RouterRoot } from "./router";

export function App() {
  return (
    <BrowserRouter>
      <RouterRoot />
    </BrowserRouter>
  );
}
