import styled from "@emotion/styled";
import { css } from "@emotion/css";
import CloseIcon from "@mui/icons-material/Close";

export const Container = styled.div<{ isMenu: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(4rem + 80vh);
  overflow: hidden;
  visibility: hidden;
  color: white;

  ${({ isMenu }) =>
    isMenu &&
    css`
      visibility: visible;
    `}

  @media only screen and (max-width: 25rem) {
    height: 100vh;
  }

  @media only screen and (max-width: 56.25rem) {
    height: 100vh;
  }
`;

export const BlurOverlay = styled.div<{ isMenu: boolean }>`
  position: relative;
  z-index: 50;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.3rem);
  visibility: hidden;

  ${({ isMenu }) =>
    isMenu &&
    css`
      visibility: visible;
    `}
`;

export const Menu = styled.section<{ isMenu: boolean }>`
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 2rem;
  background-color: #132f4c;
  overflow: auto;
  transform: translateX(100%);
  transition: 700ms ease-in-out;

  ${({ isMenu }) =>
    isMenu &&
    css`
      transform: translateX(0);
    `}

  > label {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0 1rem 0;
  }

  > ul {
    width: 100%;
    margin-top: 1.8rem;
    display: grid;
    gap: 0.6rem;
  }
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 3rem;
  height: 3rem;
  color: white;

  @media only screen and (max-width: 25rem) {
    left: 0.5rem;
    top: 0.5rem;
    width: 2rem;
    height: 2rem;
  }
`;
