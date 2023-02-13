import styled from "@emotion/styled";

export const Container = styled.nav`
  width: 50vw;
  height: 4rem;
  padding: 0.3rem 0.5rem;
  background-color: #132f4c;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;

  > section {
    flex: 1;
    display: flex;
    align-items: center;

    &:nth-child(2) {
      justify-content: flex-end;
    }
  }

  @media only screen and (max-width: 56.25rem) {
    width: 100vw;
  }
`;
