import styled from "styled-components";

export const InputWrapper = styled.div`
  max-width: 20rem;
  border: 1px solid black;
  padding: 0.7rem;
  position: relative;
  background-color: #ffffff;
`;

export const StyledInput = styled.input`
  border: none;
  font-size: 1rem;
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
`;
