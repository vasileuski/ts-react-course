import React from "react";
import { Link } from "react-router-dom";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";

export const Main = () => {
  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
};
