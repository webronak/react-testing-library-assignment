import React, { FC } from "react";
import { SeatWrapper, Styled1, Styled2 } from "./style";
import { SeatPropType } from "./types";

const Seat: FC<SeatPropType> = ({ type }) => {
  return (
    <SeatWrapper type={type} data-testid={"seatTest"}>
      <Styled1></Styled1>
      <Styled2></Styled2>
    </SeatWrapper>
  );
};

export default Seat;
