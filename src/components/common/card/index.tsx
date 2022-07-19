import React, { FC } from "react";
import { CardWrapper, BgImg, HoveredContent } from "./style";
import { CardProps } from "./types";
import image from "../../../constants/images/image1.jpeg";

const Card: FC<CardProps> = ({ hoveredContent }) => {
  return (
    <CardWrapper data-testid="card">
      <BgImg src={image} alt="pic" />
      <HoveredContent>{hoveredContent}</HoveredContent>
    </CardWrapper>
  );
};

export default Card;
