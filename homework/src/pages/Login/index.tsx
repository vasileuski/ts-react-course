import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";

export const Login = () => {
  return (
    <Container>
      <Header />
      <LoginForm />
    </Container>
  );
};
