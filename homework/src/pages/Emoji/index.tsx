import React from "react";
import { Container } from "../../components/Container";
import { EmojiList } from "../../components/Emoji/EmojiList";
import { Header } from "../../components/Header";

export const Emoji = () => {
  return (
    <Container>
      <Header />
      <EmojiList />
    </Container>
  );
};
