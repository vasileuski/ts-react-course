import React, { useState } from "react";
import "./index.css";
import { Button } from "./components/Button";
import { Signin } from "./components/Signin";
import { User } from "./components/User";

export const App = () => {
  const [value, setValue] = useState(false);
  const handleClickValue = () => setValue(!value);

  return (
    <div>
      <Button content="Button" onClick={handleClickValue} isDisabled={value} />
      <Signin text="Sign In" />
      <User username="Artsiom Vasileuski" />
    </div>
  );
};
