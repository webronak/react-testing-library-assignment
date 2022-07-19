import React, { FC } from "react";
import { TypographyProps } from "./types";
import { TextStyle } from "./styles";

const Text: FC<TypographyProps> = ({ children, variant, color }) => {
  const componentType = (variant as keyof JSX.IntrinsicElements) || "span";
  return (
    <TextStyle color={color} textVariant={variant} as={componentType}>
      {children}
    </TextStyle>
  );
};

export default Text;
