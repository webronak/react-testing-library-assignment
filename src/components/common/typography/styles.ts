import styled, { css } from "styled-components";

const getTextStyle = ({ theme, ...props }) => {
  const { color, textVariant, textAlign } = props,
    { fontSize, fontWeight, fontFamily } = theme.font[textVariant];

  return css`
    margin: 0;
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    font-family: ${fontFamily};
    text-align: ${textAlign};
  `;
};

export const TextStyle = styled("span")`
  ${getTextStyle}
`;

export const H1Style = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const H2Style = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const H3Style = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const H4Style = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const H5Style = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.1325rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const H6Style = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const Display1Style = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 3rem;
  font-weight: 500;
  color: ${({ color }) => color};
`;

export const Display2Style = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 2.25rem;
  font-weight: 500;
  color: ${({ color }) => color};
`;

export const BodyText1 = styled.p`
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: ${({ color }) => color};
`;

export const BodyText2 = styled.p`
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: ${({ color }) => color};
`;

export const BodyText3 = styled.p`
  font-size: 0.75rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: ${({ color }) => color};
`;
