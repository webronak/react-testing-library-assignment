import styled from "styled-components";
import { SeatPropType } from "./types";

const selectColor = (type, colors) => {
  const map = {
    active: colors.accentColor,
    disabled: colors.muteColor,
    default: colors.defaultColor,
  };
  return map[type];
};

export const Styled1 = styled.div`
  height: 50%;
  bottom: 0;
  width: 100%;
  position: absolute;
`;

export const Styled2 = styled.div`
  height: 50%;
  bottom: 0;
  border: 2px solid white;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const SeatWrapper = styled.div<SeatPropType>`
  width: 5rem;
  height: 5rem;
  position: relative;
  ${Styled1} {
    background-color: ${(props) => selectColor(props.type, props.theme)};
  }
  ${Styled2} {
    background-color: ${(props) => selectColor(props.type, props.theme)};
  }
`;
