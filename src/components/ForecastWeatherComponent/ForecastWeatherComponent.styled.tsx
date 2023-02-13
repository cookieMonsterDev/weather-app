import styled from "@emotion/styled";

export const Container = styled.section`
  margin-top: 1rem;
  width: 100%;
  min-height: 18rem;
  border-radius: 0.6rem;
  background-color: #132f4c;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    padding: 1rem;
    color: white;
    text-align: center;
  }
`;

export const List = styled.ul`
  min-height: 13rem;
  overflow: auto;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  @media only screen and (max-width: 25rem) {
    margin-bottom: 1rem;
    min-width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
`;
