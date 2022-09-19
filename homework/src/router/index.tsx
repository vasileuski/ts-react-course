import { Route, Routes } from "react-router-dom";
import { Emoji } from "../pages/Emoji";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";

export const RouterRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/emojis" element={<Emoji />}></Route>
    </Routes>
  );
};
