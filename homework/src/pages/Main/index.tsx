import React from "react";
import { Link } from "react-router-dom";
import { Cards } from "../../components/Cards";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export const Main = () => {
  return (
    <Container>
      <Header />
      <Cards />
    </Container>
  );
};
