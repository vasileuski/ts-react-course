import { Route, Routes } from "react-router-dom";
import { AddPost } from "../pages/AddPost";
import { Emoji } from "../pages/Emoji";
import { Login } from "../pages/Login";
import { RegSuccess } from "../pages/RegSuccess";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";
import { EmailConfirmed } from "../pages/EmailConfirmed";

export const RouterRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/emojis" element={<Emoji />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/addpost" element={<AddPost />}></Route>
      <Route path="/regsuccess" element={<RegSuccess />}></Route>
      <Route path="/emailconfirmed" element={<EmailConfirmed />}></Route>
    </Routes>
  );
};
