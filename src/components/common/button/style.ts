import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.6rem 2rem;
  border: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  cursor: pointer;
  :active,
  :hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  :disabled {
    background-color: ${({ theme }) => theme.muteColor};
  }
`;
