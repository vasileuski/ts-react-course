import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { AddPostForm } from "../../components/AddPostForm";

export const AddPost = () => {
  return (
    <Container>
      <Header />
      <AddPostForm />
    </Container>
  );
};
