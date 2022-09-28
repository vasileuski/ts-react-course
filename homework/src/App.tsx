import "./index.css";
import React, { createContext, useState } from "react";
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
import { LoginForm } from "./components/LoginForm";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}>({ isDark: false, setIsDark: () => {} });

export function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Context.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
        <RouterRoot />
      </Context.Provider>
    </BrowserRouter>
  );
}
