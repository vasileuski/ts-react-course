import React from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegSuccess = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate
        title={"Registration Confirmation"}
        text={
          "Please activate your account with the activation link in the email test@gmail.com Please, check your email"
        }
        text_button={"Home"}
        link={"/"}
      />
      <Button text={"Login"} type="primary" onClick={() => {}} />
    </Container>
  );
};
