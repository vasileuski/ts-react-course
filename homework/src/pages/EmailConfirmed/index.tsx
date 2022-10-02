import React from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const EmailConfirmed = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate
        title={"Success"}
        text={"Email confirmed. Your registration is now completed"}
        text_button={"Login"}
        link={"/login"}
      />
    </Container>
  );
};
