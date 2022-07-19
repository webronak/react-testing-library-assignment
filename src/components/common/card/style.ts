import styled from "styled-components";

export const HoveredContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(98 98 98 / 60%);
  position: absolute;
  z-index: 2;
  transition-duration: 0.5s;
  opacity: 0;
`;

export const CardWrapper = styled.div`
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  width: 20rem;
  height: 20rem;
  position: relative;
  object-fit: contain;
  overflow: hidden;
  :hover {
    ${HoveredContent} {
      opacity: 1;
    }
  }
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
`;
