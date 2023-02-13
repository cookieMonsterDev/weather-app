import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;

  > div {
    &:nth-child(1) {
      animation-delay: -500ms;
    }

    &:nth-child(2) {
      animation-delay: -350ms;
    }

    &:nth-child(3) {
      animation-delay: -200ms;
    }
  }
`;

const Rotation = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CircleFrag = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 5rem;
  height: 5rem;
  border: 1rem solid #1976d2;
  border-radius: 50%;
  border-color: #1976d2 transparent transparent transparent;
  animation: ${Rotation} 1500ms infinite;
`;
