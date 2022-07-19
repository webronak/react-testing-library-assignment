import React, { FC } from "react";
import { ButtonStyle } from "./style";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, disabled = false }) => {
  return <ButtonStyle disabled={disabled}>{children}</ButtonStyle>;
};

export default Button;
